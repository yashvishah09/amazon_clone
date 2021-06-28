import React, { createContext, useContext, useReducer } from 'react';

// Prepares for our data layer
export const StateContext = createContext();

// Wrap our app
// children = App component
export const StateProvider = ({ reducer, initialState, children }) => {
  return <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>;
};

// Pull all tge information provided from the data layer
export const useStateValue = () => useContext(StateContext);
