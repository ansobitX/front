import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { Link, RouteProps, withRouter } from 'react-router-dom';

//const LogoImage = require('../../assets/images/landing/logo.svg');
const LogoLightImage = require('../../assets/images/landing/logoLight.svg');

/* Icons */
const ArrowCircleIcon = require('../../assets/images/landing/icons/ArrowCircle.svg');

type Props = RouteProps & InjectedIntlProps;

class Landing extends React.Component<Props> {
    public renderHeader() {
        return (
            <div className="pg-landing-screen__header">
                <div className="pg-landing-screen__header__left">
                    <img src={LogoLightImage} alt="OpenDax Logo"/>
                </div>
                <div className="pg-landing-screen__header__middle">
                    <a href="#products" className="header-link">
                        {this.translate('page.body.landing.header.link.products')}
                    </a>
                    <a href="#benefits" className="header-link">
                        {this.translate('page.body.landing.header.link.benefits')}
                    </a>
                    <a href="#technology" className="header-link">
                        {this.translate('page.body.landing.header.link.technology')}
                    </a>
                    <a href="#features" className="header-link">
                        {this.translate('page.body.landing.header.link.features')}
                    </a>
                    <a href="#use-cases" className="header-link">
                        {this.translate('page.body.landing.header.link.useCases')}
                    </a>
                    <a href="#stack" className="header-link">
                        {this.translate('page.body.landing.header.link.stack')}
                    </a>
                    <a href="#tools" className="header-link">
                        {this.translate('page.body.landing.header.link.tools')}
                    </a>
                    <a href="#company" className="header-link">
                        {this.translate('page.body.landing.header.link.company')}
                    </a>
                </div>
                <div className="pg-landing-screen__header__right">
                    <a href="#pricing" className="landing-button">
                        {this.translate('page.body.landing.header.link.pricing')}
                    </a>
                </div>
            </div>
        );
    }

    public renderLaunchBlock() {
        return (
            <div className="pg-landing-screen__launch">
                <div className="pg-landing-screen__launch__filter">
                    <div className="pg-landing-screen__launch__wrap">
                        {this.renderHeader()}
                        <div className="pg-landing-screen__launch__wrap__content">
                            <h1>{this.translate('page.body.landing.content.title')}</h1>
                            <h2>{this.translate('page.body.landing.content.subtitle')}</h2>
                            <div className="pg-landing-screen__launch__wrap__content__buttons">
                                <Link to="/trading/" className="landing-button">
                                    {this.translate('page.body.landing.content.buttons.getStarted')}
                                </Link>
                                <a href="#use-cases" className="landing-button landing-button--secondary">
                                    {this.translate('page.body.landing.content.buttons.useCases')}
                                </a>
                            </div>
                            <div className="pg-landing-screen__launch__wrap__content__cards">
                                <div className="pg-landing-screen__launch__wrap__content__cards__item">
                                    <h3>{this.translate('page.body.landing.content.cards.cloud.title')}</h3>
                                    <span>{this.translate('page.body.landing.content.cards.cloud.text')}</span>
                                    <Link to="#">
                                        <span>{this.translate('page.body.landing.content.cards.cloud.link')}</span>
                                        <img src={ArrowCircleIcon} alt="Arrow"/>
                                    </Link>
                                </div>
                                <div className="pg-landing-screen__launch__wrap__content__cards__item">
                                    <h3>{this.translate('page.body.landing.content.cards.enterprise.title')}</h3>
                                    <span>{this.translate('page.body.landing.content.cards.enterprise.text')}</span>
                                    <Link to="#">
                                        <span>{this.translate('page.body.landing.content.cards.enterprise.link')}</span>
                                        <img src={ArrowCircleIcon} alt="Arrow"/>
                                    </Link>
                                </div>
                                <div className="pg-landing-screen__launch__wrap__content__cards__item">
                                    <h3>{this.translate('page.body.landing.content.cards.developers.title')}</h3>
                                    <span>{this.translate('page.body.landing.content.cards.developers.text')}</span>
                                    <Link to="#">
                                        <span>{this.translate('page.body.landing.content.cards.developers.link')}</span>
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

    public render() {
        return (
            <div className="pg-landing-screen">
                {this.renderLaunchBlock()}
            </div>
        );
    }

    private translate = (key: string) => this.props.intl.formatMessage({id: key});
}

export const LandingScreen = withRouter(injectIntl(Landing));
