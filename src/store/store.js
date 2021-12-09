import { init } from "@rematch/core";
import loadingPlugin from "@rematch/loading";
import immerPlugin from "@rematch/immer";
import persistPlugin from "@rematch/persist";
import storage from "../helpers/storage";
import { AxiosMiddleware } from "../services/_clients/middlewares/AxiosMiddleware";

import { models } from "./models";

const persistConfig = {
  key: "app",
  storage: storage,
  whiteList: ["productsModel"],
};

export const store = init({
  models,
  plugins: [immerPlugin(), loadingPlugin(), persistPlugin(persistConfig)],
  redux: {
    rootReducers: { RESET_APP: () => undefined },
    middlewares: [AxiosMiddleware],
  },
});
