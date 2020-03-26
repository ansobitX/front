import * as React from 'react';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';

/* Icons */
const LogoLightImage = require('../../../assets/images/landing/logoLight.svg');
const GithubIcon = require('../../../assets/images/landing/icons/Github.svg');
const LinkedInIcon = require('../../../assets/images/landing/icons/LinkedIn.svg');
const MediumIcon = require('../../../assets/images/landing/icons/Medium.svg');
const TelegramIcon = require('../../../assets/images/landing/icons/Telegram.svg');

interface OwnProps {
    changeRoute: (isVisible: boolean, route: string) => void;
    translate: (key: string) => string;
}

type Props = OwnProps;

export class LandingFooter extends React.Component<Props> {
    public render() {
        const { changeRoute, translate } = this.props;

        return (
            <div className="pg-landing-screen__footer">
                <VisibilitySensor onChange={e => changeRoute(e, 'footer')} partialVisibility={true}>
                    <div className="pg-landing-screen__footer__wrap">
                        <div className="pg-landing-screen__footer__wrap__content">
                            <div className="pg-landing-screen__footer__wrap__content__col">
                                <img src={LogoLightImage} alt="OpenDAX" />
                                <div className="social">
                                    <a href="/#"><img src={GithubIcon} alt="Github"/></a>
                                    <a href="/#"><img src={TelegramIcon} alt="Telegram"/></a>
                                    <a href="/#"><img src={LinkedInIcon} alt="LinkedIn"/></a>
                                    <a href="/#"><img src={MediumIcon} alt="Medium"/></a>
                                </div>
                                <a href="/#" className="landing-button">
                                    {translate('page.body.landing.footer.contactUs.button')}
                                </a>
                            </div>
                            <div className="pg-landing-screen__footer__wrap__content__col">
                                <span className="title">{translate('page.body.landing.footer.contact.title')}</span>
                                <a
                                    className="footer-link"
                                    href={`tel:${translate('page.body.landing.footer.contact.phone')}`}
                                >
                                    {translate('page.body.landing.footer.contact.phone')}
                                </a>
                                <a
                                    className="footer-link"
                                    href={`mailto:${translate('page.body.landing.footer.contact.email')}`}
                                >
                                    {translate('page.body.landing.footer.contact.email')}
                                </a>
                                <span className="title">{translate('page.body.landing.footer.address.title')}</span>
                                <span className="footer-link">{translate('page.body.landing.footer.address.company')}</span>
                                <span className="footer-link">{translate('page.body.landing.footer.address.street')}</span>
                                <span className="footer-link">{translate('page.body.landing.footer.address.country')}</span>
                            </div>
                            <div className="pg-landing-screen__footer__wrap__content__col">
                                <span className="title">{translate('page.body.landing.footer.explore.title')}</span>
                                <a className="footer-link" href="/#">{translate('page.body.landing.footer.explore.products')}</a>
                                <a className="footer-link" href="#benefits">{translate('page.body.landing.footer.explore.benefits')}</a>
                                <a className="footer-link" href="#technology">{translate('page.body.landing.footer.explore.underHood')}</a>
                                <a className="footer-link" href="#features">{translate('page.body.landing.footer.explore.features')}</a>
                                <a className="footer-link" href="#use-cases">{translate('page.body.landing.footer.explore.useCases')}</a>
                            </div>
                            <div className="pg-landing-screen__footer__wrap__content__col">
                                <span className="title">{translate('page.body.landing.footer.explore2.title')}</span>
                                <a className="footer-link" href="#benefits">{translate('page.body.landing.footer.explore2.benefits')}</a>
                                <a className="footer-link" href="#cloud-stack">{translate('page.body.landing.footer.explore2.stack')}</a>
                                <a className="footer-link" href="#pricing">{translate('page.body.landing.footer.explore2.pricing')}</a>
                                <a className="footer-link" href="#company">{translate('page.body.landing.footer.explore2.company')}</a>
                                <a className="footer-link" href="#tools">{translate('page.body.landing.footer.explore2.tools')}</a>
                            </div>
                            <div className="pg-landing-screen__footer__wrap__content__col">
                                <span className="title">{translate('page.body.landing.footer.legal.title')}</span>
                                <Link className="footer-link" to="#">{translate('page.body.landing.footer.legal.terms')}</Link>
                                <Link className="footer-link" to="#">{translate('page.body.landing.footer.legal.privacy')}</Link>
                                <Link className="footer-link" to="#">{translate('page.body.landing.footer.legal.cookie')}</Link>
                                <Link className="footer-link" to="#">{translate('page.body.landing.footer.legal.gdpr')}</Link>
                            </div>
                        </div>
                        <span className="copyright">{translate('page.body.landing.footer.allRightsReserved')}</span>
                    </div>
                </VisibilitySensor>
            </div>
        );
    }
}
