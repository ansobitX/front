import classnames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';

/* Icons */
const LogoImage = require('../../../assets/images/landing/logo.svg');
const LogoLightImage = require('../../../assets/images/landing/logoLight.svg');

interface OwnProps {
    id?: string;
    translate: (key: string) => string;
}

type Props = OwnProps;

interface State {
    isMobileMenuOpen: boolean;
}

export class LandingHeader extends React.Component<Props, State> {
    public state = {
        isMobileMenuOpen: false,
    };

    public renderHeaderContent() {
        const { translate } = this.props;

        return (
            <React.Fragment>
                <div className="pg-landing-screen__header__middle">
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
                    <a href="#cloud-stack" className="header-link">
                        {translate('page.body.landing.header.link.stack')}
                    </a>
                    <a href="#pricing" className="header-link">
                        {translate('page.body.landing.header.link.pricing')}
                    </a>
                    <a href="#company" className="header-link">
                        {translate('page.body.landing.header.link.company')}
                    </a>
                    <a href="#tools" className="header-link">
                        {translate('page.body.landing.header.link.tools')}
                    </a>
                </div>
                <div className="pg-landing-screen__header__right">
                    <Link to="/signup" className="landing-button">
                        {translate('page.body.landing.header.link.register')}
                    </Link>
                </div>
            </React.Fragment>
        );
    }

    public render() {
        const { id } = this.props;
        const { isMobileMenuOpen } = this.state;

        const headerClass = classnames('pg-landing-screen__header', {
            'pg-landing-screen__header--mobile-open': isMobileMenuOpen,
        });

        return (
            <div className="pg-landing-screen__header__wrap" id={id}>
                <div className={headerClass}>
                    <div className="pg-landing-screen__header__left">
                        <img src={LogoLightImage} alt="OpenDax Logo"/>
                        <img src={LogoImage} alt="OpenDax Logo"/>
                    </div>
                    <div className="pg-landing-screen__header__mobile">
                        <div className="pg-landing-screen__header__mobile__left">
                            <img src={LogoLightImage} alt="OpenDax Logo"/>
                            <img src={LogoImage} alt="OpenDax Logo"/>
                        </div>
                        <div className="hamburger-menu" onClick={this.handleToggleMobileMenu}>
                            <span/>
                            <span/>
                            <span/>
                        </div>
                    </div>
                    <div className="pg-landing-screen__header__mobile-content">
                        {this.renderHeaderContent()}
                    </div>
                    {this.renderHeaderContent()}
                </div>
            </div>
        );
    }

    private handleToggleMobileMenu = () => {
        this.setState(prevState => ({
            isMobileMenuOpen: !prevState.isMobileMenuOpen,
        }));
    }
}
