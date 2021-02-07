import Home from './pages/home';

import {Provider} from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home/>
      </Provider>
    </div>
  );
}

export default App;
