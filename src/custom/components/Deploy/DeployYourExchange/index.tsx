import * as React from 'react';
import { CustomInput } from '../../../../components';

interface OwnProps {
    exchangeName: string;
    domainName: string;
    handleChangeInput: (key: string, value: string) => void;
    translate: (key: string) => string;
}

type Props = OwnProps;

export class DeployYourExchange extends React.Component<Props> {
    public render() {
        const {
            exchangeName,
            domainName,
            handleChangeInput,
            translate,
        } = this.props;

        return (
            <div className="pg-deploy-your-exchange">
                <h1>{translate('page.body.deploy.yourExchange.title')}</h1>
                <div className="pg-deploy-your-exchange__fields">
                    <div className="pg-deploy-your-exchange__fields__item">
                        <span className="label">{translate('page.body.deploy.yourExchange.field.name.label')}</span>
                        <CustomInput
                            type="text"
                            label=""
                            placeholder={translate('page.body.deploy.yourExchange.field.name.placeholder')}
                            defaultLabel="Exchange name"
                            handleChangeInput={value => handleChangeInput('exchangeName', value)}
                            inputValue={exchangeName || ''}
                            autoFocus={true}
                        />
                    </div>
                    <div className="pg-deploy-your-exchange__fields__item">
                    <span className="label">{translate('page.body.deploy.yourExchange.field.domain.label')}</span>
                        <CustomInput
                            type="text"
                            label=""
                            placeholder={translate('page.body.deploy.yourExchange.field.domain.placeholder')}
                            defaultLabel="Domain name"
                            handleChangeInput={value => handleChangeInput('domainName', value)}
                            inputValue={domainName || ''}
                            autoFocus={false}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
