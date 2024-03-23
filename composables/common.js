export const getVersion = () => {
  const runtimeConfig = useRuntimeConfig();
  return runtimeConfig.public.APP_VERSION;
};
export const dummyComposable = () => {};
