import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Tools from "./Tools";

const Home = () => {
  return (
    <main>
      <Banner />
      <Tools />
      <BusinessSummary />
      <Footer />
    </main>
  );
};

export default Home;
