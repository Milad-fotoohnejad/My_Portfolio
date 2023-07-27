import React from 'react';

export const RouteContext = React.createContext({
  currentRoute: '/',
  setCurrentRoute: (route: string) => {},
});
