import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/loginpage.css";
import { HeaderDesktop } from "../component/HeaderDesktop";
import { Footer } from "../component/FooterPart";
import { FooterCr } from "../component/FooterCr";

export const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    reminder: false,
  });
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const conditionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return conditionEmail.test(email);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!validateEmail(form.email)) {
      alert("Email tidak valid. Pastikan menggunakan format email yang benar (contoh: example@gmail.com).");
      return;
    }

    if (form.password.length < 6) {
      alert("Password minimal harus 6 karakter.");
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        console.log("Login successful:", data);
        navigate("/home");
      } else {
        alert(data.message || "Email atau password salah.");
      }
    } catch (error) {
      alert("Terjadi kesalahan saat login, coba lagi.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="login">
      <header>
        <HeaderDesktop />
      </header>
      <main className="body-forum">
        <section className="container-forum">
          <form className="login-forum" onSubmit={submit}>
            <h2>Masuk ke akun mu</h2>
            <div className="input-container">
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Masukkan Email"
                required
              />
            </div>
            <div className="input-container">
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
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
                  checked={form.reminder}
                  onChange={handleChange}
                />
                <label>Reminder</label>
              </div>
              <div className="lost-password">
                <a href="lost-password">
                  <b>Lupa kata sandi?</b>
                </a>
              </div>
            </div>
            <button className="buttom-login" type="submit">
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
