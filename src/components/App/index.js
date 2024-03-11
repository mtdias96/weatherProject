import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import Deshboard from '../../pages/Deshboard';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      {/* <Home /> */}
      <Deshboard />
    </ThemeProvider>
  );
}

export default App;
