//import componenti gestione rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import layout
import DefaultLayout from "./layouts/DefaultLayout";

//import pages
import HomePage from "./pages/HomePage";
import AssetDetailsPage from "./pages/AssetDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/assets" element={<HomePage />} />
          <Route path="/assets/:id" element={<AssetDetailsPage />} />
          <Route path="*" Component={NotFoundPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
