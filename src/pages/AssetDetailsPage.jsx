import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AssetDetailsPageCard from "../components/AssetDetailPageCard";
import AssetDetailsPageAccordion from "../components/AssetDetailPageAccordion";

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

          <section id="asset-linked-tags" className="card my-4">
            <div className="card-body">
              <h6 className="fw-bold mb-3">Linked Tags</h6>
              <div className="accordion" id="tagsAccordion">
                {/* solo se tag esiste e non è null */}
                {asset.tags?.map((tag) => (
                  <AssetDetailsPageAccordion key={tag.id} tagProp={tag} />
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
