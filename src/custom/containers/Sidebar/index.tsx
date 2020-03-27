import classnames from 'classnames';
import { History } from 'history';
import * as React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';
import { connect, MapDispatchToPropsFunction } from 'react-redux';
import { Link, RouteProps, withRouter } from 'react-router-dom';
import { WalletItemProps, Decimal } from '../../../components';
import { pgRoutes, VALUATION_PRIMARY_CURRENCY } from '../../../constants';
import {
    changeLanguage,
    currenciesFetch,
    Currency,
    logoutFetch,
    Market,
    RootState,
    selectCurrencies,
    selectCurrentColorTheme,
    selectCurrentLanguage,
    selectCurrentMarket,
    selectSidebarState,
    selectUserLoggedIn,
    selectWallets,
    toggleSidebar,
    walletsFetch,
} from '../../../modules';
import { languages } from '../../../api/config';

/* Icons */
const LogoImage = require('../../assets/images/landing/logo.svg');
const LogoLightImage = require('../../assets/images/landing/logoLight.svg');

interface OwnProps {
    onLinkChange?: () => void;
    history: History;
}

interface ReduxProps {
    colorTheme: string;
    currencies: Currency[];
    currentMarket: Market | undefined;
    isActive: boolean;
    isLoggedIn: boolean;
    lang: string;
    wallets: WalletItemProps[];
}

interface DispatchProps {
    changeLanguage: typeof changeLanguage;
    currenciesFetch: typeof currenciesFetch;
    fetchWallets: typeof walletsFetch;
    logoutFetch: typeof logoutFetch;
    toggleSidebar: typeof toggleSidebar;
}

interface State {
    valuationCurrencyBalance: string;
    isOpenLanguage: boolean;
}

type Props = OwnProps & ReduxProps & RouteProps & DispatchProps & InjectedIntlProps;

class SidebarContainer extends React.Component<Props, State> {
    public state = {
        valuationCurrencyBalance: '',
        isOpenLanguage: false,
    };

    public componentDidMount() {
        const { currencies, wallets } = this.props;

        if (wallets.length === 0) {
            this.props.fetchWallets();
        }

        if (currencies.length === 0) {
            this.props.currenciesFetch();
        }
    }

    public componentWillReceiveProps(nextProps: Props) {
        const { currencies, wallets } = this.props;

        if (nextProps.wallets.length && JSON.stringify(nextProps.wallets) !== JSON.stringify(wallets)) {
            this.getValuationWalletBalance(nextProps.wallets, currencies);
        }

        if (nextProps.currencies.length && JSON.stringify(nextProps.currencies) !== JSON.stringify(currencies)) {
            this.getValuationWalletBalance(wallets, nextProps.currencies);
        }
    }

    public renderHeader(isLightColorTheme: boolean) {
        const { isActive } = this.props;
        const currentLogo = isLightColorTheme ? LogoLightImage : LogoImage;

        return (
            <div className="pg-sidebar-wrapper__header">
                <Link to="/">
                    <img src={currentLogo} alt="Logo"/>
                </Link>
                <div className="hamburger-menu" onClick={e => this.props.toggleSidebar(!isActive)}>
                    <span/>
                    <span/>
                    <span/>
                </div>
            </div>
        );
    }

    public renderBalance() {
        const { valuationCurrencyBalance } = this.state;
        const integerBalance = valuationCurrencyBalance.split('.')[0];
        const floatBalance = valuationCurrencyBalance.split('.')[1];

        return (
            <div className="pg-sidebar-wrapper__balance">
                <span className="pg-sidebar-wrapper__balance__title">{this.translate('page.sidebar.balance.title')}</span>
                <div className="pg-sidebar-wrapper__balance__value">
                    {VALUATION_PRIMARY_CURRENCY.toLowerCase().includes('eur') ? <span>€&nbsp;</span> : null}
                    {VALUATION_PRIMARY_CURRENCY.toLowerCase().includes('usd') ? <span>$&nbsp;</span> : null}
                    <span>{integerBalance}</span>
                    <span>{floatBalance ? `.${floatBalance}` : ''}</span>
                </div>
            </div>
        );
    }

    public renderDeployButton() {
        return (
            <div className="pg-sidebar-wrapper__deploy">
                <Link to="/deploy" className="pg-sidebar-wrapper__deploy__button">
                    {this.translate('page.sidebar.deploy.button')}
                </Link>
            </div>
        );
    }

    public render() {
        const { isLoggedIn, colorTheme, isActive, lang } = this.props;
        const { isOpenLanguage } = this.state;

        const address = this.props.history.location ? this.props.history.location.pathname : '';
        const isLight = colorTheme === 'light';
        const lightBox = isLight ? 'light-box' : '';
        const languageName = lang.toUpperCase();

        const languageClassName = classnames('dropdown-menu-language-field', {
            'dropdown-menu-language-field-active': isOpenLanguage,
        });

        const hiddenSidebarRouteList = [
            '/success-deploy',
            '/signin',
            '/signup',
            '/forgot_password',
            '/email-verification',
            '/accounts/password_reset',
        ];

        if (address === '/' || hiddenSidebarRouteList.includes(address)) {
            return null;
        }

        const sidebarClass = classnames('pg-sidebar-wrapper', {
            lightBox,
            'pg-sidebar-wrapper--active': isActive,
            'pg-sidebar-wrapper--hidden': !isActive,
        });

        return (
            <div className={sidebarClass}>
                {this.renderHeader(isLight)}
                {isLoggedIn ? this.renderBalance() : null}
                <div className="pg-sidebar-wrapper-nav">
                    {pgRoutes(isLoggedIn, isLight).map(this.renderNavItems(address))}
                </div>
                <div className="pg-sidebar-wrapper-lng">
                    <div className="btn-group pg-navbar__header-settings__account-dropdown dropdown-menu-language-container">
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id={languageClassName}>
                                <img
                                    src={this.tryRequire(lang) && require(`../../../assets/images/sidebar/${lang}.svg`)}
                                    alt={`${lang}-flag-icon`}
                                />
                                <span className="dropdown-menu-language-selected">{languageName}</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {this.getLanguageDropdownItems()}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                {isLoggedIn ? this.renderDeployButton() : null}
                {this.renderLogout()}
            </div>
        );
    }

