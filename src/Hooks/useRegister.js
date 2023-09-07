import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [info, setInfo] = useState(null);
  const navigate = useNavigate()
  const state = useLocation().state
  console.log(state)
  const register = (api, loginInfo) => {
    setIsLoading(true);

    fetch(`${api}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(loginInfo)
    })
      .then(res => res.json())
      .then(data => {
        setIsLoading(false);
        setInfo(data.loginInfo)
        setMessage(data.message);
        console.log(data);
        if (data.loginInfo && data.loginInfo.role === "teacher") {
          navigate("/teacher-dashboard")
        } else if (data.loginInfo && data.loginInfo.role === "student") {
          navigate("/student-dashboard")
        }
      })
      .catch(error => {
        setIsLoading(false);
        setMessage("An error occurred");
        console.error(error);
      });
  };
  if (message) {
    setTimeout(() => {
      setMessage("")
    }, 5000);
  }
  return { isLoading, message, register, info };
};
