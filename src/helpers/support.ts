import { TName, TData } from './types/supportTypes';

export const support = {
    setSessionStorageItem: (name: TName, data: TData) : void => {
        if (typeof data !== 'string') data = JSON.stringify(data);
        localStorage.setItem(name, data);
    },
    killSessionStorageItem: (name: TName) => {
        localStorage.removeItem(name);
    },
    getSessionStorageItem: (name: TName) => {
        const item = localStorage.getItem(name);
        return item?.charAt(0) === '{' ? JSON.parse(item) : item;
    },
};
