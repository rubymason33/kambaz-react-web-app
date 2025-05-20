import { InputGroup, Form, Button } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { MdOutlineAssignment } from "react-icons/md";



export default function Assignments() {
    return (
        <div>
            <div id="wd-assignment-header" className="mb-5">
                <Button className="me-2 float-end" size="lg" variant="danger">
                    <FaPlus /> Assignment
                </Button>
                <Button className="me-2 float-end" size="lg" variant="secondary">
                    <FaPlus /> Group
                </Button>
                <InputGroup style={{ maxWidth: "300px" }} className="me-1 justify-left" size="lg">
                    <InputGroup.Text><CiSearch /></InputGroup.Text>
                    <Form.Control
                        placeholder="Search..."
                    />
                </InputGroup>

            </div>
            <div>
                <ListGroup className="rounded-0" id="wd-assignments">
                    <ListGroup.Item className="wd-assignment-category p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center"> 
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <span className="fs-5">ASSIGNMENTS</span>
                            </div>
                            <AssignmentControlButtons />
                        </div>
                        <ListGroup className="wd-lesson rounded-0">
                            <ListGroup.Item className="d-flex align-items-center px-3 py-3">
                                {/* Grip icon */}
                                <div className="me-3 d-flex align-items-center" style={{ width: "30px" }}>
                                    <BsGripVertical className="fs-2 text-muted" />
                                </div>

                                {/* Assignment icon */}
                                <div className="me-3 d-flex align-items-center" style={{ width: "30px" }}>
                                    <MdOutlineAssignment className="fs-2 text-success" />
                                </div>

                                {/* Text block */}
                                <div className="flex-grow-1">
                                    <div className="fw-bold fs-5 mb-1">
                                        <a href="#/Kambaz/Courses/1234/Assignments/1" className="wd-assignment-link">
                                            A1 - ENV + HTML
                                        </a>
                                    </div>
                                    <div className="small mb-1">
                                        <span className="text-danger">Multiple Modules</span>
                                        <span className="text-muted"> | </span>
                                        <span className="fw-bold text-muted">Not available until</span>
                                        <span className="text-muted"> May 6 at 12:00am</span>
                                    </div>
                                    <div className="small text-muted">
                                        <span className="fw-bold">Due</span> May 13 at 11:59pm | 100 pts
                                    </div>
                                </div>

                                {/* Check */}
                                <div className="d-flex align-items-center ms-3">
                                    <LessonControlButtons />
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center px-3 py-3">
                                {/* Grip icon */}
                                <div className="me-3 d-flex align-items-center" style={{ width: "30px" }}>
                                    <BsGripVertical className="fs-2 text-muted" />
                                </div>

                                {/* Assignment icon */}
                                <div className="me-3 d-flex align-items-center" style={{ width: "30px" }}>
                                    <MdOutlineAssignment className="fs-2 text-success" />
                                </div>

                                {/* Text block */}
                                <div className="flex-grow-1">
                                    <div className="fw-bold fs-5 mb-1">
                                        <a href="#/Kambaz/Courses/1234/Assignments/2" className="wd-assignment-link" >
                                            A2 - CSS + BOOTSTRAP
                                        </a>
                                    </div>
                                    <div className="small mb-1">
                                        <span className="text-danger">Multiple Modules</span>
                                        <span className="text-muted"> | </span>
                                        <span className="fw-bold text-muted">Not available until</span>
                                        <span className="text-muted"> May 13 at 12:00am</span>
                                    </div>
                                    <div className="small text-muted">
                                        <span className="fw-bold">Due</span> May 20 at 11:59pm | 100 pts
                                    </div>
                                </div>

                                {/* Check */}
                                <div className="d-flex align-items-center ms-3">
                                    <LessonControlButtons />
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center px-3 py-3">
                                {/* Grip icon */}
                                <div className="me-3 d-flex align-items-center" style={{ width: "30px" }}>
                                    <BsGripVertical className="fs-2 text-muted" />
                                </div>

                                {/* Assignment icon */}
                                <div className="me-3 d-flex align-items-center" style={{ width: "30px" }}>
                                    <MdOutlineAssignment className="fs-2 text-success" />
                                </div>

                                {/* Text block */}
                                <div className="flex-grow-1">
                                    <div className="fw-bold fs-5 mb-1">
                                        <a href="#/Kambaz/Courses/1234/Assignments/3" className="wd-assignment-link">
                                            A3 - JAVASCRIPT + REACT
                                        </a>
                                    </div>
                                    <div className="small mb-1">
                                        <span className="text-danger">Multiple Modules</span>
                                        <span className="text-muted"> | </span>
                                        <span className="fw-bold text-muted">Not available until</span>
                                        <span className="text-muted"> May 20 at 12:00am</span>
                                    </div>
                                    <div className="small text-muted">
                                        <span className="fw-bold">Due</span> May 27 at 11:59pm | 100 pts
                                    </div>
                                </div>

                                {/* Check */}
                                <div className="d-flex align-items-center ms-3">
                                    <LessonControlButtons />
                                </div>
                            </ListGroup.Item>            
                        </ListGroup>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
}

