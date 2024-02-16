import React from "react";

export default function Article({ item, icon, avatar }) {
  const { id, title, abstract, image } = item;
  return (
    <div className="">
      <div
        key={id}
        style={{
          padding: "0px 160px 0px 160px",
          gap: "45px",
          fontFamily: "Inter",
          letterSpacing: "0em",
          textAlign: "left",
        }}
      >
        <div
          style={{ height: "310px" }}
          className="d-flex justify-content-between border-bottom border-2 mb-5"
        >
          <div
            style={{ width: "755px" }}
            className="d-flex flex-column justify-content-around"
          >
            <div
              style={{ fontSize: "14px" }}
              className="d-flex justify-content-between align-items-start w-50  mt-0"
            >
              <img src={avatar.avatar} alt="" />
              <p className="">Authors name</p>
              <p className="text-secondary">in</p>
              <p>Topics name</p>
              <p>·</p>
              <p></p>
            </div>
            <p style={{ width: "693px" }}>
              <h4
                style={{
                  fontFamily: "Inter",
                  fontSize: "28px",
                  fontWeight: "700",
                }}
              >
                {title}
              </h4>
              <p style={{ fontSize: "16px" }}>{abstract}</p>
            </p>
            <div
              style={{
                width: "755px",
                gap: "325px",
                fontFamily: "Inter",
                fontSize: "14px",
              }}
              className="d-flex justify-content-between align-items-baseline "
            >
              <div
                style={{ width: "400px" }}
                className="d-flex justify-content-between g-5 align-items-baseline"
              >
                <button
                  style={{ fontSize: "14px" }}
                  className="btn btn-secondary btn-lg rounded-pill"
                >
                  Java Script
                </button>
                <p>12 min read</p>
                <p>Selected to you</p>
              </div>
              <div
                style={{ width: "100px", gap: "14px" }}
                className="d-flex justify-content-between"
              >
                <img src={icon.icon} alt="Square" />
                <img src={icon.icon} alt="Square" />
                <img src={icon.icon} alt="Square" />
              </div>
            </div>
          </div>
          <img
            style={{ height: "265px", borderRadius: "4px" }}
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
