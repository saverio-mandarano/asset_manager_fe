// export default function AssetCard(props) {
// const { id, description, image_url, name, ticker } = props.assetProp;
// }

import { Link } from "react-router-dom";

export default function AssetCard({ assetProp }) {
  const { id, description, imageUrl, name, ticker } = assetProp;

  return (
    <Link to={`assets/${id}`}>
      <div className="card h-100">
        <h6 className="text-muted ">{ticker}</h6>
        <div className="card-img-wrapper">
          <img src={imageUrl} className="card-img-top" alt={name} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <i>{description}</i>
          </p>
        </div>
      </div>
    </Link>
  );
}
