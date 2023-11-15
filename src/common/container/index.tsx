"use client";
import React, { ReactNode } from "react";
import "./index.scss";

interface Params {
  children: ReactNode;
}

const Container = ({ children }: Params) => {
  return (
    <div className="container">
      <div className="container-wrap">{children}</div>
    </div>
  );
};

export default Container;
