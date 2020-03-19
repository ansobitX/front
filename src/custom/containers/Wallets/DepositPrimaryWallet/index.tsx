import * as React from 'react';
import { Currency } from '../../../../modules';
import { OrderComponent } from '../../index';

interface OwnProps {
    currencies: Currency[];
    currency;
    translate: (key: string) => string;
}

type Props = OwnProps;

export class DepositPrimaryWallet extends React.Component<Props> {
    public render() {
        const {
            currencies,
            currency,
            translate,
        } = this.props;

        return (
            <div className="pg-deposit-primary-wallet">
                <h1 className="pg-deposit-primary-wallet__title">
                    {translate('page.body.deposit.primaryWallet.title')}&nbsp;
                    {currency ? currency.name : ''}
                </h1>
                <OrderComponent orderType="buy" currencies={currencies} />
            </div>
        );
    }
}
