import AppNavigator from './AppNavigator';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Home from './screens/Home';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    // <Provider store={store}>
    <Home />
    // </Provider>
  );
};

export default App;