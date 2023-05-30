import ColorSchemesExample from "./ColorSchemesExample"
import Carousel from './carousel'
import Card1 from './card'
import Footer from './Footer'

function Menu (){
    return(
        <div>
            <ColorSchemesExample/><br/>
            <Carousel/><br/>
            <div className="row">
                <Card1/>
            </div>
            <Footer/>
        </div>
    )
}

export default Menu