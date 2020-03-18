import classnames from 'classnames';
import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { RouterProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import { ProfileApiKeys, ProfileAccountActivity } from '../../../containers';
import { ProfileAuthDetails, ProfileVerification } from '../../containers';
import { setDocumentTitle } from '../../../helpers';
import { RootState, selectSidebarState } from '../../../modules';

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
                    <ProfileAuthDetails/>
                    <ProfileVerification/>
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
