import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
export default function TOC() {
    // Referenced the following page to learn about constants and useLocation()
    // https://stackoverflow.com/questions/72079923/how-to-use-uselocation-hook-of-react-router-dom-v6
    const location = useLocation().pathname;

    return (
        <Nav variant="pills">
            <Nav.Item>
                <Nav.Link to="/Labs" as={Link} active={location === "/Labs"}>Labs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/Labs/Lab1" as={Link} active={location === "/Labs/Lab1"}>Lab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/Labs/Lab2" as={Link} active={location === "/Labs/Lab2"}>Lab 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/Labs/Lab3" as={Link} active={location === "/Labs/Lab3"}>Lab 3</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link to="/Kambaz" as={Link}>Kambaz</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="https://github.com/rubymason33/kambaz-react-web-app" target="_blank" >Ruby's GitHub</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}