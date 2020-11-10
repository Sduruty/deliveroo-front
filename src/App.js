import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Restaurant from "./components/Restaurant";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Cart from "./components/Cart";
const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        " https://sd-deliveroo-backend.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return isLoading ? (
    <p>En cours de chargement...Merci de patienter</p>
  ) : (
    <div className="container">
      <Header/>
      <Restaurant data={data.restaurant}/>
      <Menu data={data.categories}/><Cart/>
    </div>
  );
};

export default App;
