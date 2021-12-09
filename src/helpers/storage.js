import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    remoteIem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== undefined ? createWebStorage("local") : createNoopStorage();

export default storage;
