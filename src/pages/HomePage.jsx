import AssetCard from "../components/AssetCard";
import axios from "axios";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedQuery(query);
  };

  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const endpoint = submittedQuery
      ? `http://localhost:8080/api/assets?name=${submittedQuery}`
      : `http://localhost:8080/api/assets`;
    axios
      .get(endpoint)
      .then((res) => {
        setAssets(res.data);
        console.log("data", res.data);
      })
      .catch((err) => {
        console.log("error fetch assets: ", err.message);
      });
  }, [submittedQuery]);

  return (
    <>
      {/* searchbar */}
      <div className="row mb-4">
        <div className="col-12 col-md-6 col-lg-4 ms-auto">
          <form className="d-flex" onSubmit={handleSubmit} role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Name or Ticker..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="row g-4">
        {assets.map((asset) => (
          <div key={asset.id} className=" col-12 col-md-6 col-lg-4">
            <AssetCard assetProp={asset} />
          </div>
        ))}
      </div>
    </>
  );
}
