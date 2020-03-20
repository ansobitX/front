import classnames from 'classnames';
import * as React from 'react';
import { DEPLOY_LOCATIONS, AVAILABLE_DEPLOY_LOCATIONS } from '../../../../constants';

interface OwnProps {
    selectedLocation: string;
    handleSelectLocation: (key: string, value: string) => void;
    translate: (key: string) => string;
}

type Props = OwnProps;

export class DeployLocationSelect extends React.Component<Props> {
    public renderLocation = (locationName: string) => {
        const {
            selectedLocation,
            translate,
        } = this.props;
        const locationAvailable = AVAILABLE_DEPLOY_LOCATIONS.includes(locationName);

        const locationClass = classnames('pg-deploy-location-select__item', {
            'pg-deploy-location-select__item--selected': selectedLocation === locationName,
            'pg-deploy-location-select__item--disabled': !locationAvailable,
        });

        return (
            <div className={locationClass} onClick={e => this.handleClickLocationItem(locationName, locationAvailable)}>
                <img src={require(`../../../assets/images/deploy/flags/${locationName}.png`)} alt={`${locationName} Flag`} />
                {locationAvailable ? (
                    <span className="pg-deploy-location-select__item__title">
                        {translate(`page.body.deploy.location.${locationName}.title`)}
                    </span>
                ) : (
                    <div className="pg-deploy-location-select__item__title">
                        <span>{translate(`page.body.deploy.location.${locationName}.title`)}</span>
                        <span>{translate(`page.body.deploy.location.comingSoon`)}</span>
                    </div>
                )}
            </div>
        );
    }

    public render() {
        return (
            <div className="pg-deploy-location-select">
                {DEPLOY_LOCATIONS.length && DEPLOY_LOCATIONS.map(item => this.renderLocation(item))}
            </div>
        );
    }

    public handleClickLocationItem = (locationName: string, locationAvailable: boolean) => {
        if (locationAvailable) {
            this.props.handleSelectLocation('selectedLocation', locationName);
        }
    }
}
