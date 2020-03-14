import * as React from 'react';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';

interface OwnProps {
    changeRoute: (isVisible: boolean, route: string) => void;
    translate: (key: string) => string;
}

type Props = OwnProps;

export class LandingBuildEasy extends React.Component<Props> {
    public componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    public componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    public render() {
        const { changeRoute, translate } = this.props;

        return (
                <div className="pg-landing-screen__build-easy">
                    <div className="pg-landing-screen__build-easy__background" />
                    <VisibilitySensor onChange={e => changeRoute(e, 'build-easily')} partialVisibility={true}>
                        <div className="pg-landing-screen__build-easy__wrap">
                            <h1>{translate('page.body.landing.buildEasy.title')}</h1>
                            <span>{translate('page.body.landing.buildEasy.text1')}</span>
                            <span>{translate('page.body.landing.buildEasy.text2')}</span>
                            <Link to="#" className="landing-button">
                                {translate('page.body.landing.buildEasy.button')}
                            </Link>
                            <span>{translate('page.body.landing.buildEasy.note')}</span>
                        </div>
                    </VisibilitySensor>
                </div>
        );
    }

    private handleScroll = () => {
        const currentPage = document.documentElement;
        const currentScrollPosition = (window.pageYOffset || currentPage.scrollTop)  - (currentPage.clientTop || 0);
        const targetElement = document.getElementsByClassName('pg-landing-screen__build-easy')[0];
        const targetElementBackground = document.getElementsByClassName('pg-landing-screen__build-easy__background')[0];

        if (targetElement && targetElementBackground) {
            const targetElementOffset = (targetElement as HTMLElement).offsetTop;
            const targetElementHeight = (targetElement as HTMLElement).offsetHeight;
            const currentScrollOffset = currentScrollPosition;

            if (currentScrollOffset < targetElementOffset + targetElementHeight / 2) {
                targetElementBackground.setAttribute('style', `transform: translateY(calc(${currentScrollOffset / 10}px - 1150px))`);
            }
        }
    }
}
