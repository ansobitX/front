import * as React from 'react';

/* Icons */
const CheckIcon = require('../../../assets/images/landing/prices/Check.svg');
const CrossIcon = require('../../../assets/images/deploy/CrossIcon.svg');

interface OwnProps {
    selectedPackage: string;
    translate: (key: string) => string;
}

type Props = OwnProps;

export class DeployPackageDetails extends React.Component<Props> {
    public render() {
        const { selectedPackage, translate } = this.props;

        return (
            <div className="pg-deploy-package-details">
                <h2>{translate(`page.body.deploy.packageDetails.title`)}</h2>
                <div className="pg-deploy-package-details__info">
                    <div className="pg-deploy-package-details__info__col">
                        <div className="pg-deploy-package-details__info__col__value">
                            <span>{translate(`page.body.landing.prices.card.${selectedPackage}.liquidity.label`)}</span>
                            <span>{translate(`page.body.landing.prices.card.${selectedPackage}.liquidity.value`)}</span>
                        </div>
                        <div className="pg-deploy-package-details__info__col__value">
                            <span>{translate(`page.body.landing.prices.card.${selectedPackage}.supportLevel.label`)}</span>
                            <span>{translate(`page.body.landing.prices.card.${selectedPackage}.supportLevel.value`)}</span>
                        </div>
                        <div className="pg-deploy-package-details__info__col__value">
                            <span>{translate(`page.body.landing.prices.card.${selectedPackage}.cpu.label`)}</span>
                            <span>{translate(`page.body.landing.prices.card.${selectedPackage}.cpu.value`)}</span>
                        </div>
                        <div className="pg-deploy-package-details__info__col__value">
                            <span>{translate(`page.body.landing.prices.card.${selectedPackage}.ram.label`)}</span>
                            <span>{translate(`page.body.landing.prices.card.${selectedPackage}.ram.value`)}</span>
                        </div>
                        <div className="pg-deploy-package-details__info__col__value">
                            <span>{translate(`page.body.landing.prices.card.${selectedPackage}.marketPairs.label`)}</span>
                            <span>{translate(`page.body.landing.prices.card.${selectedPackage}.marketPairs.value`)}</span>
                        </div>
                        <div className="pg-deploy-package-details__info__col__value">
                            <span>{translate(`page.body.landing.prices.card.corporate.monitoring.label`)}</span>
                            <img
                                src={this.handleCheckTranslationExists(`page.body.landing.prices.card.${selectedPackage}.monitoring.label`) ? CheckIcon : CrossIcon}
                                alt=""
                            />
                        </div>
                        <div className="pg-deploy-package-details__info__col__value">
                            <span>{translate(`page.body.landing.prices.card.corporate.finex.label`)}</span>
                            <img
                                src={this.handleCheckTranslationExists(`page.body.landing.prices.card.${selectedPackage}.finex.label`) ? CheckIcon : CrossIcon}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="pg-deploy-package-details__info__col">
                        <div className="pg-deploy-package-details__info__col__value">
                            <span>{translate(`page.body.landing.prices.card.corporate.currencies.label`)}</span>
                            <img
                                src={this.handleCheckTranslationExists(`page.body.landing.prices.card.${selectedPackage}.currencies.label`) ? CheckIcon : CrossIcon}
                                alt=""
                            />
                        </div>
                        <div className="pg-deploy-package-details__info__col__value">
                            <span>{translate(`page.body.landing.prices.card.corporate.currencies2.label`)}</span>
                            <img
                                src={this.handleCheckTranslationExists(`page.body.landing.prices.card.${selectedPackage}.currencies2.label`) ? CheckIcon : CrossIcon}
                                alt=""
                            />
                        </div>
                        <div className="pg-deploy-package-details__info__col__value">
                            <span>{translate(`page.body.landing.prices.card.corporate.currencies3.label`)}</span>
                            <img
                                src={this.handleCheckTranslationExists(`page.body.landing.prices.card.${selectedPackage}.currencies3.label`) ? CheckIcon : CrossIcon}
                                alt=""
                            />
                        </div>
                        <div className="pg-deploy-package-details__info__col__value">
                            <span>{translate(`page.body.landing.prices.card.corporate.currencies4.label`)}</span>
                            <img
                                src={this.handleCheckTranslationExists(`page.body.landing.prices.card.${selectedPackage}.currencies4.label`) ? CheckIcon : CrossIcon}
                                alt=""
                            />
                        </div>
                        <div className="pg-deploy-package-details__info__col__value">
                            <span>{translate(`page.body.landing.prices.card.corporate.customBlockchains.label`)}</span>
                            <img
                                src={this.handleCheckTranslationExists(`page.body.landing.prices.card.${selectedPackage}.customBlockchains.label`) ? CheckIcon : CrossIcon}
                                alt=""
                            />
                        </div>
                        <div className="pg-deploy-package-details__info__col__value">
                            <span>{translate(`page.body.landing.prices.card.corporate.frontEnd.label`)}</span>
                            <img
                                src={this.handleCheckTranslationExists(`page.body.landing.prices.card.${selectedPackage}.frontEnd.label`) ? CheckIcon : CrossIcon}
                                alt=""
                            />
                        </div>
                        <div className="pg-deploy-package-details__info__col__value">
                            <span>{translate(`page.body.landing.prices.card.corporate.backEnd.label`)}</span>
                            <img
                                src={this.handleCheckTranslationExists(`page.body.landing.prices.card.${selectedPackage}.backEnd.label`) ? CheckIcon : CrossIcon}
                                alt=""
                            />
                        </div>
                        <div className="pg-deploy-package-details__info__col__value">
                            <span>{translate(`page.body.deploy.packageDetails.selectedPlan.title`)}</span>
                            <span>{translate(`page.body.landing.prices.card.${selectedPackage}.title`)}</span>
                        </div>
                        <div className="pg-deploy-package-details__info__col__value">
                            <span>{translate(`page.body.landing.prices.card.${selectedPackage}.setupFee.label`)}</span>
                            <span>{translate(`page.body.landing.prices.card.${selectedPackage}.setupFee.value`)}</span>
                        </div>
                        <div className="pg-deploy-package-details__info__col__value">
                            <span>{translate(`page.body.landing.prices.card.${selectedPackage}.subscriptionFee.label`)}</span>
                            <span>{translate(`page.body.landing.prices.card.${selectedPackage}.subscriptionFee.value`)}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private handleCheckTranslationExists = (value: string) => {
        const { translate } = this.props;

        return translate(value) !== value;
    }
}
