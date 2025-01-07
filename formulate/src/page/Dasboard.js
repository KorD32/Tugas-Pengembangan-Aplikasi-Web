import { FooterCr } from "../component/FooterCr"
import { Footer } from "../component/FooterPart"
import { HeaderDesktop } from "../component/HeaderDesktop"
import "../style/dashboard.css"



export const Dashboard = () => {
    return(
        <div className="dashboard">
            <header>
                <HeaderDesktop/>
            </header>
            <main className="content-container">
                <section className="section-dashboard-1">
                    <div className="background-image">
                        <h1 className="brand">
                            FORMULATE 
                        </h1>
                    </div>
                    <div className="formulate-plan">
                        <h1 className="brand">FORMULATE</h1>
                        <p>Formulate adalah solusi inovatif untuk perawatan diri yang dirancang untuk membantu anda mencapai penampilan terbaik dengan cara yang menyenangkan dan mudah. Dengan pendekatan berbasis data dan personalisasi, kami mengajak Anda untuk mengeksplorasi dunia perawatan diri dengan cara yang belum pernah Anda alami sebelumnya.</p>
                    </div>
                </section>
            </main>
            <footer>
                <Footer/>
                <FooterCr/>
            </footer>
        </div>
    )
}