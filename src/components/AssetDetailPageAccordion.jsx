export default function AssetDetailsPageAccordion({ tagProp }) {
  const { id, description, name, type } = tagProp;
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading-${id}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${id}`}
          aria-expanded="false"
          aria-controls={`collapse-${id}`}
        >
          {name.toUpperCase()}
        </button>
      </h2>

      <div
        id={`collapse-${id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading-${id}`}
        data-bs-parent="#tagsAccordion"
      >
        <div className="accordion-body">
          <p className="mb-1">
            <strong>Type:</strong> {type.toUpperCase()}
          </p>
          <p className="text-muted mb-0">{description}</p>
        </div>
      </div>
    </div>
  );
}
