const useApi = () => {
  const getData = async (endPoitn) => {
    try {
      let data = await fetch(
        "http://localhost:1337/api" + endPoitn + "?populate=deep"
      );

      return await data.json();
    } catch (error) {
      return false;
    }
  };

  return { getData };
};

export default useApi;
