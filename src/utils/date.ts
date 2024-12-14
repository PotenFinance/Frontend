const date = new Date();

export const getYear = () => date.getFullYear();
export const getMonth = () => date.getMonth() + 1;
export const getDate = () => date.getDate();
export const getDay = () => date.getDay();
