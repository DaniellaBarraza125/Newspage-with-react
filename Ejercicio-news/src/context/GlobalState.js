import React, { createContext } from "react";

const initialState = {
    books: [],
};

export const GlobalContext = createContext(initialState);
