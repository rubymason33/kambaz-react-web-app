import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import { ListGroup } from "react-bootstrap";
import { FiInbox } from "react-icons/fi";
import { MdOutlineCalendarMonth } from "react-icons/md";

export default function KambazNavigation() {
    // reference to use if statements 
    // https://stackoverflow.com/questions/30533171/conditionally-applying-class-attributes-in-react

  const location = useLocation().pathname;

  const isActive = (path: string) => location.startsWith(path);

  const applyConditions = (path: string) =>
    "text-center border-0 " + (isActive(path) ? "bg-white text-danger" : "bg-black text-white");

  return (
    <ListGroup id="wd-kambaz-navigation" style={{ width: 105 }} 
    className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
        {/* Northeastern Logo */}
        <ListGroup.Item 
        id="wd-neu-link" target="_blank" action href="https://www.northeastern.edu/" className="bg-black border-0 text-center">
            <img src="/images/NEU.png" width="80px" />
        </ListGroup.Item>

        <ListGroup.Item to="/Kambaz/Account" as={Link} className={applyConditions("/Kambaz/Account")}>
            <FaRegCircleUser className={"fs-1 " + (isActive("/Kambaz/Account") ? "text-danger" : "text-white")}/><br />
            Account
        </ListGroup.Item>

        <ListGroup.Item to="/Kambaz/Dashboard" as={Link} className={applyConditions("/Kambaz/Dashboard")}>
            <AiOutlineDashboard className="fs-1 text-danger" /><br />
            Dashboard
        </ListGroup.Item>

        <ListGroup.Item to="/Kambaz/Courses" as={Link} className={applyConditions("/Kambaz/Courses")}>
            <LiaBookSolid className="fs-1 text-danger" /><br />
            Courses
        </ListGroup.Item>

        <ListGroup.Item to="/Kambaz/Calendar" as={Link} className={applyConditions("/Kambaz/Calendar")}>
            <MdOutlineCalendarMonth className="fs-1 text-danger" /><br />
            Calendar
        </ListGroup.Item>

        <ListGroup.Item to="/Kambaz/Inbox" as={Link} className={applyConditions("/Kambaz/Inbox")}>
            <FiInbox className="fs-1 text-danger" /><br />
            Inbox
        </ListGroup.Item>

        <ListGroup.Item to="/Labs" as={Link} className={applyConditions("/Labs")}>
            <GoGear className="fs-1 text-danger" /><br />
            Labs
        </ListGroup.Item>
    </ListGroup>
  );
}



