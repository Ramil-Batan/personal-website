import PapaPic from "./pics/papa.png"
import facebookLogo from "./pics/facebook.svg"
import tiktokLogo from "./pics/tiktok.svg"

export function MainContent(){
    return(
        <>
        <div className="main--div">
            <div className="conDiv">
                <h1 className="main--intro">Hello I'm Ramil</h1>
                <h2 className="main--smallDes">Security Guard / Content Creator</h2>
                <p className="main--para">Your trusted companion in the world of security. As a dedicated security guard and content creator, I'm thrilled to share my knowledge and experiences with you. Join me as we delve into the art of safeguarding, mastering situational awareness, and honing the skills that keep our communities safe. Together, let's learn, grow, and make a positive impact in the realm of security. Welcome aboard!"</p>
            </div>
            <div className="picDiv">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <img src={PapaPic} alt="papa" className="pic"/>
            </div>
        </div>

            <hr/>
            <Footer/>
        </>
    )
}

export function Footer(){
    return(
        <footer>
            <div className="indexing">
                <h2 className="footer-label">Phone</h2>
                <p className="item">+639367300419 | +639380324134</p>
                <h2 className="footer-label">Email</h2>
                <p className="item">ramilbatan1471@gmail.com</p>
                <h2 className="footer-label">Follow Me</h2>
                <div className="item">
                    <a href="https://web.facebook.com/ramil.batan.9" target="_blank">
                        <img src={facebookLogo} width={30} className="logo"/>
                    </a>
                    <a href="https://www.tiktok.com/@ramskietan" target="_blank">
                        <img src={tiktokLogo} width={25} className="logo"/>
                    </a>
                </div>
            </div>
            <br/><br/>
        </footer>
    )
}