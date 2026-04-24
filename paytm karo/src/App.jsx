import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login.jsx";
import { SignUp } from "./pages/Signup.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Send } from "./pages/Send.jsx";
import { HomePage } from "./pages/HomePage.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/send"} element={<Send />} />
          <Route path={""} element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
