import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Validation from "./validation/Validation";
import MainPage from "./main/index";
import AuthenticationPage from "./authentication/AuthenticationPage";
import AnnouncementList from "./validation/index";
import Announcements from "./announcement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<AuthenticationPage />} />
        </Route>
        <Route path="home" element={<MainPage />} />
        <Route path="validation" element={<Outlet />}>
          <Route index element={<AnnouncementList />} />
          <Route path=":id" element={<Validation />} />
        </Route>
        <Route path="announcements" element={<Outlet />}>
          <Route index element={<Announcements />} />
          <Route path=":id" element={<Validation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
