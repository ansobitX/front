export const cutLongString = str =>
    str && str.length > 24 ? `${str.slice(0,12)}...${str.slice(str.length - 13, str.length - 1)}` : str;
