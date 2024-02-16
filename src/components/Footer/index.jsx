import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Footer() {
  return (
    <div
      style={{
        padding: "778px 160px 32px 160px",
        height: "918px",
        gap: "32px",
        fontFamily: "Inter",
        fontSize: "14px",
        fontWeight: "500",
        lineHeight: "18px",
        letterSpacing: "0em",
        textAlign: "center",
        color: "black",
      }}
      className="d-flex flex-column align-items-end"
    >
      <div className="">
        Credits: photos from{" "}
        <a
          href="https://unsplash.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unsplash.com
        </a>
        , icons from{" "}
        <a href="https://icons8.ru/" target="_blank" rel="noopener noreferrer">
          Icons8
        </a>
        , graphics from{" "}
        <a
          href="https://craftwork.design/"
          target="_blank"
          rel="noopener noreferrer"
        >
          craftwork.design
        </a>
        , font Kanit from{" "}
        <a
          href="https://fonts.google.com/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          fonts.google
        </a>
        .
      </div>
      <div className="">Made with ✨❤️ at nFactorial in 2022.</div>
    </div>
  );
}
