import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Validation from "./validation";
import MainPage from "./main";
import AuthentificationPage from "./authentication/AuthentificationPage";
import AnouncmentList from "./validation/AnouncmentList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<AuthentificationPage />} />
        </Route>
        <Route path="main" element={<MainPage />}/>
        <Route path="validation" element={<Outlet />}>
          <Route index element={<AnouncmentList />}/>
          <Route path=":id" element={<Validation/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
