import { ListBanner } from "../component/BannerSection"
import { HeaderHome } from "../component/HeaderHome"
import { HomeProduct } from "../component/HomeProduct"
import { HomeProduct1 } from "../component/HomeProduct1"
import { HomeProduct2 } from "../component/HomeProduct2"



export const HomePage = () => {
    return(
        <div>
            <HeaderHome />
            <ListBanner/>
            <section>
            <h1 style={{padding: "20px", marginBottom: "-75px"}}>Kategori</h1>
            <HomeProduct />
            </section>
            <section>
            <h1 style={{padding: "20px", marginBottom: "-75px"}}>Cosmetic</h1>
            <HomeProduct1 />
            </section>
            <section>
            <h1 style={{padding: "20px", marginBottom: "-75px"}}>Fashion</h1>
            <HomeProduct2 />
            </section>
            
        </div>
    )
}
