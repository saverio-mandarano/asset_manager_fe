const Footer = () => {
  return (
    <footer className="mt-auto py-4 mx-5 ">
      <div className="row align-items-center">
        <div className="col-md-6 mb-2">
          <span className="fw-semibold text-dark">Asset_Manager_FE</span>
          <span className="text-muted ms-3 sm-text-custom">
            &copy; 2026 - Informational purposes only, don't try this at home.
          </span>
        </div>
        <div className="col-md-6 text-md-end">
          <a href="/" className="text-muted sm-text-custom me-3">
            About
          </a>
          <a href="/" className="text-muted sm-text-custom me-3">
            Privacy
          </a>
          <a
            href="https://github.com/saverio-mandarano"
            className="text-muted sm-text-custom me-3"
          >
            Contacts
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
