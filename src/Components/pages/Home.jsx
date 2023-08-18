import { Link } from "react-router-dom";
import Nav from "../pageComponents/Nav";
import "../styles/Home.css"; 
import Footer from "../pageComponents/Footer";

export default function Home() {
    return (
        <div className="home-container">
            <Nav />
            <div className="content">
                <h1>Pagina Principal</h1>
                <Link to='/login'>Login</Link>
                <br />
                <Link to='/register'>Register</Link>
            </div>
            <Footer />
        </div>
    );
}
