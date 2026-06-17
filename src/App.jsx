//import componenti gestione rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import layout
import DefaultLayout from "./layouts/DefaultLayouts";

//import pages
import HomePage from "./pages/HomePage";
import AssetDetailsPage from "./pages/AssetDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/assets/:id" element={<AssetDetailsPage />} />
        <Route path="*" Component={NotFoundPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
