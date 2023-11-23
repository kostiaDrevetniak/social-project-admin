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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<AuthentificationPage />} />
        </Route>
        <Route path="/main" element={<Outlet />}>
          <Route index element={<MainPage />}/>
        </Route>
        <Route path="/validation" element={<Outlet />}>
          <Route index element={<Validation />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
