import { Button } from 'react-bootstrap';
import { History } from 'history';
import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CustomInput, CopyableTextField } from '../../components';
import { setDocumentTitle } from '../../helpers';
import { alertPush, RootState } from '../../modules';
import {
    generate2faQRFetch,
    selectTwoFactorAuthBarcode,
    selectTwoFactorAuthQR,
    selectTwoFactorAuthSuccess,
    toggle2faFetch,
    toggleUser2fa,
} from '../../modules/user/profile';

interface OwnProps {
    closeModal: () => void;
}

interface RouterProps {
    history: History;
}

interface ReduxProps {
    barcode: string;
    qrUrl: string;
    success?: boolean;
}

interface DispatchProps {
    toggle2fa: typeof toggle2faFetch;
    generateQR: typeof generate2faQRFetch;
    toggleUser2fa: typeof toggleUser2fa;
    fetchSuccess: typeof alertPush;
}

type Props = RouterProps & ReduxProps & DispatchProps & InjectedIntlProps & OwnProps;

interface State {
    otpCode: string;
}

type CopyTypes = HTMLInputElement | null;

const copy = (id: string) => {
    const copyText: CopyTypes = document.querySelector(`#${id}`);

    if (copyText) {
        copyText.select();

        document.execCommand('copy');
        (window.getSelection() as any).removeAllRanges(); // tslint:disable-line
    }
};

class ToggleTwoFactorAuthComponent extends React.Component<Props, State> {
    public state = {
        otpCode: '',
    };

    public componentDidMount() {
        setDocumentTitle('Two factor authentication');
        const enable2fa = this.get2faAction();
        if (enable2fa) {
            this.props.generateQR();
        }
    }

    public componentWillReceiveProps(next: Props) {
        if (!this.props.success && next.success) {
            this.handleNavigateToProfile();
        }
    }

    public componentDidUpdate(prev: Props) {
        if (!prev.success && this.props.success) {
            this.props.toggleUser2fa();
        }
    }

    public translate = (e: string) => {
        return this.props.intl.formatMessage({ id: e });
    };

    public doCopy = () => {
        copy('referral-id');
        this.props.fetchSuccess({message: ['page.body.wallets.tabs.deposit.ccy.message.success'], type: 'success'});
    };

    public render() {
        const enable2fa = this.get2faAction();
        return (
            <div className="pg-profile-two-factor-auth">
                {this.renderToggle2fa(enable2fa)}
            </div>
        );
    }

