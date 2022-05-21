import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <main>
      <Banner />
      <Tools />
      <BusinessSummary />
      <Reviews />
      <Footer />
    </main>
  );
};

export default Home;
