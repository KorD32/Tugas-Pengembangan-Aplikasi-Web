import React, { useState } from "react";
import "../style/register.css";
import { HeaderDesktop } from "../component/HeaderDesktop";
import { Footer } from "../component/FooterPart";
import { FooterCr } from "../component/FooterCr";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setError((prev) => ({
        ...prev,
        email: "Email tidak valid",
      }));
      return;
    }

    if (!validatePassword(formData.password)) {
      setError((prev) => ({
        ...prev,
        password: "Password harus memiliki minimal 6 karakter",
      }));
      return;
    }

    setError({
      email: "",
      password: "",
    });

    const isConfirmed = window.confirm("Apakah data yang Anda isi sudah benar?");
    if (isConfirmed) {
      console.log("Form Data Submitted:", formData);
    }
  };

  return (
    <section className="register-container">
      <div>
        <HeaderDesktop />
      </div>
      <div className="register-box">
        <h2 className="register-title">Daftar dengan Email</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {error.email && <div className="error-message">{error.email}</div>}
          </div>
          <div className="input-container">
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {error.password && <div className="error-message">{error.password}</div>}
          </div>
          <div className="input-container">
            <label className="label">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label className="label">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        <p className="terms-text">
          Dengan mengklik Daftar, Anda menyetujui <a href="/terms" className="terms-link">Syarat</a> dan <a href="/terms" className="terms-link">ketentuan</a> kami.
        </p>
      </div>
      <footer>
        <Footer />
        <FooterCr />
      </footer>
    </section>
  );
};

export default Register;
