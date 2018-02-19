import React, { Component } from "react";
import "flexboxgrid2";
import styled from "styled-components";

import Header from "./Header/";
import PopularDirections from "./Popular-directions/";
import BestPricesMonth from "./Best_Prices_month/";
import CheapAirlines from "./Cheap_Airlines/";
import Dispatch from "./Dispatch/";
import SpecialOffer from "./Special_offer/";
import CustomerInfo from "./Customer_info/";
import Application from "./Application/";
import Footer from "./Footer/";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PopularDirections />
        <BestPricesMonth />
        <CheapAirlines />
        <Dispatch />
        <SpecialOffer />
        <CustomerInfo />
        <Application />
        <Footer />
      </div>
    );
  }
}

export default App;
