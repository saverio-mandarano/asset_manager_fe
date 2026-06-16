import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayouts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />} />
      </Routes>
    </>
  );
}

export default App;
