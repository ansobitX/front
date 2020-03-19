import classnames from 'classnames';
import * as React from 'react';
import { TabPanel } from '../../../components';
import { Currency, Market } from '../../../modules';
import { OrderForm } from '../';

export type FormType = 'buy' | 'sell';

export type DropdownElem = number | string | React.ReactNode;

export interface OrderProps {
    type: FormType;
    orderType: string | React.ReactNode;
    price: number | string;
    amount: number | string;
    available: number;
}

export type OnSubmitCallback = (order: OrderProps) => void;

export interface OrderComponentProps {
    /**
     * Amount of money in base currency wallet
     */
    availableBase: number;
    /**
     * Amount of money in quote currency wallet
     */
    availableQuote: number;
    /**
     * Callback which is called when a form is submitted
     */
    onSubmit: OnSubmitCallback;
    /**
     * If orderType is 'Market' this value will be used as price for buy tab
     */
    priceMarketBuy: number;
    /**
     * If orderType is 'Market' this value will be used as price for sell tab
     */
    priceMarketSell: number;
    /**
     * If orderType is 'Limit' this value will be used as price
     */
    priceLimit?: number;
    /**
     * Name of currency for price field
     */
    from: string;
    /**
     * Name of currency for amount field
     */
    to: string;
    /**
     * Whether order is disabled to execute
     */
    disabled?: boolean;
    handleSendType?: (index: number, label: string) => void;
    /**
     * Index of tab to switch on
     */
    tabIndex?: number;
    /**
     * Precision of amount, total, available, fee value
     */
    currentMarketAskPrecision: number;
    /**
     * Precision of price value
     */
    currentMarketBidPrecision: number;
    /**
     * @default 'Order Type'
     * Text for order type dropdown label.
     */
    orderTypeText?: string;
    /**
     * @default 'Price'
     * Text for Price field Text.
     */
    priceText?: string;
    /**
     * @default 'Amount'
     * Text for Amount field Text.
     */
    amountText?: string;
    /**
     * @default 'Total'
     * Text for Total field Text.
     */
    totalText?: string;
    /**
     * @default 'Available'
     * Text for Available field Text.
     */
    availableText?: string;
    /**
     * @default 'BUY'
     * Text for buy order submit button.
     */
    submitBuyButtonText?: string;
    /**
     * @default 'SELL'
     * Text for sell order submit button.
     */
    submitSellButtonText?: string;
    /**
     * @default 'Buy'
     * Text for Buy tab label.
     */
    labelFirst?: string;
    /**
     * @default 'Sell'
     * Text for Sell tab label.
     */
    labelSecond?: string;
    orderTypes?: DropdownElem[];
    orderTypesIndex?: DropdownElem[];
    /**
     * proposals for buy
     */
    bids: string[][];
    /**
     * proposals for sell
     */
    asks: string[][];
    orderType: string;
    listenInputPrice?: () => void;
    currencies?: Currency[];
    markets?: Market[];
    setCurrentMarket: (market: Market) => void;
}

const defaultOrderTypes: DropdownElem[] = [
    'Limit',
    'Market',
];

class Order extends React.PureComponent<OrderComponentProps> {
    public render() {
        const { orderType } = this.props;

        const orderClass = classnames('cr-order', {
            'cr-order--buy': orderType === 'buy',
            'cr-order--sell': orderType === 'sell',
        });

        return (
            <div className={orderClass}>
                <TabPanel
                    fixed={true}
                    panels={orderType === 'buy' ? this.getPanelsBuy() : this.getPanelsSell()}
                    onTabChange={this.handleChangeTab}
                    currentTabIndex={this.props.tabIndex || 0}
                />
            </div>
        );
    }

    private getPanelsBuy = () => {
        const {
            availableQuote,
            disabled,
            priceMarketBuy,
            priceLimit,
            from,
            to,
            currentMarketAskPrecision,
            currentMarketBidPrecision,
            orderTypeText,
            priceText,
            amountText,
            totalText,
            availableText,
            submitSellButtonText,
            labelFirst,
            orderTypes,
            orderTypesIndex,
            asks,
            listenInputPrice,
            currencies,
            markets,
            setCurrentMarket,
        } = this.props;

        return [
            {
                content: (
                    <OrderForm
                        proposals={asks}
                        disabled={disabled}
                        type="buy"
                        from={from}
                        to={to}
                        available={availableQuote}
                        priceMarket={priceMarketBuy}
                        priceLimit={priceLimit}
                        onSubmit={this.props.onSubmit}
                        orderTypes={orderTypes ? orderTypes : defaultOrderTypes}
                        orderTypesIndex={orderTypesIndex ? orderTypesIndex : defaultOrderTypes}
                        currentMarketAskPrecision={currentMarketAskPrecision}
                        currentMarketBidPrecision={currentMarketBidPrecision}
                        orderTypeText={orderTypeText}
                        priceText={priceText}
                        amountText={amountText}
                        totalText={totalText}
                        availableText={availableText}
                        submitButtonText={submitSellButtonText}
                        listenInputPrice={listenInputPrice}
                        currencies={currencies}
                        markets={markets}
                        setCurrentMarket={setCurrentMarket}
                    />
                ),
                label: labelFirst ? labelFirst : 'Buy',
            },
        ];
    };

    private getPanelsSell = () => {
        const {
            availableBase,
            priceMarketSell,
            priceLimit,
            from,
            to,
            currentMarketAskPrecision,
            currentMarketBidPrecision,
            orderTypeText,
            priceText,
            amountText,
            totalText,
            availableText,
            submitBuyButtonText,
            labelSecond,
            orderTypes,
            orderTypesIndex,
            bids,
            listenInputPrice,
            currencies,
            markets,
            setCurrentMarket,
        } = this.props;

        return [
            {
                content: (
                    <OrderForm
                        proposals={bids}
                        type="sell"
                        from={from}
                        to={to}
                        available={availableBase}
                        priceMarket={priceMarketSell}
                        priceLimit={priceLimit}
                        onSubmit={this.props.onSubmit}
                        orderTypes={orderTypes ? orderTypes : defaultOrderTypes}
                        orderTypesIndex={orderTypesIndex ? orderTypesIndex : defaultOrderTypes}
                        currentMarketAskPrecision={currentMarketAskPrecision}
                        currentMarketBidPrecision={currentMarketBidPrecision}
                        orderTypeText={orderTypeText}
                        priceText={priceText}
                        amountText={amountText}
                        totalText={totalText}
                        availableText={availableText}
                        submitButtonText={submitBuyButtonText}
                        listenInputPrice={listenInputPrice}
                        currencies={currencies}
                        markets={markets}
                        setCurrentMarket={setCurrentMarket}
                    />
                ),
                label: labelSecond ? labelSecond : 'Sell',
            },
        ];
    };

    private handleChangeTab = (index: number, label?: string) => {
        if (this.props.handleSendType && label) {
          this.props.handleSendType(index, label);
        }
    }
}

export {
    Order,
};
