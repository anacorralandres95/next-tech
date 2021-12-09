import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Products from "./screens/Products";

import ScrollToTop from "./utils/ScrollToTop";
import AppStart from "./helpers/AppStart";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <AppStart>
            <Routes>
              <Route exact path="/" element={<Products />} />
              {/* <Route path="/:productId">
              <Video />
            </Route>
            <Route path="*">
              <NotFound />
            </Route> */}
            </Routes>
          </AppStart>
        </ScrollToTop>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
