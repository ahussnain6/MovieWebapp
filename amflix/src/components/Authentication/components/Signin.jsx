import React, { useState } from "react";
import "./style/signin.css";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const [datas, setDatas] = useState([]);
  const getdata = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const setdata = (e) => {
    e.preventDefault();
    const newData = { ...data, id: new Date().getTime().toString() };
    setDatas([...datas, newData]);
    navigate("/");
  };
  return (
    <>
      <div className="sign">
        <div className="page">
          <form onSubmit={setdata} className="for">
            <h1 className="hp" style={{ textAlign: "center", color: "white" }}>
              SIGN-UP PAGE
            </h1>
            <input
              type="text"
              className="input"
              onChange={getdata}
              autoComplete="off"
              placeholder="Enter Your Name"
              value={data.username}
              name="username"
            />
            <input
              type="text"
              autoComplete="off"
              className="input"
              onChange={getdata}
              placeholder="Enter Your Email"
              value={data.email}
              name="email"
            />
            <input
              type="text"
              className="input"
              onChange={getdata}
              placeholder="Enter Your Password"
              value={data.password}
              name="password"
              autoComplete="off"
            />
            <input
              type="text"
              className="input"
              onChange={getdata}
              placeholder="Enter Your Phone"
              autoComplete="off"
              value={data.phone}
              name="phone"
            />
            <button type="submit" className="bt">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
