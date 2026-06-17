import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import NotFoundAsset from "./NotFoundAsset";
import AssetDetailsPageCard from "../components/AssetDetailPageCard";
import AssetDetailsPageAccordion from "../components/AssetDetailPageAccordion";

export default function AssetDetailsPage() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [asset, setAsset] = useState(null);

  useEffect(() => {
    //al cambio id e al montaggio componente ---reset var di stato
    setLoading(true);
    setNotFound(false);
    setAsset(null);

    axios
      .get(`http://localhost:8080/api/assets/${id}`)
      .then((res) => {
        setAsset(res.data);
      })
      .catch((err) => {
        console.log("error fetch asset details", err.message);
        setNotFound(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (notFound) return <NotFoundAsset />;

  return (
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
  );
}
