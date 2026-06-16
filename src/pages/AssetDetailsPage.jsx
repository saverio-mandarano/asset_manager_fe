import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AssetDetailsPageCard from "../components/AssetDetailPageCard";

export default function AssetDetailsPage() {
  const { id } = useParams();
  const [asset, setAsset] = useState(null);
  const endpoint = `http://localhost:8080/api/assets/${id}`;

  useEffect(() => {
    axios
      .get(endpoint)
      .then((res) => {
        setAsset(res.data);
      })
      .catch((err) => {
        console.log("error fetch asset details", err.message);
      });
  }, []);

  return (
    <div className="container">
      {asset ? (
        <>
          <section id="asset-details" className="card my-4 w-100">
            <AssetDetailsPageCard assetProp={asset} />
          </section>

          {/* search bar (se hai una lista associata, es. news / transactions / holdings) */}
          {/* <div className="input-group mb-3 mt-5">
            <input
              onChange={(e) => setInputData(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Search..."
            />

            <button className="btn btn-success" type="button">
              Cerca
            </button>
          </div> */}

          {/* lista filtrata (esempio: holdings / related items / transactions) */}
          {/* <div className="accordion mb-5" id="assetAccordion">
            {filteredData.map((item) => (
              <div key={item.id}> */}
          {/* sostituisci con il tuo componente reale */}
          {/* <div className="card p-2 mb-2">{item.name}</div>
              </div>
            ))}
          </div> */}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
