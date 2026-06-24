export default function WelcomePage() {
  return (
    <div class="container my-5 d-flex flex-column flex-grow-1 bg-white">
      <section class="d-flex align-items-center justify-content-center flex-grow-1 py-5">
        <div className="text-center col-12 col-md-8 col-lg-6">
          <h1 className="display-4 fw-bold mb-3">Welcome</h1>

          <p className="lead mb-4 text-secondary">
            Explore our assets, including their details, categories, and related
            tags.{" "}
          </p>

          <div className="d-flex gap-3 justify-content-center">
            <form action="/assets" method="get">
              <button className="btn btn-outline-primary btn-lg">
                DISCOVER
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
