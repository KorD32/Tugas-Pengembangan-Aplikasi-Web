import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Grid,
} from "@mui/material";

// Mengimpor file CSS eksternal
import '../style/register.css';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section className="register-container">
        <div>
            <HeaderDesktop/>
        </div>
        <Container maxWidth="sm">
            <Box className="register-box">
                <Typography
                    variant="h4"
                    color="text.primary"
                    align="center"
                    gutterBottom
                >
                    Register
                </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                        type="email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        variant="outlined"
                        type="password"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                        type="tel"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                  fullWidth
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  variant="outlined"
                  multiline
                  rows={3}
                />
              </Grid>
            </Grid>
            <Box mt={3}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="register-button" 
              >
                Register
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
        <footer>
            <Footer/>
            <FooterCr/>
        </footer>
    </section>
  );
};

export default Register;
