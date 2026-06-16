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
          <section id="asset-details" className="card my-4">
            <AssetDetailsPageCard assetProp={asset} />
          </section>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
