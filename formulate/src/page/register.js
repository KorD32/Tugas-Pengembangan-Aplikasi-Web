import React, { useState } from "react";
import "../style/register.css";
import { HeaderDesktop } from "../component/HeaderDesktop";
import { Footer } from "../component/FooterPart";
import { FooterCr } from "../component/FooterCr";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";


const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone_number: "",
    address: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });
  
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
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
    
    //Backend
    try {
      const response = await axios.post("http://localhost:3000/web/users/register", formData);
      if (response.status === 201) {
        console.log("Register Berhasil", response.data);
        alert("Register Berhasil");
        navigate("/login");
      }
    } catch (error) {
      console.error("Register Gagal",error);
      alert("Register Gagal");
    }
    //Backend

    setError({
      email: "",
      password: "",
    });

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
            <label className="label">Username</label>
            <TextField
              variant="outlined"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              fullWidth
            />
          </div>
          <div className="input-container">
            <label className="label">Email</label>
            <TextField
              variant="outlined"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
              error={!!error.email}
              helperText={error.email}
            />
          </div>
          <div className="input-container">
            <label className="label">Password</label>
            <TextField
              variant="outlined"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              fullWidth
              error={!!error.password}
              helperText={error.password}
            />
          </div>
          <div className="input-container">
            <label className="label">Phone</label>
            <TextField
              variant="outlined"
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
              fullWidth
            />
          </div>
          <div className="input-container">
            <label className="label">Address</label>
            <TextField
              variant="outlined"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              fullWidth
              multiline
              rows={4}
            />
          </div>
          <Button type="submit" variant="contained" color="primary" className="register-button" fullWidth
          sx={{
            backgroundColor: "black",
            fontWeight: "bold"
          }}>
            Register
          </Button>
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
