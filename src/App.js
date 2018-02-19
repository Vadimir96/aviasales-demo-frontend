import React, { Component } from "react";
import "flexboxgrid2";
import styled from "styled-components";

import Header from "./Header/";
import PopularDirections from "./PopularDirections/";
import BestPricesMonth from "./BestPricesMonth/";
import CheapAirlines from "./CheapAirlines/";
import Dispatch from "./Dispatch/";
import SpecialOffer from "./SpecialOffer/";
import CustomerInfo from "./CustomerInfo/";
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
