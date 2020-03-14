import * as React from 'react';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';

interface OwnProps {
    changeRoute: (isVisible: boolean, route: string) => void;
    translate: (key: string) => string;
}

type Props = OwnProps;

// tslint:disable-next-line: no-default-export
export default class LandingUnderHood extends React.Component<Props> {
    public componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    public componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    public render() {
        const { changeRoute, translate } = this.props;

        return (
                <div className="pg-landing-screen__under-hood">
                    <div className="pg-landing-screen__under-hood__background__wrap">
                        <div className="pg-landing-screen__under-hood__background" />
                    </div>
                    <VisibilitySensor onChange={e => changeRoute(e, 'under-the-hood')} partialVisibility={true}>
                        <div
                            className="pg-landing-screen__under-hood__wrap"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-offset="100"
                        >
                            <h1>{translate('page.body.landing.underHood.title')}</h1>
                            <h2>{translate('page.body.landing.underHood.architecture.title')}</h2>
                            <ul>
                                <li>{translate('page.body.landing.underHood.architecture.list.item1')}</li>
                                <li>{translate('page.body.landing.underHood.architecture.list.item2')}</li>
                                <li>{translate('page.body.landing.underHood.architecture.list.item3')}</li>
                                <li>{translate('page.body.landing.underHood.architecture.list.item4')}</li>
                            </ul>
                            <h2>{translate('page.body.landing.underHood.protocols.title')}</h2>
                            <ul>
                                <li>{translate('page.body.landing.underHood.protocols.list.item1')}</li>
                                <li>{translate('page.body.landing.underHood.protocols.list.item2')}</li>
                                <li>{translate('page.body.landing.underHood.protocols.list.item3')}</li>
                                <li>{translate('page.body.landing.underHood.protocols.list.item4')}</li>
                            </ul>
                            <Link to="#" className="landing-button">
                                {translate('page.body.landing.underHood.button')}
                            </Link>
                        </div>
                    </VisibilitySensor>
                </div>
        );
    }

    private handleScroll = () => {
        const currentPage = document.documentElement;
        const currentScrollPosition = (window.pageYOffset || currentPage.scrollTop)  - (currentPage.clientTop || 0);
        const targetElement = document.getElementsByClassName('pg-landing-screen__under-hood')[0];
        const targetElementBackground = document.getElementsByClassName('pg-landing-screen__under-hood__background')[0];
        const targetElementBackgroundWrap = document.getElementsByClassName('pg-landing-screen__under-hood__background__wrap')[0];

        if (targetElement && targetElementBackground) {
            const targetElementOffset = (targetElement as HTMLElement).offsetTop;
            const targetElementHeight = (targetElement as HTMLElement).offsetHeight;
            const currentScrollOffset = currentScrollPosition;

            if (currentScrollOffset < targetElementOffset + targetElementHeight / 2) {
                targetElementBackgroundWrap.setAttribute(
                    'style', `transform: translateY(calc(${currentScrollOffset / 2}px - 850px)) rotate(${-currentScrollOffset / 200}deg)`,
                );
            }
        }
    }
}
