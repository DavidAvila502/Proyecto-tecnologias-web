import React, { useState, useEffect } from "react";
import Header from "./Containers/Header/Header";
import Main from "./Containers/Main/Main";
import Footer from "./Containers/Footer/Footer";
import useApi from "../../Hooks/UseAPI";
import { GeneralProvider } from "../../Context/GenearlContext";

const HomeView = () => {
  const [headerData, setHeaderData] = useState(false);
  const [mainData, setMainData] = useState(false);
  const [footerData, setFooterData] = useState(false);
  const { getData } = useApi();

  useEffect(() => {
    getData("/headers").then((resp) => setHeaderData(resp.data[0].attributes));
    getData("/mains").then((resp) => setMainData(resp.data[0].attributes));
    getData("/footers").then((resp) => setFooterData(resp.data[0].attributes));
  }, []);

  if (headerData && mainData && footerData) {
    return (
      <GeneralProvider value={{ headerData, mainData, footerData }}>
        <Header />
        <Main />
        <Footer />
      </GeneralProvider>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img src="assets/images/loading2.svg" style={{ height: "300px" }} />
      </div>
    );
  }
};

export default HomeView;
