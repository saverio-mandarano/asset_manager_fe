import axios from "axios";
import { useEffect, useState } from "react";

export default function DefaultLayout() {
  const [apiCall, setApiCall] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/assets")
      .then((res) => {
        setApiCall(res.data);
        console.log("dati", res.data);
      })
      .catch((err) => {
        console.log("errore home page api call", err.message);
      });
  }, []);
  return (
    <div className="container mt-5">
      <button className="btn btn-primary">
        Bootstrap funziona "siamo in DefaultLayout"
      </button>
    </div>
  );
}
