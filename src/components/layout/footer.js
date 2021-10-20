import {Link} from 'react-router-dom';
import "./tooltip.css"
const Footer = () => {
    return (
        <footer>
            <form>
                <p>Recieve Exclusive promotions ,private sales and news</p>
                <input type="email" placeholder="Enter your e-mail"/>
                <button>subscribe</button>
            </form>
            <div className="flex language-part">
                <img alt="earth" src="img/globe.png" />
                <span>USA | English(USA) </span>
                <img alt="arrow" src="img/next.png"/>
            </div>
            <div className="social">
                <Link to="/" className="icon facebook"></Link>
                <Link to="/" className="icon twitter"></Link>
                <Link to="/" className="icon github"></Link>
                <Link to="/" className="icon dribble"></Link>
                <Link to="/" className="icon pinterest"></Link>
            </div>
        </footer>
    );
}
 
export default Footer;