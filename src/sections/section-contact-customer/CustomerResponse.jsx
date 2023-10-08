import React from "react";
import style from "./customerresponse.module.css";
import theme from "@/app/theme";
import Image from "next/image";

import Customers from "../../../public/contact-customers.png";
import Customer from "../../../public/customer-image.svg";

function CustomerResponse() {
  return (
    <div style={{ borderColor: theme.grey }} className={style.container}>
      <h2 className={style.header}>Helping business grow one step at a time</h2>
      <div className={style.imageContainer}>
        <Image
          className={style.customersImage}
          src={Customers}
          alt={"Necti Customers"}
        />
      </div>
      <h3 style={{ color: theme.darkGrey }} className={style.customerQuote}>
        “Necti helped me grow my business online presence. We have been able to
        grow tremendously due to necti.”
      </h3>
      <div className={style.customerInfoContainer}>
        <Image
          className={style.customerImage}
          src={Customer}
          alt={"Business Owner"}
        />
        <div>
          <p style={{ color: theme.black }} className={style.customerName}>
            Andres Guzman
          </p>
          <p style={{ color: theme.darkGrey }} className={style.customerTitle}>
            Owner, Impact Pest Pros
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomerResponse;
