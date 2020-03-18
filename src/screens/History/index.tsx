import classnames from 'classnames';
import * as React from 'react';
import {
    InjectedIntlProps,
    injectIntl,
} from 'react-intl';
import {
    connect,
    MapDispatchToPropsFunction,
} from 'react-redux';
import { TabPanel } from '../../components';
import { HistoryElement } from '../../containers/HistoryElement';
import { setDocumentTitle } from '../../helpers';
import {
    fetchHistory,
    marketsFetch,
    resetHistory,
    RootState,
    selectSidebarState,
    walletsFetch,
} from '../../modules';

interface ReduxProps {
    isSidebarOpen: boolean;
}

interface DispatchProps {
    resetHistory: typeof resetHistory;
    fetchMarkets: typeof marketsFetch;
    fetchWallets: typeof walletsFetch;
    fetchHistory: typeof fetchHistory;
}

type Props = ReduxProps & DispatchProps & InjectedIntlProps;

interface State {
    tab: string;
    currentTabIndex: number;
}

class History extends React.Component<Props, State> {
    public state = {
        tab: 'deposits',
        currentTabIndex: 0,
    };

    public tabMapping = ['deposits', 'withdraws', 'trades'];

    public componentDidMount() {
        setDocumentTitle('History');
        this.props.fetchMarkets();
        this.props.fetchWallets();
    }

    public componentWillUnmount() {
        this.props.resetHistory();
    }

    public render() {
        const { isSidebarOpen } = this.props;
        const containerClass = classnames('pg-container pg-history-tab', {
            'pg-container--open': isSidebarOpen,
        });

        return (
            <div className={containerClass}>
                <div className="pg-history-tab__header">
                    {this.props.intl.formatMessage({ id: 'page.body.history.header'})}
                </div>
                <div className="pg-history-tab__tabs-content">
                    <TabPanel
                        panels={this.renderTabs()}
                        onTabChange={this.handleMakeRequest}
                        currentTabIndex={this.state.currentTabIndex}
                        onCurrentTabChange={this.onCurrentTabChange}
                    />
                </div>
            </div>
        );
    }

    private onCurrentTabChange = index => this.setState({ currentTabIndex: index });

    private handleMakeRequest = (index: number) => {
        if (this.state.tab === this.tabMapping[index]) {
            return;
        }
        this.props.resetHistory();
        this.setState({ tab: this.tabMapping[index] });
    };

    private renderTabs = () => {
        const { tab } = this.state;
        return [
            {
                content: tab === 'deposits' ? <HistoryElement type="deposits" /> : null,
                label: this.props.intl.formatMessage({id: 'page.body.history.deposit'}),
            },
            {
                content: tab === 'withdraws' ? <HistoryElement type="withdraws" /> : null,
                label: this.props.intl.formatMessage({id: 'page.body.history.withdraw'}),
            },
            {
                content: tab === 'trades' ? <HistoryElement type="trades" /> : null,
                label: this.props.intl.formatMessage({id: 'page.body.history.trade'}),
            },
        ];
    };
}

const mapStateToProps = (state: RootState): ReduxProps => ({
    isSidebarOpen: selectSidebarState(state),
});

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> = dispatch => ({
    fetchMarkets: () => dispatch(marketsFetch()),
    fetchWallets: () => dispatch(walletsFetch()),
    fetchHistory: payload => dispatch(fetchHistory(payload)),
    resetHistory: () => dispatch(resetHistory()),
});

export const HistoryScreen = injectIntl(connect(mapStateToProps, mapDispatchToProps)(History));
