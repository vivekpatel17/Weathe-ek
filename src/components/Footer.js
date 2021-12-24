import React from "react";
import classes from "./Footer.module.css";


export default function Footer() {
  const fullDate = new Date();
  const currentYear = fullDate.getFullYear();

  return (
    <footer className={classes.footer}>
      <p>Copyright {currentYear}</p>
    </footer>
  );
};