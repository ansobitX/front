import classnames from 'classnames';
import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import {
    DeployLocationSelect,
    DeployExchangeDetails,
    DeployPackageSelect,
} from '../../components';
import { RootState, selectSidebarState } from '../../../modules';

interface ReduxProps {
    isSidebarOpen: boolean;
}

type Props = ReduxProps & InjectedIntlProps;

interface State {
    exchangeName: string;
    domainName: string;
    selectedPackage: string;
    selectedLocation: string;
}

export class DeployScreenClass extends React.Component<Props, State> {
    public state = {
        exchangeName: '',
        domainName: '',
        selectedPackage: 'corporate',
        selectedLocation: 'amsterdam',
    };

    public render() {
        const { isSidebarOpen } = this.props;
        const {
            exchangeName,
            domainName,
            selectedPackage,
            selectedLocation,
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
            </div>
        );
    }

    private handleChangeInput = (key: string, value: string) => {
        // @ts-ignore
        this.setState({
            [key]: value,
        });
    }

    private translate = (key: string) => this.props.intl.formatMessage({id: key});
}

const mapStateToProps = (state: RootState): ReduxProps => ({
    isSidebarOpen: selectSidebarState(state),
});

export const DeployScreen = injectIntl(connect(mapStateToProps)(DeployScreenClass));
