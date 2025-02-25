import React from 'react';
import {useLocalObservable} from 'mobx-react-lite';
import rootStore, {RootStore} from './root.store'

const storeContext = React.createContext<RootStore | null>(null);

export const StoreProvider = ({children}: { children: React.ReactNode }) => {
    const store = useLocalObservable(() => rootStore);
    return <storeContext.Provider value={store}>{children}</storeContext.Provider>;
}

export const useStore = () => {
    const store = React.useContext(storeContext);
    if (!store) {
        throw new Error('useStore must be used within a StoreProvider.');
    }
    return store;
}