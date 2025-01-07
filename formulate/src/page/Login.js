import { useState, useEffect } from "react";
import "../style/loginpage.css"
import { HeaderDesktop } from "../component/HeaderDesktop";
import { Footer } from "../component/FooterPart";
import { FooterCr } from "../component/FooterCr";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [reminder, setReminder] = useState(false);

    useEffect(() => {
        const savedEmail = localStorage.getItem("email");
        const savedReminder = localStorage.getItem("reminder") === "true";
        if (savedEmail && savedReminder) {
            setEmail(savedEmail);
            setReminder(savedReminder);
        }
    }, []);

    const submit = (e) => {
        e.preventDefault();

        if (reminder) {
            localStorage.setItem("email", email);
            localStorage.setItem("reminder", reminder);
        } else {
            localStorage.removeItem("email");
            localStorage.removeItem("reminder");
        }

        console.log("Login berhasil");
    };

    return (
        <div className="login">
            <header>
                <HeaderDesktop />
            </header>
            <main className="body-forum">
                <section className="container-forum">
                    <form
                        className="login-forum"
                        onSubmit={submit}
                    >
                        <h2>Masuk ke akun mu</h2>
                        <div className="input-container"> 
                            <label className="label">Email</label>
                            <input
                                className="input"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Masukkan Email"
                                required
                            />
                        </div>
                        <div className="input-container"> 
                            <label className="label">Password</label>
                            <input
                                className="input"
                                type="password"
                                value={password}
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
                                    checked={reminder}
                                    onChange={(e) => setReminder(e.target.checked)} 
                                />
                                <label>
                                    Reminder
                                </label>
                            </div>
                            <div className="lost-password"> 
                                <a href="lost-password"><b>Lupa kata sandi?</b></a>
                            </div>
                        </div>
                        <button className="buttom-login" type="submit">Masuk</button>
                    </form>
                </section>
                <section className="middle-forum"> 
                    <hr/>
                    <span>Atau Masuk Dengan</span>
                    <hr/>
                </section>
                <section className="buttom-forum">
                    <div className="login-google">
                        <img className="google-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" alt="google-png"/>
                        <p>Google</p>
                    </div>
                    <div className="create-account">
                        <p>Belum punya akun? <a href="create-account">Buat Akun Yuk!</a></p>
                    </div>
                </section>
            </main>
            <footer>
                <Footer/>
                <FooterCr/>
            </footer>
        </div>
    );
};
