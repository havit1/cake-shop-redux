import React from "react";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import IceCreamContainer from "./components/IceCreamContainer";
import CandyContainer from "./components/CandyContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <IceCreamContainer />
        <CandyContainer />
        <NewCakeContainer />
        <UserContainer></UserContainer>
      </div>
    </Provider>
  );
}

export default App;
