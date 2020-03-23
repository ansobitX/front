import * as React from 'react';
import { Link } from 'react-router-dom';

/* Icons */
const CheckIcon = require('../../../../assets/images/landing/prices/Check.svg');

interface OwnProps {
    translate: (key: string) => string;
}

type Props = OwnProps;

export class LandingPricesStartUp extends React.Component<Props> {
    public render() {
        const { translate } = this.props;

        return (
            <div className="price-card">
                <h1>{translate('page.body.landing.prices.card.startUp.title')}</h1>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.startUp.liquidity.label')}</span>
                    <span>{translate('page.body.landing.prices.card.startUp.liquidity.value')}</span>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.startUp.setupFee.label')}</span>
                    <span>{translate('page.body.landing.prices.card.startUp.setupFee.value')}</span>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.startUp.subscriptionFee.label')}</span>
                    <span>{translate('page.body.landing.prices.card.startUp.subscriptionFee.value')}</span>
                </div>
                <Link to="/deploy" className="landing-button">
                    {translate('page.body.landing.prices.card.startUp.deploy')}
                </Link>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.startUp.supportLevel.label')}</span>
                    <span>{translate('page.body.landing.prices.card.startUp.supportLevel.value')}</span>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.startUp.cpu.label')}</span>
                    <span>{translate('page.body.landing.prices.card.startUp.cpu.value')}</span>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.startUp.ram.label')}</span>
                    <span>{translate('page.body.landing.prices.card.startUp.ram.value')}</span>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.startUp.marketPairs.label')}</span>
                    <span>{translate('page.body.landing.prices.card.startUp.marketPairs.value')}</span>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.startUp.currencies.label')}</span>
                    <img src={CheckIcon} alt=""/>
                </div>
            </div>
        );
    }
}