    public renderNavItems = (address: string) => (values: string[], index: number) => {
        const { currentMarket } = this.props;

        const [name, url, img] = values;
        const path = url.includes('/trading') && currentMarket ? `/trading/${currentMarket.id}` : url;
        const isActive = (url === '/trading/' && address.includes('/trading')) || address === url;
        return (
            <Link to={path} key={index} onClick={e => this.handleChangeRoute(path)} className={`${isActive && 'route-selected'}`}>
                <div className="pg-sidebar-wrapper-nav-item">
                    <div className="pg-sidebar-wrapper-nav-item-img-wrapper">
                        <img
                            className="pg-sidebar-wrapper-nav-item-img"
                            src={require(`../../../assets/images/sidebar/${img}.svg`)}
                            alt="icon"
                        />
                    </div>
                    <p className="pg-sidebar-wrapper-nav-item-text">
                        <FormattedMessage id={name} />
                    </p>
                </div>
            </Link>
        );
    };

    public renderLogout = () => {
        const { isLoggedIn, colorTheme } = this.props;
        const isLight = colorTheme === 'light';
        if (!isLoggedIn) {
            return null;
        }

        return (
            <div className="pg-sidebar-wrapper-logout">
                <div className="pg-sidebar-wrapper-logout-link" onClick={this.props.logoutFetch}>
                    <img
                        className="pg-sidebar-wrapper-logout-link-img"
                        src={require(`../../../assets/images/sidebar/logout${isLight ? 'Light' : '' }.svg`)}
                        alt="icon"
                    />
                    <p className="pg-sidebar-wrapper-logout-link-text">
                        <FormattedMessage id={'page.body.profile.content.action.logout'} />
                    </p>
                </div>
            </div>
        );
    };

    public getLanguageDropdownItems = () => {
        return languages.map((l: string, index) =>
            <Dropdown.Item key={index} onClick={e => this.handleChangeLanguage(l)}>
                <div className="dropdown-row">
                    <img
                        src={this.tryRequire(l) && require(`../../../assets/images/sidebar/${l}.svg`)}
                        alt={`${l}-flag-icon`}
                    />
                    <span>{l.toUpperCase()}</span>
                </div>
            </Dropdown.Item>,
        );
    };

    private getValuationWalletBalance = (wallets: WalletItemProps[], currencies: Currency[]) => {
        let currentBalance: string | number = 0;

        if (Array.isArray(wallets) && Array.isArray(currencies)) {
            const valuationWallet = wallets.find(wallet => wallet.currency.toLowerCase() === VALUATION_PRIMARY_CURRENCY.toLowerCase());
            const valuationCurrency = currencies.find(currency => currency.id === VALUATION_PRIMARY_CURRENCY.toLowerCase());

            if (valuationWallet && valuationWallet.balance) {
                currentBalance = valuationWallet.balance;

                if (valuationCurrency) {
                    currentBalance = Decimal.format(currentBalance, valuationCurrency.precision, ',');
                }
            }
        }

        this.setState({ valuationCurrencyBalance: String(currentBalance) });
    };

    private tryRequire = (name: string) => {
        try {
            require(`../../../assets/images/sidebar/${name}.svg`);
            return true;
        } catch (err) {
            return false;
        }
    };

    private handleChangeRoute = (path: string) => {
        window.scrollTo(0,0);
    }

    private handleChangeLanguage = (language: string) => {
        this.props.changeLanguage(language);
    }

    private translate = (e: string) => this.props.intl.formatMessage({ id: e });
}

const mapStateToProps = (state: RootState): ReduxProps => ({
    colorTheme: selectCurrentColorTheme(state),
    currencies: selectCurrencies(state),
    currentMarket: selectCurrentMarket(state),
    isActive: selectSidebarState(state),
    isLoggedIn: selectUserLoggedIn(state),
    lang: selectCurrentLanguage(state),
    wallets: selectWallets(state),
});

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> =
    dispatch => ({
        changeLanguage: payload => dispatch(changeLanguage(payload)),
        currenciesFetch: () => dispatch(currenciesFetch()),
        fetchWallets: () => dispatch(walletsFetch()),
        logoutFetch: () => dispatch(logoutFetch()),
        toggleSidebar: payload => dispatch(toggleSidebar(payload)),
    });

// tslint:disable no-any
const Sidebar = withRouter(injectIntl(connect(mapStateToProps, mapDispatchToProps)(SidebarContainer) as any) as any);

export {
    Sidebar,
};
