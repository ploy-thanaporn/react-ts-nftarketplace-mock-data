import { Route, Routes } from "react-router-dom";
import CollectedList from "./components/profile-page/CollectedList";
import CollectedPage from "./components/profile-page/CollectedPage";
import Home from "./components/Home";
import CreatedPage from "./components/profile-page/CreatedPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="collected" element={<CollectedPage />}>
        <Route path="collection-list/:idArtist" element={<CollectedList />} />
        <Route path="created-section/:idArtist" element={<CreatedPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
