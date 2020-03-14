import * as React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

interface OwnProps {
    changeRoute: (isVisible: boolean, route: string) => void;
    translate: (key: string) => string;
}

type Props = OwnProps;

// tslint:disable-next-line: no-default-export
export default class LandingAdaptiveStack extends React.Component<Props> {
    public componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    public componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    public render() {
        const { changeRoute, translate } = this.props;

        return (
            <VisibilitySensor onChange={e => changeRoute(e, 'adaptive-stack')} partialVisibility={true}>
                <div className="pg-landing-screen__adaptive-stack">
                    <div className="pg-landing-screen__adaptive-stack__background" />
                    <div className="pg-landing-screen__adaptive-stack__wrap">
                        <h1
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-offset="100"
                        >
                            {translate('page.body.landing.adaptiveStack.title')}
                        </h1>
                        <div
                            className="pg-landing-screen__adaptive-stack__content"
                            data-aos="fade"
                            data-aos-duration="1000"
                        >
                            <div className="pg-landing-screen__adaptive-stack__content__item">
                                <span className="title">{translate('page.body.landing.adaptiveStack.devOps.title')}</span>
                                <span className="subtitle">{translate('page.body.landing.adaptiveStack.devOps.subtitle')}</span>
                                <span className="text">{translate('page.body.landing.adaptiveStack.devOps.text')}</span>
                            </div>
                            <div className="pg-landing-screen__adaptive-stack__content__item">
                                <span className="title">{translate('page.body.landing.adaptiveStack.blockchain.title')}</span>
                                <span className="subtitle">{translate('page.body.landing.adaptiveStack.blockchain.subtitle')}</span>
                                <span className="text">{translate('page.body.landing.adaptiveStack.blockchain.text')}</span>
                            </div>
                            <div className="pg-landing-screen__adaptive-stack__content__item">
                                <span className="title">{translate('page.body.landing.adaptiveStack.community.title')}</span>
                                <span className="subtitle">{translate('page.body.landing.adaptiveStack.community.subtitle')}</span>
                                <span className="text">{translate('page.body.landing.adaptiveStack.community.text')}</span>
                            </div>
                        </div>
                        <div className="pg-landing-screen__adaptive-stack__buttons">
                            <a href="#pricing" className="landing-button">
                                {translate('page.body.landing.adaptiveStack.buttons.pricing')}
                            </a>
                            <a href="#use-cases" className="landing-button landing-button--secondary">
                                {translate('page.body.landing.adaptiveStack.buttons.solution')}
                            </a>
                        </div>
                    </div>
                </div>
            </VisibilitySensor>
        );
    }


    private handleScroll = () => {
        const currentPage = document.documentElement;
        const currentScrollPosition = (window.pageYOffset || currentPage.scrollTop)  - (currentPage.clientTop || 0);
        const targetElement = document.getElementsByClassName('pg-landing-screen__adaptive-stack')[0];
        const targetElementBackground = document.getElementsByClassName('pg-landing-screen__adaptive-stack__background')[0];

        if (targetElement && targetElementBackground) {
            const currentScrollOffset = currentScrollPosition;

            targetElementBackground.setAttribute('style', `transform: translateY(calc(${currentScrollOffset / 5}px - 1050px))`);
        }
    }
}
