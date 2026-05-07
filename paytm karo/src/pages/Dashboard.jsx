import { AppBar } from "../Components/AppBar";
import { InputBox } from "../Components/InputBox";
import { ButtonComponent } from "../Components/ButtonComponent";
import { UsersComponent } from "../Components/UsersComponent";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export function Dashboard() {
  const [filter, setFilter] = useState("");
  const [balance, setBalance] = useState("");
  const [fullName, setFullName] = useState("");
  const [balanceError, setBalanceError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedFirstName = localStorage.getItem("firstName") || "";
    const storedLastName = localStorage.getItem("lastName") || "";

    setFullName([storedFirstName, storedLastName].filter(Boolean).join(" "));

    if (!token) {
      navigate("/login");
      return;
    }

    const loadDashboardData = async () => {
      try {
        setBalanceError("");
        const balanceResponse = await axios.get(
          "https://paytm-lmm3.onrender.com/sapi/v1/account/balance",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          },
        );

        setBalance(balanceResponse.data.msg);
      } catch (error) {
        setBalanceError(
          error?.response?.data?.msg ||
            "Unable to load your balance right now.",
        );
      }
    };
    loadDashboardData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    navigate("/login");
  };

  return (
    <div>
      <div>
        <AppBar fullName={fullName} onLogout={handleLogout} />
      </div>
      {location.state?.message ? (
        <div className="mx-6 mt-4 rounded-md bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
          {location.state.message}
        </div>
      ) : null}
      {balanceError ? (
        <div className="mx-6 mt-4 rounded-md bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {balanceError}
        </div>
      ) : null}
      <div className="font-bold text-blue-600 px-6.5">
        Your Balance {balance}
      </div>
      <div className="px-6.5 mt-4">
        <InputBox
          value1={"Users"}
          value2={"Search Users..."}
          value3={"text"}
          value4={(e) => {
            setFilter(e.target.value);
          }}
        />
      </div>
      <UsersComponent filter={filter} />
    </div>
  );
}
