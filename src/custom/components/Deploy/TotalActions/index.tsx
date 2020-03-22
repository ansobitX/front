import classnames from 'classnames';
import * as React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { WalletItemProps, Decimal } from '../../../../components';
import { VALUATION_PRIMARY_CURRENCY } from '../../../../constants';
import { Currency } from '../../../../modules';
import { changeElementPosition } from '../../../helpers/changeElementPosition';

/* Icons */
const ArrowCircleIcon = require('../../../assets/images/landing/icons/ArrowCircle.svg');
const InfoIcon = require('../../../assets/images/InfoIcon.svg');

interface OwnProps {
    currencies: Currency[];
    exchangeName: string;
    domainName: string;
    termsAccepted: boolean;
    handleAgreeTerms: (key: string, value: boolean) => void;
    handleClickDeploy: () => void;
    selectedPackage: string;
    translate: (key: string) => string;
    wallets: WalletItemProps[];
}

type Props = OwnProps;

interface State {
    isMouseTooltipVisible: boolean;
}

export class DeployTotalActions extends React.Component<Props, State> {
    public state = {
        isMouseTooltipVisible: false,
    };

    public render() {
        const {
            currencies,
            termsAccepted,
            translate,
            wallets,
        } = this.props;
        const { isMouseTooltipVisible } = this.state;

        const currentCurrency = currencies.length && currencies.find(currency => currency.id === VALUATION_PRIMARY_CURRENCY.toLowerCase());
        const currentWallet = wallets.length && wallets.find(wallet => wallet.currency === VALUATION_PRIMARY_CURRENCY.toLowerCase());
        const currentBalance = currentWallet && currentCurrency ? currentWallet.balance : '';

        const selectedPackageSetupFee = this.getSelectedPackagePrice('setupFee');
        const selectedPackageSubscriptionFee = this.getSelectedPackagePrice('subscriptionFee');

        const priceToPay = this.handleCalculatePriceToPay(selectedPackageSetupFee, selectedPackageSubscriptionFee);
        const remainingValue = this.handleCalculateRemaining(priceToPay, currentBalance);

        const termsLabel = (
            <div className="terms-label">
                <span>{translate('page.body.deploy.totalActions.terms.text')}&nbsp;</span>
                <a href="/#" target="_blank" rel="noopener noreferrer">{translate('page.body.deploy.totalActions.terms.link')}</a>
            </div>
        );

        const tooltipClass = classnames('pg-deploy-total-actions__tooltip tooltip-hover', {
            'tooltip-hover--visible': isMouseTooltipVisible,
        });

        return (
            <div className="pg-deploy-total-actions">
                <h2>{translate('page.body.deploy.totalActions.title')}</h2>
                <div className="pg-deploy-total-actions__value">
                    <span>{translate('page.body.deploy.totalActions.balance.label')}</span>
                    <span>{translate('page.body.deploy.totalActions.balance.value')}</span>
                </div>
                <div className="pg-deploy-total-actions__value">
                    <span>
                        {currentCurrency ? currentCurrency.symbol : null}
                        {currentCurrency ? Decimal.format(currentBalance, currentCurrency.precision, ',') : '-'}
                    </span>
                    <span className={remainingValue < 0 ? 'red' : 'green'}>
                        {remainingValue < 0 ? '-' : null}
                        {currentCurrency ? currentCurrency.symbol : null}
                        {currentCurrency ? Decimal.format(Math.abs(remainingValue), currentCurrency.precision, ',') : '-'}
                    </span>
                </div>
                <Link to="/accounts" className="pg-deploy-total-actions__deposit">
                    <span>{translate('page.body.deploy.totalActions.depositLink')}</span>
                    <img src={ArrowCircleIcon} alt="Arrow"/>
                </Link>
                <div className="pg-deploy-total-actions__price">
                    <span>{translate('page.body.deploy.totalActions.toPay')}</span>
                    <span>
                        -{currentCurrency ? currentCurrency.symbol : null}&nbsp;
                        {(currentCurrency && priceToPay) ? Decimal.format(priceToPay, currentCurrency.precision, ',') : '-'}
                    </span>
                    <img
                        src={InfoIcon}
                        alt="tooltip"
                        onMouseEnter={e => this.handleHoverTooltipIcon()}
                        onMouseLeave={e => this.handleToggleTooltipVisible()}
                    />
                </div>
                <Form className="pg-deploy-total-actions__checkbox">
                    <Form.Check
                        type="checkbox"
                        custom
                        id="agreeWithTerms"
                        checked={termsAccepted}
                        onChange={e => this.props.handleAgreeTerms('termsAccepted', !termsAccepted)}
                        label={termsLabel}
                    />
                </Form>
                <Button
                    block={true}
                    type="button"
                    disabled={!this.handleCheckEnabledButton(remainingValue, termsAccepted)}
                    onClick={this.handleClickSubmit}
                    size="lg"
                    variant="success"
                >
                    {translate('page.body.deploy.totalActions.submit')}
                </Button>
                <span className={tooltipClass}>
                    {translate(`page.body.deploy.totalActions.tooltip`)}
                </span>
            </div>
        );
    }

    private getSelectedPackagePrice = (key: string) => {
        const { selectedPackage, translate } = this.props;

        const selectedPackagePrice = translate(`page.body.landing.prices.card.${selectedPackage}.${key}.value`);
        const formattedValue = selectedPackagePrice.replace(/€/g,'').replace(/,/g,'');

        return formattedValue;
    }

    private handleCalculatePriceToPay = (selectedPackageSetupFee: string, selectedPackageSubscriptionFee: string): number => {
        return +selectedPackageSetupFee + +selectedPackageSubscriptionFee * 2;
    }

    private handleCalculateRemaining = (priceToPay: number, currentBalance?: string): number => {
        const balance = currentBalance ? currentBalance : 0;

        return +balance - priceToPay;
    }

    private handleCheckEnabledButton = (remainingValue: number, termsAccepted: boolean) => {
        const { exchangeName, domainName } = this.props;

        return remainingValue >= 0 && termsAccepted && exchangeName && domainName;
    }

    private handleClickSubmit = e => {
        this.props.handleClickDeploy();
    }

    private handleToggleTooltipVisible = () => {
        this.setState(prevState => ({
            isMouseTooltipVisible: !prevState.isMouseTooltipVisible,
        }));
    }

    private handleHoverTooltipIcon = () => {
        changeElementPosition('pg-deploy-total-actions__tooltip', 0, -100, 20);
        this.handleToggleTooltipVisible();
    }
}
