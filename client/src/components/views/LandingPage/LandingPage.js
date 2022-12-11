import React, { useEffect } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      // .get("http://localhost:5000/api/hello")
      .get("/api/hello")
      .then((res) => console.log(res));
  }, []);

  const onClickHandler = async () => {
    const rst = await axios.get("/api/users/logout");
    console.log("로그아웃:", rst.data);
    if (rst.data.success) {
      navigate("/login");
    } else {
      alert("로그아웃 실패");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h2>시작 페이지</h2>

      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  );
}

export default LandingPage;
