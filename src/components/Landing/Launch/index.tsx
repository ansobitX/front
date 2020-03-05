import * as React from 'react';
import { Link } from 'react-router-dom';
import { LandingHeader } from '../';

/* Icons */
const ArrowCircleIcon = require('../../../assets/images/landing/icons/ArrowCircle.svg');

interface OwnProps {
    translate: (key: string) => string;
}

type Props = OwnProps;

export class LandingLaunch extends React.Component<Props> {
    public render() {
        const { translate } = this.props;

        return (
            <div className="pg-landing-screen__launch">
                <div className="pg-landing-screen__launch__filter">
                    <div className="pg-landing-screen__launch__wrap">
                        <LandingHeader translate={translate} />
                        <div
                            className="pg-landing-screen__launch__wrap__content"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="100"
                        >
                            <h1>{translate('page.body.landing.content.title')}</h1>
                            <h2>{translate('page.body.landing.content.subtitle')}</h2>
                            <div className="pg-landing-screen__launch__wrap__content__buttons">
                                <Link to="/trading/" className="landing-button">
                                    {translate('page.body.landing.content.buttons.getStarted')}
                                </Link>
                                <a href="#use-cases" className="landing-button landing-button--secondary">
                                    {translate('page.body.landing.content.buttons.useCases')}
                                </a>
                            </div>
                            <div
                                className="pg-landing-screen__launch__wrap__content__cards"
                                data-aos="fade-up"
                                data-aos-offset="100"
                                data-aos-delay="300"
                                data-aos-duration="1000"
                            >
                                <div className="pg-landing-screen__launch__wrap__content__cards__item">
                                    <h3>{translate('page.body.landing.content.cards.cloud.title')}</h3>
                                    <span>{translate('page.body.landing.content.cards.cloud.text')}</span>
                                    <Link to="#">
                                        <span>{translate('page.body.landing.content.cards.cloud.link')}</span>
                                        <img src={ArrowCircleIcon} alt="Arrow"/>
                                    </Link>
                                </div>
                                <div className="pg-landing-screen__launch__wrap__content__cards__item">
                                    <h3>{translate('page.body.landing.content.cards.enterprise.title')}</h3>
                                    <span>{translate('page.body.landing.content.cards.enterprise.text')}</span>
                                    <Link to="#">
                                        <span>{translate('page.body.landing.content.cards.enterprise.link')}</span>
                                        <img src={ArrowCircleIcon} alt="Arrow"/>
                                    </Link>
                                </div>
                                <div className="pg-landing-screen__launch__wrap__content__cards__item">
                                    <h3>{translate('page.body.landing.content.cards.developers.title')}</h3>
                                    <span>{translate('page.body.landing.content.cards.developers.text')}</span>
                                    <Link to="#">
                                        <span>{translate('page.body.landing.content.cards.developers.link')}</span>
                                        <img src={ArrowCircleIcon} alt="Arrow"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
