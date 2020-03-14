import * as React from 'react';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';

interface OwnProps {
    changeRoute: (isVisible: boolean, route: string) => void;
    translate: (key: string) => string;
}

type Props = OwnProps;

// tslint:disable-next-line: no-default-export
export default class LandingLooksComplex extends React.Component<Props> {
    public render() {
        const { changeRoute, translate } = this.props;

        return (
                <div className="pg-landing-screen__looks-complex">
                    <div className="pg-landing-screen__looks-complex__background" />
                    <VisibilitySensor onChange={e => changeRoute(e, 'looks-complex')} partialVisibility={true}>
                        <div
                            className="pg-landing-screen__looks-complex__wrap"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-offset="100"
                        >
                            <h1>{translate('page.body.landing.looksComplex.title')}</h1>
                            <h2>{translate('page.body.landing.looksComplex.focus.title')}</h2>
                            <span>{translate('page.body.landing.looksComplex.focus.text')}</span>
                            <h2>{translate('page.body.landing.looksComplex.position.title')}</h2>
                            <span>{translate('page.body.landing.looksComplex.position.text')}</span>
                            <div className="pg-landing-screen__looks-complex__wrap__content__buttons">
                                <Link to="#pricing" className="landing-button">
                                    {translate('page.body.landing.looksComplex.buttons.getPricing')}
                                </Link>
                                <a href="#pricing" className="landing-button landing-button--secondary">
                                    {translate('page.body.landing.looksComplex.buttons.solutions')}
                                </a>
                            </div>
                        </div>
                    </VisibilitySensor>
                </div>
        );
    }
}
