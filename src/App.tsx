import React, { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import Navigation from './navigations';
import { theme } from './common/theme';

const App = () => {
  const [state, setState] = useState({});
  const childRef = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <Navigation
        ref={(ref) => {
          childRef.current = ref;
        }}
      />
    </ThemeProvider>
  );
};

export default App;