import classnames from 'classnames';
import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { connect, MapDispatchToPropsFunction } from 'react-redux';
import { WalletItemProps } from '../../../components';
import {
    DeployExchangeDetails,
    DeployLocationSelect,
    DeployPackageDetails,
    DeployPackageSelect,
    DeployTotalActions,
} from '../../components';
import {
    currenciesFetch,
    Currency,
    RootState,
    selectCurrencies,
    selectSidebarState,
    selectWallets,
    walletsFetch,
} from '../../../modules';

interface ReduxProps {
    currencies: Currency[];
    isSidebarOpen: boolean;
    wallets: WalletItemProps[];
}

interface DispatchProps {
    fetchCurrencies: typeof currenciesFetch;
    fetchWallets: typeof walletsFetch;
}

type Props = ReduxProps & DispatchProps & InjectedIntlProps;

interface State {
    exchangeName: string;
    domainName: string;
    selectedPackage: string;
    selectedLocation: string;
    termsAccepted: boolean;
}

export class DeployScreenClass extends React.Component<Props, State> {
    public state = {
        exchangeName: '',
        domainName: '',
        selectedPackage: 'corporate',
        selectedLocation: 'amsterdam',
        termsAccepted: false,
    };

    public componentDidMount() {
        const { currencies, wallets } = this.props;

        if (wallets.length === 0) {
            this.props.fetchWallets();
        }

        if (currencies.length === 0) {
            this.props.fetchCurrencies();
        }
    }

    public render() {
        const {
            currencies,
            isSidebarOpen,
            wallets,
        } = this.props;
        const {
            exchangeName,
            domainName,
            selectedPackage,
            selectedLocation,
            termsAccepted,
        } = this.state;

        const containerClass = classnames('pg-container pg-deploy', {
            'pg-container--open': isSidebarOpen,
        });

        return (
            <div className={containerClass}>
                <DeployExchangeDetails
                    exchangeName={exchangeName}
                    domainName={domainName}
                    handleChangeInput={this.handleChangeInput}
                    translate={this.translate}
                />
                <DeployPackageSelect
                    selectedPackage={selectedPackage}
                    handleSelectPackage={this.handleChangeInput}
                    translate={this.translate}
                />
                <DeployLocationSelect
                    selectedLocation={selectedLocation}
                    handleSelectLocation={this.handleChangeInput}
                    translate={this.translate}
                />
                <div className="pg-deploy__row-wrap">
                    <DeployPackageDetails
                        selectedPackage={selectedPackage}
                        translate={this.translate}
                    />
                    <DeployTotalActions
                        currencies={currencies}
                        handleAgreeTerms={this.handleChangeInput}
                        handleClickDeploy={this.handleDeploy}
                        selectedPackage={selectedPackage}
                        termsAccepted={termsAccepted}
                        translate={this.translate}
                        wallets={wallets}
                    />
                </div>
            </div>
        );
    }

    private handleChangeInput = (key: string, value: string | boolean) => {
        // @ts-ignore
        this.setState({
            [key]: value,
        });
    }

    private handleDeploy = () => {
        window.console.log('Success!');
    }

    private translate = (key: string) => this.props.intl.formatMessage({id: key});
}

const mapStateToProps = (state: RootState): ReduxProps => ({
    currencies: selectCurrencies(state),
    isSidebarOpen: selectSidebarState(state),
    wallets: selectWallets(state),
});

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> =
    dispatch => ({
        fetchCurrencies: () => dispatch(currenciesFetch()),
        fetchWallets: () => dispatch(walletsFetch()),
    });

export const DeployScreen = injectIntl(connect(mapStateToProps, mapDispatchToProps)(DeployScreenClass));
