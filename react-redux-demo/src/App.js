import { Provider } from 'react-redux';
import './App.css';
import EggContainer from './components/EggContainer';
import HookChickenContainer from './components/HookChickenContainer';
import HooksEggContainer from './components/HooksEggContainer';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <EggContainer />
        <HooksEggContainer />
        <HookChickenContainer />
      </Provider>
    </div>
  );
}

export default App;
