import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
export default function TOC() {
    // Referenced the following page to learn about constants and useLocation()
    // https://stackoverflow.com/questions/72079923/how-to-use-uselocation-hook-of-react-router-dom-v6
    // const location = useLocation().pathname;
    const { pathname } = useLocation();

    return (
        <Nav variant="pills" id="wd-toc">
            <Nav.Item> <Nav.Link as={Link} to="/Labs/Lab1" id="wd-a1"
                active={pathname.includes("Lab1")}> Lab 1 </Nav.Link> </Nav.Item>
            <Nav.Item> <Nav.Link as={Link} to="/Labs/Lab2" id="wd-a2"
                active={pathname.includes("Lab2")}> Lab 2 </Nav.Link> </Nav.Item>
            <Nav.Item> <Nav.Link as={Link} to="/Labs/Lab3" id="wd-a3"
                active={pathname.includes("Lab3")}> Lab 3 </Nav.Link> </Nav.Item>
            <Nav.Item> <Nav.Link as={Link} to="/Labs/Lab4" id="wd-a4"
                active={pathname.includes("Lab4")}> Lab 4 </Nav.Link></Nav.Item>
            <Nav.Item> <Nav.Link as={Link} to="/Labs/Lab5" id="wd-a4"
                active={pathname.includes("Lab5")}> Lab 5 </Nav.Link></Nav.Item>
            <Nav.Item> <Nav.Link as={Link} to="/Kambaz" id="wd-a3"
                active={pathname.includes("Kambaz")}> Kambaz </Nav.Link> </Nav.Item>
            <Nav.Item> <Nav.Link href="https://github.com/rubymason33/kambaz-react-web-app" target="_blank" active={pathname.includes("github")}>Ruby's GitHub</Nav.Link> </Nav.Item>
        </Nav>

    );
}