    private renderToggle2fa = (enable2fa: boolean) => {
        const {
            barcode,
            qrUrl,
        } = this.props;
        const { otpCode } = this.state;

        const secretRegex = /secret=(\w+)/;
        const secretMatch = qrUrl.match(secretRegex);
        const secret = secretMatch ? secretMatch[1] : null;
        const submitHandler = enable2fa ? this.handleEnable2fa : this.handleDisable2fa;

        return (
            <div className="container pg-profile-two-factor-auth__form">
                <div className="pg-profile-two-factor-auth__header">
                    <div className="pg-profile-two-factor-auth__header__text">
                        {this.translate('page.body.profile.header.account.content.twoFactorAuthentication.header')}
                    </div>
                    <div className="close" onClick={this.goBack}>
                        <img alt="" src={require('./close.svg')} />
                    </div>
                </div>

                <div className="pg-profile-two-factor-auth__body">
                    <div className="pg-profile-two-factor-auth__body--text">
                        <div className="pg-profile-two-factor-auth__body--text--group">
                            <div className="number">1</div>
                            <div className="info">
                                {this.translate('page.body.profile.header.account.content.twoFactorAuthentication.message.1')}
                                <a target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/ru/app/google-authenticator/id388497605?mt=8">AppStore </a>
                                {this.translate('page.body.profile.header.account.content.twoFactorAuthentication.message.or')}
                                <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl">Google play</a>
                            </div>
                        </div>
                        <div className="pg-profile-two-factor-auth__body--text--group">
                            <div className="number">2</div>
                            <div className="info">
                            {this.translate('page.body.profile.header.account.content.twoFactorAuthentication.message.2')}
                            <br />
                            {this.translate('page.body.profile.header.account.content.twoFactorAuthentication.message.3')}
                            </div>
                        </div>
                    </div>
                    <div className="pg-profile-two-factor-auth__body--barcode">
                        {enable2fa && this.renderTwoFactorAuthQR(barcode)}
                    </div>
                </div>
                <div className="pg-profile-two-factor-auth__copyablefield">
                    {enable2fa && secret && this.renderSecret(secret)}
                </div>
                <div className="pg-profile-two-factor-auth__body">
                    <div className="pg-profile-two-factor-auth__body--text">
                        <div className="pg-profile-two-factor-auth__body--text--group">
                                <div className="number">3</div>
                                <div className="info">{this.translate('page.body.profile.header.account.content.twoFactorAuthentication.message.4')}</div>
                        </div>
                    </div>
                    <div className="input-2fa">
                        <fieldset className="pg-profile-two-factor-auth__body--input">
                            <CustomInput
                                handleChangeInput={this.handleOtpCodeChange}
                                type="tel"
                                inputValue={otpCode}
                                placeholder={this.translate('page.body.profile.header.account.content.twoFactorAuthentication.subHeader')}
                                onKeyPress={this.handleEnterPress}
                                label={this.translate('page.body.profile.header.account.content.twoFactorAuthentication.subHeader')}
                                defaultLabel=""
                            />
                        </fieldset>
                    </div>
                </div>
                <div className="pg-profile-two-factor-auth__button">
                    <Button
                        onClick={submitHandler}
                        size="lg"
                        variant="primary"
                        type="button"
                        block={true}
                    >
                        {this.translate('page.body.profile.header.account.content.twoFactorAuthentication.enable')}
                    </Button>
                </div>
            </div>
        );
    };

    private renderTwoFactorAuthQR = (barcode: string) => {
        const src = `data:image/png;base64,${barcode}`;
        return barcode.length > 0 && <img alt="" className="pg-profile-two-factor-auth__qr" src={src} />;
    };

    private renderSecret = (secret: string) => {
        return (
            <div className="pg-profile-two-factor-auth__copyablefield__container">
                <legend>{this.translate('page.body.profile.header.account.content.twoFactorAuthentication.message.mfa')}</legend>
                <fieldset onClick={this.doCopy}>
                    {secret && <CopyableTextField
                        value={secret}
                        fieldId="secret-2fa"
                        label=""
                    />
                    }
                </fieldset>
            </div>
        );
    };

    private handleOtpCodeChange = (value: string) => {
        this.setState({
            otpCode: value,
        });
    };

    private handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const enable2fa = this.get2faAction();
        const submitHandler = enable2fa ? this.handleEnable2fa : this.handleDisable2fa;
        if (event.key === 'Enter') {
            event.preventDefault();
            submitHandler();
        }
    };

    private handleEnable2fa = () => {
        this.props.toggle2fa({
            code: this.state.otpCode,
            enable: true,
        });
    };

    private handleDisable2fa = () => {
        this.props.toggle2fa({
            code: this.state.otpCode,
            enable: false,
        });
    };

    private handleNavigateToProfile = () => {
        this.props.history.push('/settings');
    };

    private get2faAction = () => {
        const routingState = this.props.history.location.state;
        return routingState ? routingState.enable2fa : false;
    };

    private goBack = () => {
        this.props.closeModal();
    };
}

const mapStateToProps: MapStateToProps<ReduxProps, Props, RootState> = state => ({
    qrUrl: selectTwoFactorAuthQR(state),
    barcode: selectTwoFactorAuthBarcode(state),
    success: selectTwoFactorAuthSuccess(state),
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
    generateQR: () => dispatch(generate2faQRFetch()),
    toggle2fa: ({ code, enable }) => dispatch(toggle2faFetch({ code, enable })),
    toggleUser2fa: () => dispatch(toggleUser2fa()),
    fetchSuccess: payload => dispatch(alertPush(payload)),
});

const ProfileTwoFactorAuthScreen = injectIntl(withRouter(connect(mapStateToProps, mapDispatchToProps)(ToggleTwoFactorAuthComponent) as any));

export {
    ProfileTwoFactorAuthScreen,
};
