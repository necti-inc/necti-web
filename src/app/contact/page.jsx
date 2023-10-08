import React from "react";
import styles from "./page.module.css";
import SectionContactForm from "@/sections/section-contact-form/SectionContactForm";
import CustomerResponse from "@/sections/section-contact-customer/CustomerResponse";

const Contact = () => {
  return (
    <div>
      <SectionContactForm />
      <CustomerResponse />
    </div>
  );
};

export default Contact;
