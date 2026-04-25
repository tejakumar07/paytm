import { AppBar } from "../Components/AppBar";
import { InputBox } from "../Components/InputBox";
import { ButtonComponent } from "../Components/ButtonComponent";
import { UsersComponent } from "../Components/UsersComponent";
import { useState, useEffect } from "react";
import axios from "axios";

export function Dashboard() {
  const [filter, setFilter] = useState("");
  const [balance, setBalance] = useState("");

  useEffect(() => {
    const balanceFetching = async () => {
      const response = await axios.get(
        "https://paytm-lmm3.onrender.com/sapi/v1/account/balance",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        },
      );
      setBalance(response.data.msg);
    };
    balanceFetching();
  }, []);

  return (
    <div>
      <div>
        <AppBar />
      </div>
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
