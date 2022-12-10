import React, { useEffect } from "react";
import axios from "axios";

function LoginPage() {
  useEffect(() => {
    axios
      // .get("http://localhost:5000/api/hello")
      .get("/api/hello")
      .then((res) => console.log(res.data));
  }, []);

  return <div>LoginPage</div>;
}

export default LoginPage;
