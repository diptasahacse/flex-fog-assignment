import Header from "./components/Header/Header";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>


    </div>
  );
}

export default App;
