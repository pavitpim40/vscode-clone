import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '.';
import Loading from 'components/common/loading/Loading';

const StoreProvider = (props: PropsWithChildren<{}>) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
