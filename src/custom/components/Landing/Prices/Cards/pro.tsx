import * as React from 'react';
import { Link } from 'react-router-dom';

/* Icons */
const CheckIcon = require('../../../../assets/images/landing/prices/Check.svg');

interface OwnProps {
    translate: (key: string) => string;
}

type Props = OwnProps;

export class LandingPricesPro extends React.Component<Props> {
    public render() {
        const { translate } = this.props;

        return (
            <div className="price-card">
                <h1>{translate('page.body.landing.prices.card.pro.title')}</h1>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.pro.liquidity.label')}</span>
                    <span>{translate('page.body.landing.prices.card.pro.liquidity.value')}</span>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.pro.setupFee.label')}</span>
                    <span>{translate('page.body.landing.prices.card.pro.setupFee.value')}</span>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.pro.subscriptionFee.label')}</span>
                    <span>{translate('page.body.landing.prices.card.pro.subscriptionFee.value')}</span>
                </div>
                <Link to="/deploy" className="landing-button">
                    {translate('page.body.landing.prices.card.pro.deploy')}
                </Link>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.pro.supportLevel.label')}</span>
                    <span>{translate('page.body.landing.prices.card.pro.supportLevel.value')}</span>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.pro.cpu.label')}</span>
                    <span>{translate('page.body.landing.prices.card.pro.cpu.value')}</span>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.pro.ram.label')}</span>
                    <span>{translate('page.body.landing.prices.card.pro.ram.value')}</span>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.pro.marketPairs.label')}</span>
                    <span>{translate('page.body.landing.prices.card.pro.marketPairs.value')}</span>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.pro.monitoring.label')}</span>
                    <img src={CheckIcon} alt=""/>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.pro.currencies.label')}</span>
                    <img src={CheckIcon} alt=""/>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.pro.currencies2.label')}</span>
                    <img src={CheckIcon} alt=""/>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.pro.frontEnd.label')}</span>
                    <img src={CheckIcon} alt=""/>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.pro.arke.label')}</span>
                    <span>{translate('page.body.landing.prices.card.pro.arke.value')}</span>
                </div>
            </div>
        );
    }
}
