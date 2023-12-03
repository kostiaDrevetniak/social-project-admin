import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Validation from "./validation/Validation";
import MainPage from "./main/index";
import AuthenticationPage from "./authentication/AuthenticationPage";
import AnnouncementList from "./validation/index";
import Announcements from "./announcement";
import EditAnnouncement from "./announcement/EditAnnouncement";
import CreateAnnouncement from "./announcement/CreateAnnouncement";
import CompaniesList from "./company";
import EditCompany from "./company/EditCompany";
import CreateCompany from "./company/CreateCompany";

function App() {
  const isAuthenticated = window.sessionStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="home" element={<MainPage />} />
            <Route path="validation" element={<Outlet />}>
              <Route index element={<AnnouncementList />} />
              <Route path=":id" element={<Validation />} />
            </Route>
            <Route path="announcements" element={<Outlet />}>
              <Route index element={<Announcements />} />
              <Route path=":id" element={<EditAnnouncement />} />
              <Route path="create" element={<CreateAnnouncement />} />
            </Route>
            <Route path="companies" element={<Outlet />}>
              <Route index element={<CompaniesList />} />
              <Route path=":id" element={<EditCompany />} />
              <Route path="create" element={<CreateCompany />} />
            </Route>
            <Route path="*" element={<Navigate to={"/home"} />} />
          </>
        ) : (
          <>
            <Route path="/" element={<AuthenticationPage />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
