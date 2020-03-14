import { History } from 'history';
import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { RouteProps, withRouter } from 'react-router-dom';
import {
    LandingAdaptiveStack,
    LandingBenefits,
    LandingBuildEasy,
    LandingCloudStack,
    LandingFeatures,
    LandingHeader,
    LandingLaunch,
    LandingLooksComplex,
    LandingPrices,
    LandingUnderHood,
    LandingUseCases,
} from '../../components';

interface HistoryProps {
    history: History;
}

type Props = HistoryProps & RouteProps & InjectedIntlProps;

class Landing extends React.Component<Props> {
    public componentDidMount() {
        this.handleScroll();
    }

    public render() {
        return (
            <div className="pg-landing-screen" onWheel={this.handleScroll}>
                <LandingHeader
                    id="landingStickyHeader"
                    translate={this.translate}
                />
                <LandingLaunch changeRoute={this.changeRoute} translate={this.translate} />
                <LandingBenefits changeRoute={this.changeRoute} translate={this.translate} />
                <LandingUnderHood changeRoute={this.changeRoute} translate={this.translate} />
                <LandingFeatures changeRoute={this.changeRoute} translate={this.translate} />
                <LandingAdaptiveStack changeRoute={this.changeRoute} translate={this.translate} />
                <LandingUseCases changeRoute={this.changeRoute} translate={this.translate} />
                <LandingCloudStack changeRoute={this.changeRoute} translate={this.translate} />
                <LandingBuildEasy changeRoute={this.changeRoute} translate={this.translate} />
                <LandingLooksComplex changeRoute={this.changeRoute} translate={this.translate} />
                <LandingPrices changeRoute={this.changeRoute} translate={this.translate} />
            </div>
        );
    }

    private changeRoute = (isVisible, route) => {
        const { history } = this.props;

        if (isVisible) {
            history.replace(route ? `#${route}` : '');
        }
    }

    private handleScroll() {
        const header = document.getElementById('landingStickyHeader');
        const stickyPoint = 100;

        if (window.scrollY >= stickyPoint) {
            header && header.classList.add('pg-landing-screen__header--visible');
        } else {
            header && header.classList.remove('pg-landing-screen__header--visible');
        }

        return;
    }

    private translate = (key: string) => this.props.intl.formatMessage({id: key});
}

export const LandingScreen = withRouter(injectIntl(Landing));
