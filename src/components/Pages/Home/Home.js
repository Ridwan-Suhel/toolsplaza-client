import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Newsletter from "./Newsletter";
import OfficeContact from "./OfficeContact";
import QuerySection from "./QuerySection";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <main>
      <Banner />
      <Tools />
      <BusinessSummary />
      <Reviews />
      <QuerySection />
      <OfficeContact />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Home;
