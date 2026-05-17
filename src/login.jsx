//login.jsx

import React, { useState } from "react";
import "./login.css";

export default function Login() {
	const [id, setId] = useState(""); // id: 초기값, setId: id값 변경 함수, "": 초기값(빈 문자열)
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
    console.log("ID:", id, "PASSWORD:", password, "NAME:", name, "PHONE NUMBER", phone); // 입력된 id와 password를 콘솔에 출력
  };
  
  return (
    <div className="login-wrapper">
      <div className="login-page">
        <h1 className="login-title">LOGIN</h1>
        <form className="login-form-wrapper" onSubmit={handleSubmit}>
          <div className="login-form">
            <div className="login-id-password">
              <label className="login-label" htmlFor="id">
                ID
              </label>
              <input
                id="id"
                type="text"
                className="login-input"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>

            <div className="login-id-password">
              <label className="login-label" htmlFor="password">
                PASSWORD
              </label>
              <input
                id="password"
                type="password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="login-id-password">
              <label className="login-label" htmlFor="password">
                NAME
              </label>
              <input
                id="name"
                type="text"
                className="login-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="login-id-password">
              <label className="login-label" htmlFor="password">
                PHONE NUMBER
              </label>
              <input
                id="phone"
                type="tel"
                className="login-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

          </div>

          <button type="submit" className="login-button">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}