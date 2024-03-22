import { version } from "../package.json";

export const getVersion = () => {
  console.log("version", version);
  return version;
};
export const dummyComposable = () => {};
