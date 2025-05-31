import React from "react";
import "../Style.css";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import plan1 from "../assets/plan1.jpg";
import plan2 from "../assets/plan2.jpg";
import plan3 from "../assets/plan3.jpg";

function Plans() {
  return (
    <div className="plans">
      <Cart
        title={"Plan Básico"}
        subtitle={"300Mbps"}
        content={
          "Fibra optica hasta la puerta de tu casa!\nIncluye WiFi 6 gratis! \n No pagues por la instalación! \nConsigue meses gratis con nuestras promociones!"
        }
        price={"$16.52/"}
        subprice={"mes + iva"}
        image={plan1}
      />
      <Cart
        title={"Plan Completo"}
        subtitle={"500Mbps"}
        content={
          "Fibra optica hasta la puerta de tu casa!\nIncluye WiFi 6 gratis! \n No pagues por la instalación! \nConsigue meses gratis con nuestras promociones!"
        }
        price={"$21.74/"}
        subprice={"mes + iva"}
        image={plan2}
      />
      <Cart
        title={"Plan Pleno"}
        subtitle={"800Mbps"}
        content={
          "Fibra optica hasta la puerta de tu casa!\nIncluye WiFi 6 gratis! \n No pagues por la instalación! \nConsigue meses gratis con nuestras promociones!"
        }
        price={"$26.96/"}
        subprice={"mes + iva"}
        image={plan3}
      />
    </div>
  );
}

export default Plans;
