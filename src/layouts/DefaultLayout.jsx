import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="container my-5 d-flex flex-column">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
