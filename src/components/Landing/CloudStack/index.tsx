import classnames from 'classnames';
import * as React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

/* Icons */
const WIPIcon = require('../../../assets/images/landing/cloudStack/WIPIcon.svg');

interface OwnProps {
    changeRoute: (isVisible: boolean, route: string) => void;
    translate: (key: string) => string;
}

interface State {
    isVisibleStaticMenu: boolean;
}

type Props = OwnProps;

// tslint:disable-next-line: no-default-export
export default class LandingCloudStack extends React.Component<Props, State> {
    public readonly state = {
        isVisibleStaticMenu: false,
    };

    public renderStaticMenu() {
        const { translate } = this.props;
        const { isVisibleStaticMenu } = this.state;

        const menuClass = classnames('static-menu', {
            'static-menu--fixed': isVisibleStaticMenu,
        });

        const activeOverviewLink = classnames({'active-link': window.location.hash.includes('overview')});
        const activeCloudPlatformLink = classnames({'active-link': window.location.hash.includes('cloud-platform')});
        const activeInfrastructureLink = classnames({'active-link': window.location.hash.includes('infrastructure')});
        const activeDevPlatformLink = classnames({'active-link': window.location.hash.includes('developer-platform')});
        const activeOpenSourceLink = classnames({'active-link': window.location.hash.includes('open-source')});
        const activeFrontendLink = classnames({'active-link': window.location.hash.includes('frontend')});

        return (
            <div className={menuClass}>
                <ul>
                    <li><a className={activeOverviewLink} href="#overview">{translate('page.body.landing.cloudStack.menu.link.overview')}</a></li>
                    <li><a className={activeCloudPlatformLink} href="#cloud-platform">{translate('page.body.landing.cloudStack.menu.link.cloudPlatform')}</a></li>
                    <li><a className={activeInfrastructureLink} href="#infrastructure">{translate('page.body.landing.cloudStack.menu.link.infrastructure')}</a></li>
                    <li><a className={activeDevPlatformLink} href="#developer-platform">{translate('page.body.landing.cloudStack.menu.link.developerPlatform')}</a></li>
                    <li><a className={activeOpenSourceLink} href="#open-source">{translate('page.body.landing.cloudStack.menu.link.openSource')}</a></li>
                    <li><a className={activeFrontendLink} href="#frontend">{translate('page.body.landing.cloudStack.menu.link.frontend')}</a></li>
                </ul>
            </div>
        );
    }

    public renderScrollableBlock() {
        const { changeRoute, translate } = this.props;

        return (
            <div className="scrollable-block">
                <VisibilitySensor onChange={e => changeRoute(e, 'overview')}>
                    <div className="scrollable-block__item" id="overview">
                        <h2>{translate('page.body.landing.cloudStack.scrollableBlock.overview.title')}</h2>
                        <p>{translate('page.body.landing.cloudStack.scrollableBlock.overview.text1')}</p>
                        <p>{translate('page.body.landing.cloudStack.scrollableBlock.overview.text2')}</p>
                    </div>
                </VisibilitySensor>
                <VisibilitySensor onChange={this.toggleVisibleStaticMenu} partialVisibility={true}>
                    <div className="scrollable-block__wrap">
                        <VisibilitySensor onChange={e => changeRoute(e, 'cloud-platform')}>
                            <div className="scrollable-block__item" id="cloud-platform">
                                <h2>{translate('page.body.landing.cloudStack.scrollableBlock.cloudPlatform.title')}</h2>
                                <p>{translate('page.body.landing.cloudStack.scrollableBlock.cloudPlatform.text1')}</p>
                                <p>{translate('page.body.landing.cloudStack.scrollableBlock.cloudPlatform.text2')}</p>
                            </div>
                        </VisibilitySensor>
                        <VisibilitySensor onChange={e => changeRoute(e, 'infrastructure')}>
                            <div className="scrollable-block__item" id="infrastructure">
                                <h2>{translate('page.body.landing.cloudStack.scrollableBlock.infrastructure.title')}</h2>
                                <p>{translate('page.body.landing.cloudStack.scrollableBlock.infrastructure.text1')}</p>
                                <p>{translate('page.body.landing.cloudStack.scrollableBlock.infrastructure.text2')}</p>
                            </div>
                        </VisibilitySensor>
                        <VisibilitySensor onChange={e => changeRoute(e, 'developer-platform')}>
                            <div className="scrollable-block__item" id="developer-platform">
                                <h2>{translate('page.body.landing.cloudStack.scrollableBlock.developerPlatform.title')}</h2>
                                <p>{translate('page.body.landing.cloudStack.scrollableBlock.developerPlatform.text1')}</p>
                                <p>{translate('page.body.landing.cloudStack.scrollableBlock.developerPlatform.text2')}</p>
                            </div>
                        </VisibilitySensor>
                        <VisibilitySensor onChange={e => changeRoute(e, 'open-source')}>
                            <div className="scrollable-block__item" id="open-source">
                                <h2>{translate('page.body.landing.cloudStack.scrollableBlock.openSource.title')}</h2>
                                <p>{translate('page.body.landing.cloudStack.scrollableBlock.openSource.text1')}</p>
                                <p>{translate('page.body.landing.cloudStack.scrollableBlock.openSource.text2')}</p>
                            </div>
                        </VisibilitySensor>
                    </div>
                </VisibilitySensor>
                <VisibilitySensor onChange={e => changeRoute(e, 'frontend')}>
                    <div className="scrollable-block__item" id="frontend">
                        <h2>{translate('page.body.landing.cloudStack.scrollableBlock.frontend.title')}</h2>
                        <p>{translate('page.body.landing.cloudStack.scrollableBlock.frontend.text1')}</p>
                        <p>{translate('page.body.landing.cloudStack.scrollableBlock.frontend.text2')}</p>
                    </div>
                </VisibilitySensor>
            </div>
        );
    }

    public render() {
        const { translate } = this.props;
        const { isVisibleStaticMenu } = this.state;

        const imagesBlockClass = classnames('static-images', {
            'static-images--fixed': isVisibleStaticMenu,
        });

        return (
            <div className="pg-landing-screen__cloud-stack">
                <div className="pg-landing-screen__cloud-stack__wrap">
                    <h1
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-offset="100"
                    >
                        {translate('page.body.landing.cloudStack.title')}
                    </h1>
                    <div
                        className="pg-landing-screen__cloud-stack__wrap__content"
                        data-aos="fade"
                        data-aos-duration="1000"
                    >
                        {this.renderScrollableBlock()}
                        <div className={imagesBlockClass}>
                            <img src={WIPIcon} alt="" />
                        </div>
                    </div>
                    {this.renderStaticMenu()}
                </div>
            </div>
        );
    }

    private toggleVisibleStaticMenu = (isVisible: boolean) => {
        this.setState({
            isVisibleStaticMenu: isVisible,
        });
    }
}
