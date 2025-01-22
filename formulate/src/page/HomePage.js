import { ListBanner } from "../component/BannerSection"
import { HeaderHome } from "../component/HeaderHome"
import { ListProductHmC } from "../component/ProductSectionHmC"
import { ListProductHmF } from "../component/ProductSectionHmF"

import { ListProductHmS } from "../component/ProductSectionHmS"



export const HomePage = () => {
    return(
        <div>
            <HeaderHome />
            <ListBanner/>
            <section>
            <h1 style={{padding: "20px", marginBottom: "-75px"}}>Kategori</h1>
            <ListProductHmS/>
            </section>
            <section>
            <h1 style={{padding: "20px", marginBottom: "-75px"}}>Cosmetic</h1>
            <ListProductHmC/>
            </section>
            <section>
            <h1 style={{padding: "20px", marginBottom: "-75px"}}>Fashion</h1>
            <ListProductHmF/>
            </section>
            
        </div>
    )
}
