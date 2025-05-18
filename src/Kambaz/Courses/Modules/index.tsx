import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls"
import LessonControlButtons from "./LessonControlButtons";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
export default function Modules() {
    return (
        <div id="wd-module-page">
            <ModulesControls /><br /><br /><br /><br />
            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary"> 
                        <BsGripVertical className="me-2 fs-3" /> Week 1 - Intro to Web Development <ModuleControlButtons />
                    </div>
                        <ListGroup className="wd-lessons rounded-0">
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                LEARNING OBJECTIVES </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                Introduction to the course </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                Learn what is Web Development </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                READING </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                Full Stack Developer - Chapter 1 </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                Full Stack Developer - Chapter 2 </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                SLIDES </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                Introduction to Web Development </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                Creating a HTTP server </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                Creating a React Application </ListGroup.Item>   
                        </ListGroup>
                </ListGroup.Item>
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary"> Week 2 - Getting Set Up </div>
                        <ListGroup className="wd-lessons rounded-0">
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                LEARNING OBJECTIVES </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                Setting up environment </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                Learning to write code </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                READING </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                Full Stack Developer - Chapter 3 </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                Full Stack Developer - Chapter 4 </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                SLIDES </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                Downloading the software </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                Running software on your computer </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                Writting in HTML </ListGroup.Item>   
                        </ListGroup>
                </ListGroup.Item>
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary"> Week 3 - Creating a Website </div>
                        <ListGroup className="wd-lessons rounded-0">
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                LEARNING OBJECTIVES </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                Deploying a website </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                Customizing with CSS </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                READING </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                Full Stack Developer - Chapter 5 </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                Full Stack Developer - Chapter 6 </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                SLIDES </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                Setting up GitHub </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                What is CSS? </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                Designing a website </ListGroup.Item>   
                        </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
);}
  
  