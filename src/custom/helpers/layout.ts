export const getStaticHeight = () => {
    const header = document.getElementsByTagName('header')[0];
    const headerHeight = header ? header.clientHeight : 0;
    const headerContainer = document.getElementsByClassName('pg-trading-header-container')[0];
    const headerContainerHeight = headerContainer ? headerContainer.clientHeight : 0;

    return headerHeight + headerContainerHeight;
};

export const gridUnitsToPixels = (gridUnit: number, rowHeight: number, margin: number) => {
    let res = gridUnit * (rowHeight + margin);
    if (gridUnit > 1) {
        res -= margin;
    }

    return res;
};

export const pixelsToGridUnits = (pixels: number, rowHeight: number, margin: number) => {
    let tmp = pixels;

    if (pixels / (rowHeight + margin) > 1) {
        tmp += margin;
    }

    return tmp / (rowHeight + margin);
};

const getLayouts = () => {
    const minOrderHeight = 15;
    const minOrderBookHeight = 11;
    const minTradingChartHeight = 11;
    const minOpenOrdersHeight = 15;
    const minRecentTradesHeight = 11;

    const rowHeight = 0;
    const headerHeight = 56;
    const margin = 12;

    const minGridHeight = 45;
    const currentWindowHeight = window.innerHeight - headerHeight;
    const currentGridHeight = pixelsToGridUnits(currentWindowHeight, rowHeight, margin);

    const gridCurrMinDiff = (currentGridHeight - minGridHeight) * 0.223;

    const orderBookHeight = currentGridHeight >= minGridHeight ?
        minOrderBookHeight + gridCurrMinDiff : minOrderBookHeight;
    const tradingChartHeight = currentGridHeight >= minGridHeight ?
        minTradingChartHeight + gridCurrMinDiff : minTradingChartHeight;
    const recentTradesHeight = currentGridHeight >= minGridHeight ?
        minRecentTradesHeight + gridCurrMinDiff : minRecentTradesHeight;

    return {
        sm: [
            { x: 18, y: 19, w: 6, h: minOrderHeight, i: '1', isDraggable: false, isResizable: false },
            { x: 0, y: 5, w: 12, h: tradingChartHeight, i: '2', isDraggable: false, isResizable: false },
            { x: 18, y: 5, w: 6, h: orderBookHeight, i: '3', isDraggable: false, isResizable: false },
            { x: 0, y: 19, w: 18, h: minOpenOrdersHeight, i: '4', isDraggable: false, isResizable: false },
            { x: 12, y: 0, w: 6, h: recentTradesHeight, i: '5', isDraggable: false, isResizable: false },
        ],
        xs: [
            { x: 0, y: 40, w: 12, h: 24, i: '1', isDraggable: false, isResizable: false },
            { x: 0, y: 60, w: 12, h: 15, i: '2',isDraggable: false, isResizable: false },
            { x: 0, y: 80, w: 12, h: 15, i: '3', isDraggable: false, isResizable: false },
            { x: 0, y: 120, w: 12, h: 15, i: '4', isDraggable: false, isResizable: false },
            { x: 0, y: 20, w: 12, h: 15, i: '5', isDraggable: false, isResizable: false },
        ],
    };
};

export const customLayouts = getLayouts();
