const NotFoundPage = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="text-center text-dark mt-5">
        <h1 className="display-1 fw-bold ">404</h1>

        <p className="fs-2 fw-semibold mt-3 ">Page not found</p>

        <p className="text-secondary mt-3 mb-5">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <a
          href="/"
          className="btn btn-outline-dark rounded-pill px-4 py-2 fw-semibold"
        >
          Back to HomePage
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
