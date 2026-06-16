import AssetCard from "../components/AssetCard";
import axios from "axios";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [assets, setAssets] = useState([]);
  const endpoint = "http://localhost:8080/api/assets";

  useEffect(() => {
    axios
      .get(endpoint)
      .then((res) => {
        setAssets(res.data);
        console.log("data", res.data);
      })
      .catch((err) => {
        console.log("errore home page api call: ", err.message);
      });
  }, []);

  return (
    <div className="container my-5">
      <div className="row g-4">
        {assets.map((asset) => (
          <div key={asset.id} className=" col-12 col-md-6 col-lg-4">
            <AssetCard assetProp={asset} />
          </div>
        ))}
      </div>
    </div>
  );
}
