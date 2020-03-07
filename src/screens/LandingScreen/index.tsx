import { History } from 'history';
import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { RouteProps, withRouter } from 'react-router-dom';
import {
    LandingAdaptiveStack,
    LandingBenefits,
    LandingCloudStack,
    LandingFeatures,
    LandingLaunch,
    LandingUnderHood,
    LandingUseCases,
} from '../../components';

interface HistoryProps {
    history: History;
}

type Props = HistoryProps & RouteProps & InjectedIntlProps;

class Landing extends React.Component<Props> {

    public render() {
        return (
            <div className="pg-landing-screen">
                <LandingLaunch translate={this.translate} />
                <LandingBenefits translate={this.translate} />
                <LandingUnderHood translate={this.translate} />
                <LandingFeatures translate={this.translate} />
                <LandingAdaptiveStack translate={this.translate} />
                <LandingUseCases changeRoute={this.changeRoute} translate={this.translate} />
                <LandingCloudStack changeRoute={this.changeRoute} translate={this.translate} />
                <LandingUseCases changeRoute={this.changeRoute} translate={this.translate} />
            </div>
        );
    }

    private changeRoute = (isVisible, route) => {
        const { history } = this.props;

        if (isVisible) {
            history.replace(`#${route}`);
        }
    }

    private translate = (key: string) => this.props.intl.formatMessage({id: key});
}

export const LandingScreen = withRouter(injectIntl(Landing));
