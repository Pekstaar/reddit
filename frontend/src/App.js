import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import New from "./screens/New";
import Register from "./screens/Register";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
