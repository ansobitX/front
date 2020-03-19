import * as React from 'react';
import { OrderComponent } from '../../index';

export interface OwnProps {
    currency;
    translate: (key: string) => string;
}

type Props = OwnProps;

export class DepositPrimaryWallet extends React.Component<Props> {
    public render() {
        const { currency, translate } = this.props;

        return (
            <div className="pg-deposit-primary-wallet">
                <h1 className="pg-deposit-primary-wallet__title">
                    {translate('page.body.deposit.primaryWallet.title')}&nbsp;
                    {currency ? currency.name : ''}
                </h1>
                <OrderComponent orderType="buy" />
            </div>
        );
    }
}
