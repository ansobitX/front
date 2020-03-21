import classnames from 'classnames';
import * as React from 'react';
import { AVAILABLE_PACKAGES } from '../../../../constants';
import { changeElementPosition } from '../../../helpers/changeElementPosition';

interface OwnProps {
    selectedPackage: string;
    handleSelectPackage: (key: string, value: string) => void;
    translate: (key: string) => string;
}

type Props = OwnProps;

export class DeployPackageSelect extends React.Component<Props> {
    public renderPackage = (packageName: string, index: number) => {
        const {
            selectedPackage,
            handleSelectPackage,
            translate,
        } = this.props;

        const packageClass = classnames('pg-deploy-package-select__item', {
            'pg-deploy-package-select__item--selected': selectedPackage === packageName,
        });

        return (
            <div
                key={index}
                className={packageClass}
                onClick={e => handleSelectPackage('selectedPackage', packageName)}
                onMouseEnter={e => changeElementPosition('pg-deploy-package-select__item__tooltip', index, -80, 20)}
            >
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
                <span className="pg-deploy-package-select__item__tooltip tooltip-hover">
                    {translate(`page.body.deploy.packageSelect.tooltip`)}
                </span>
            </div>
        );
    }

    public render() {
        return (
            <div className="pg-deploy-package-select">
                {AVAILABLE_PACKAGES.length && AVAILABLE_PACKAGES.map((item, index) => this.renderPackage(item, index))}
            </div>
        );
    }
}
