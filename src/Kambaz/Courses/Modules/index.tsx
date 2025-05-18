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
                                <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> Learn what is Web Development <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> READING <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 1 <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 2 <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> SLIDES <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> Introduction to Web Development <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> Creating a HTTP server <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> Creating a React Application <LessonControlButtons />
                            </ListGroup.Item>   
                        </ListGroup>
                </ListGroup.Item>
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary"> 
                        Week 2 - Getting Set Up <ModuleControlButtons />
                    </div>
                        <ListGroup className="wd-lessons rounded-0">
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> Setting up environment <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> Learning to write code <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> READING <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 3 <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 4 <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> SLIDES <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> Downloading the software <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> Running software on your computer <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> Writting in HTML <LessonControlButtons />
                            </ListGroup.Item>   
                        </ListGroup>
                </ListGroup.Item>
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary"> 
                        Week 3 - Creating a Website <ModuleControlButtons />
                    </div>
                        <ListGroup className="wd-lessons rounded-0">
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> Deploying a website <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> Customizing with CSS <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> READING <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 5 <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 6 <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> SLIDES <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> Setting up GitHub <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> What is CSS? <LessonControlButtons />
                            </ListGroup.Item>
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3" /> Designing a website <LessonControlButtons />
                            </ListGroup.Item>   
                        </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}
  
  