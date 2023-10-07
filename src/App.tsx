import { Suspense } from 'react';
import { AuthProvider } from 'auth/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import CustomThemeProvider from 'theme/CustomThemeProvider';
import Router from 'routes/Router';

import Loading from 'components/common/loading/Loading';

function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <BrowserRouter>
        <AuthProvider>
          <CustomThemeProvider>
            <Router />
          </CustomThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
