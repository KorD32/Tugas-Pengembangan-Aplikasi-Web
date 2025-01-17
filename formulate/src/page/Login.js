import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/loginpage.css";
import { HeaderDesktop } from "../component/HeaderDesktop";
import { Footer } from "../component/FooterPart";
import { FooterCr } from "../component/FooterCr";

import axios from "axios";

export const Login = () => {
  const [id, setUserID] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/web/auth/login",
        {
          id,
          password,
        }
      );
      if(response.status === 200) {
        console.log("Login Successful", response.data);
        localStorage.setItem("loggedInStatus", 'true');
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id", response.data.id);  

        navigate("/home");
      } else {
        console.log("Login Failed", response.data);
        alert("Wrong password or ID");
      }
    } catch(error) {
      console.error(error);
      alert("Wrong password or ID");
    }
  };
  return (
    <div className="login">
      <header>
        <HeaderDesktop />
      </header>
      <main className="body-forum">
        <section className="container-forum">
          <form className="login-forum">
            <h2>Masuk ke akun mu</h2>
            <div className="input-container">
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
                name="email"
                onChange={(e) => setUserID(e.target.value)}
                placeholder="ID"
                required
              />
            </div>
            <div className="input-container">
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan Password"
                required
              />
            </div>
            <div className="reminder-buttom">
              <div className="reminder">
                <input
                  className="checkbox"
                  type="checkbox"
                  name="reminder"
                />
                <label>Reminder</label>
              </div>
              <div className="lost-password">
                <a href="lost-password">
                  <b>Lupa kata sandi?</b>
                </a>
              </div>
            </div>
            <button className="buttom-login" type="submit"
              onClick={submitLogin}>
              Masuk
            </button>
          </form>
        </section>
        <section className="middle-forum">
          <hr />
          <span>Atau Masuk Dengan</span>
          <hr />
        </section>
        <section className="buttom-forum">
          <div className="login-google">
            <img
              className="google-image"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
              alt="google-png"
            />
            <p>Google</p>
          </div>
          <div className="create-account">
            <p>
              Belum punya akun? <a href="create-account">Buat Akun Yuk!</a>
            </p>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
        <FooterCr />
      </footer>
    </div>
  );
};
