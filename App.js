
import React from 'react';
import { StatusBar } from 'react-native';

import InitRouter from './src/components/init-router';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <InitRouter />
    </>
  );
};

export default App;
