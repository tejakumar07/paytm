import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login.jsx";
import { SignUp } from "./pages/Signup.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Send } from "./pages/Send.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/send"} element={<Send />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
