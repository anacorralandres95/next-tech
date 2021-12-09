import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Products from "./screens/Products";

import ScrollToTop from "./utils/ScrollToTop";
import AppStart from "./helpers/AppStart";
import Layout from "./components/common/layout/Layout";
import "./styles/styles.css";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppStart>
          <ScrollToTop>
            <Layout>
              <Routes>
                <Route exact path="/" element={<Products />} />
                {/* <Route path="/:productId">
              <Video />
            </Route>
            <Route path="*">
              <NotFound />
            </Route> */}
              </Routes>
            </Layout>
          </ScrollToTop>
        </AppStart>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
