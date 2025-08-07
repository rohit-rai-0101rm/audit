import logo from "./logo.svg";
import "./App.css";
import SurveyList from "./components/SurveyLists";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
  useNavigate,
} from "react-router-dom";
import CreateTemplate from "./pages/CreateTemplate";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<CreateTemplate />} />
    </Routes>
  );
}

export default App;
