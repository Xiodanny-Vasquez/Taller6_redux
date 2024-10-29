
import React from "react";

import { Provider } from "react-redux";
import { Store } from "./store";
import CounterComponent from "./CounterComponent";

const App = () => {
  return (
    <Provider store={Store}>
      <div className="App">
        <h1>Mi contador con Redux</h1>
        <CounterComponent/>
      </div>
    </Provider>
  );
};
export default App; 