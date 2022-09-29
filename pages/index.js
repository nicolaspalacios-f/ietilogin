import React, { useState, useEffect } from "react";
import Router from "next/router";

export default function App() {
  useEffect(() => {
    Router.push("/signin");
  }, []);
  return <></>;
}
