import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Validation from "./validation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Validation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
