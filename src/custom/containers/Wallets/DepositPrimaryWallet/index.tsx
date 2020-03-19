import * as React from 'react';
import { OrderComponent } from '../../index';

export interface OwnProps {
    translate: (key: string) => string;
}

type Props = OwnProps;

export class DepositPrimaryWallet extends React.Component<Props> {
    public render() {
        const { translate } = this.props;

        return (
            <div className="pg-deposit-primary-wallet">
                <h1 className="pg-deposit-primary-wallet__title">
                    {translate('page.body.deposit.primaryWallet.title')}
                </h1>
                <OrderComponent orderType="buy" />
            </div>
        );
    }
}
