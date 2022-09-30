import { Link } from "react-router-dom";
import './Header.css'


const Header = (props) => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/aboutUs">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/receipts">Receipts</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;