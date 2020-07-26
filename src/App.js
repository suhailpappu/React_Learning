import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import AppRouter from './router/AppRouter'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Posts</h1>
        </header>

        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;
