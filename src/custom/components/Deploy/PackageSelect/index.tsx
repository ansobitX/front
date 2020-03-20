import classnames from 'classnames';
import * as React from 'react';
import { AVAILABLE_PACKAGES } from '../../../../constants';

interface OwnProps {
    selectedPackage: string;
    handleSelectPackage: (key: string, value: string) => void;
    translate: (key: string) => string;
}

type Props = OwnProps;

export class DeployPackageSelect extends React.Component<Props> {
    public renderPackage = (packageName: string) => {
        const {
            selectedPackage,
            handleSelectPackage,
            translate,
        } = this.props;

        const packageClass = classnames('pg-deploy-package-select__item', {
            'pg-deploy-package-select__item--selected': selectedPackage === packageName,
        });

        return (
            <div className={packageClass} onClick={e => handleSelectPackage('selectedPackage', packageName)}>
                <h2>{translate(`page.body.landing.prices.card.${packageName}.title`)}</h2>
                <div className="pg-deploy-package-select__item__value">
                    <span>{translate(`page.body.landing.prices.card.${packageName}.cpu.label`)}</span>
                    <span>{translate(`page.body.landing.prices.card.${packageName}.cpu.value`)}</span>
                </div>
                <div className="pg-deploy-package-select__item__value">
                    <span>{translate(`page.body.landing.prices.card.${packageName}.ram.label`)}</span>
                    <span>{translate(`page.body.landing.prices.card.${packageName}.ram.value`)}</span>
                </div>
                <div className="pg-deploy-package-select__item__value">
                    <span>{translate(`page.body.landing.prices.card.${packageName}.setupFee.label`)}</span>
                    <span>{translate(`page.body.landing.prices.card.${packageName}.setupFee.value`)}</span>
                </div>
                <div className="pg-deploy-package-select__item__value">
                    <span>{translate(`page.body.landing.prices.card.${packageName}.subscriptionFee.label`)}</span>
                    <span>{translate(`page.body.landing.prices.card.${packageName}.subscriptionFee.value`)}</span>
                </div>
            </div>
        );
    }

    public render() {

        return (
            <div className="pg-deploy-package-select">
                {AVAILABLE_PACKAGES.length && AVAILABLE_PACKAGES.map(item => this.renderPackage(item))}
            </div>
        );
    }
}
