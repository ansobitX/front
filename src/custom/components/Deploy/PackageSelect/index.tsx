import classnames from 'classnames';
import * as React from 'react';
import MouseTooltip from 'react-sticky-mouse-tooltip';
import { AVAILABLE_PACKAGES } from '../../../../constants';

interface OwnProps {
    selectedPackage: string;
    handleSelectPackage: (key: string, value: string) => void;
    translate: (key: string) => string;
}

interface State {
    isMouseTooltipVisible: boolean;
}

type Props = OwnProps;

export class DeployPackageSelect extends React.Component<Props, State> {
    public state = {
        isMouseTooltipVisible: false,
    };

    public renderPackage = (packageName: string) => {
        const {
            selectedPackage,
            handleSelectPackage,
            translate,
        } = this.props;
        const { isMouseTooltipVisible } = this.state;

        const packageClass = classnames('pg-deploy-package-select__item', {
            'pg-deploy-package-select__item--selected': selectedPackage === packageName,
        });

        return (
            <div
                className={packageClass}
                onClick={e => handleSelectPackage('selectedPackage', packageName)}
                onMouseEnter={this.toggleMouseTooltip}
                onMouseLeave={this.toggleMouseTooltip}
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
                <MouseTooltip
                    className="tooltip-hover"
                    offsetX={-80}
                    offsetY={20}
                    visible={isMouseTooltipVisible}
                >
                    <span>{translate(`page.body.deploy.packageSelect.tooltip`)}</span>
                </MouseTooltip>
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

    private toggleMouseTooltip = () => {
        this.setState(prevState => ({ isMouseTooltipVisible: !prevState.isMouseTooltipVisible }));
    };
}
