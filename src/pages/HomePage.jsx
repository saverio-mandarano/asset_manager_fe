import AssetCard from "../components/AssetCard";
import axios from "axios";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedQuery(query);
    setQuery("");
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

  const sortedAssets = [...assets].sort((a, b) => {
    //creo copia di assets per non modificare l'originale usando il sort
    if (sortOrder === "asc") return a.name.localeCompare(b.name);
    if (sortOrder === "desc") return b.name.localeCompare(a.name);
    return 0; // sorteOrder parte vuoto, dunque gestisco la casistica, nessun sort avviene
  });

  return (
    <>
      <div className="row mb-4">
        <div className="col-12 col-md-6 col-lg-4">
          <select
            className="form-select mb-3 "
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="" disabled>
              Select by
            </option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>
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
        {sortedAssets.length > 0 ? (
          sortedAssets.map((asset) => (
            <div key={asset.id} className=" col-12 col-md-6 col-lg-4">
              <AssetCard assetProp={asset} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <div className="alert alert-warning">
              No assets found for this search.
            </div>
          </div>
        )}
      </div>
    </>
  );
}
