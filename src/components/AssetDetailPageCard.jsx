export default function AssetDetailsPageCard({ assetProp }) {
  const { id, description, imageUrl, name, ticker, tags, lastPrice, category } =
    assetProp;

  return (
    <div className="row g-0 anteprima">
      <div className="col-md-6 card-img-wrapper">
        <img
          src={`${imageUrl}.jpg`}
          className="card-img-top object-fit-cover fixed-height p-2 "
          alt={name}
        />
      </div>

      <div className="col-md-6">
        <div className="card-body">
          <h6 className="text-muted">{ticker}</h6>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <i>{description}</i>
          </p>
          <h6 className="fw-bold mb-2 mt-5">INFO</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span className="text-muted">Last price:</span>
              <span className="fw-bold text-success">$ {lastPrice}</span>
            </li>

            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span className="text-muted">Category:</span>
              <span className="fw-semibold text-uppercase">
                {category?.name ?? "-"}
              </span>
            </li>

            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span className="text-muted">Tag Count:</span>
              <span className="fw-semibold">{tags.length}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
