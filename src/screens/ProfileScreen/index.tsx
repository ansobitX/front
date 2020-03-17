import classnames from 'classnames';
import * as React from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { RouterProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import { ProfileApiKeys, ProfileVerification } from '../../containers';
import { ProfileAccountActivity } from '../../containers/ProfileAccountActivity';
import { ProfileAuthDetails } from '../../containers/ProfileAuthDetails';
import { ReferralProgram } from '../../containers/ReferralProgram';
import { setDocumentTitle } from '../../helpers';
import { RootState, selectSidebarState } from '../../modules';

interface ReduxProps {
    isSidebarOpen: boolean;
}

type Props = ReduxProps & RouterProps;

class ProfileComponent extends React.Component<Props, InjectedIntlProps> {

    public componentDidMount() {
        setDocumentTitle('Profile');
    }

    public goBack = () => {
        this.props.history.goBack();
    };

    public render() {
        const { isSidebarOpen } = this.props;
        const containerClass = classnames('pg-container pg-profile-page', {
            'pg-container--open': isSidebarOpen,
        });

        return (
            <div className={containerClass}>
                <div className="pg-profile-page__details">
                    <div className="row pg-profile-page-header pg-profile-page-header-first">
                        <h3 className="col-12">
                            <FormattedMessage id="page.body.profile.header.account"/>
                        </h3>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 mx-0">
                            <div className="row col-12 mx-0">
                                <ProfileAuthDetails/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <ProfileVerification/>
                        </div>
                    </div>
                    <div className="row px-4">
                        <div className="col-12 mx-0">
                            <ReferralProgram/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ProfileApiKeys/>
                    </div>
                    <div className="col-12">
                        <ProfileAccountActivity/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState): ReduxProps => ({
    isSidebarOpen: selectSidebarState(state),
});

// tslint:disable-next-line:no-any
const ProfileScreen = injectIntl(withRouter(connect(mapStateToProps)(ProfileComponent) as any));

export {
    ProfileScreen,
};
