import React, { useState, useEffect } from "react";
import Homepage from "./Pages/Homepage";
import server from "../server/server.json";

const Page = () => {
  useEffect(() => {
    setSpecialOffer(server[0]);
    setProducts(server[1]);
  }, []);

  const [products, setProducts] = useState([]);
  const [specialOffer, setSpecialOffer] = useState([]);

  return (
    <div>
      <Homepage specialOffer={specialOffer.specialOffer} />
    </div>
  );
};

export default Page;
