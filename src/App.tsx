import { Suspense } from 'react';
import { AuthProvider } from 'auth/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import CustomThemeProvider from 'theme/CustomThemeProvider';
import Router from 'routes/Router';

import Loading from 'components/common/loading/Loading';
import StoreProvider from 'store/StoreProvider';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <StoreProvider>
        <BrowserRouter>
          <AuthProvider>
            <CustomThemeProvider>
              <Router />
            </CustomThemeProvider>
          </AuthProvider>
        </BrowserRouter>
      </StoreProvider>
    </Suspense>
  );
}

export default App;
