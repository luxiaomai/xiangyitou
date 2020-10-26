export default instance => {
  return {
    check: params => {
      return instance.post("/api/quectel", params);
    }
  };
};
