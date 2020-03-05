import * as React from 'react';

/* Icons */
//const LogoImage = require('../../../assets/images/landing/logo.svg');
const LogoLightImage = require('../../../assets/images/landing/logoLight.svg');

interface OwnProps {
    translate: (key: string) => string;
}

type Props = OwnProps;

export class LandingHeader extends React.Component<Props> {
    public render() {
        const { translate } = this.props;

        return (
            <div className="pg-landing-screen__header">
                <div className="pg-landing-screen__header__left">
                    <img src={LogoLightImage} alt="OpenDax Logo"/>
                </div>
                <div className="pg-landing-screen__header__middle">
                    <a href="#products" className="header-link">
                        {translate('page.body.landing.header.link.products')}
                    </a>
                    <a href="#benefits" className="header-link">
                        {translate('page.body.landing.header.link.benefits')}
                    </a>
                    <a href="#technology" className="header-link">
                        {translate('page.body.landing.header.link.technology')}
                    </a>
                    <a href="#features" className="header-link">
                        {translate('page.body.landing.header.link.features')}
                    </a>
                    <a href="#use-cases" className="header-link">
                        {translate('page.body.landing.header.link.useCases')}
                    </a>
                    <a href="#stack" className="header-link">
                        {translate('page.body.landing.header.link.stack')}
                    </a>
                    <a href="#tools" className="header-link">
                        {translate('page.body.landing.header.link.tools')}
                    </a>
                    <a href="#company" className="header-link">
                        {translate('page.body.landing.header.link.company')}
                    </a>
                </div>
                <div className="pg-landing-screen__header__right">
                    <a href="#pricing" className="landing-button">
                        {translate('page.body.landing.header.link.pricing')}
                    </a>
                </div>
            </div>
        );
    }
}
