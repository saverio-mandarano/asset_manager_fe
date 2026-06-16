import axios from "axios";
import { useEffect, useState } from "react";

export default function DefaultLayout() {
  return (
    <div className="container mt-5">
      <button className="btn btn-primary">
        Bootstrap funziona "siamo in DefaultLayout"
      </button>
    </div>
  );
}
