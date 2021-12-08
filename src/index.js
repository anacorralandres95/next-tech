import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Products from "./screens/Products";

import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route exact path='/' element={<Products/>}/>
            {/* <Route path="/:productId">
              <Video />
            </Route>
            <Route path="*">
              <NotFound />
            </Route> */}
          </Routes>
        </ScrollToTop>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));