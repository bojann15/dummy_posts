import React, { useState, createContext } from 'react';

export const GlobalContext = createContext();
export const GlobalContextProvider = (props) => {
    const [posts, setPosts] = useState([]);
    const [shouldUpdate, setShouldUpdate] = useState(true);
    return (
        <GlobalContext.Provider value={{
            posts, setPosts, shouldUpdate, setShouldUpdate
        }}>
            {props.children}
        </GlobalContext.Provider>

    )
};