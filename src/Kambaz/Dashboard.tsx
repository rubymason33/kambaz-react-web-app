import { Link } from "react-router-dom";
import { Row, Col, Card, Button, FormControl,  } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addCourse, deleteCourse, updateCourse } from "./Courses/reducer";
import { enroll, unenroll } from "./Enrollments/reducer";
import { v4 as uuidv4 } from "uuid";

export default function Dashboard(){
    const dispatch = useDispatch();
    const courses = useSelector((state: any) => state.coursesReducer.courses) as {
        _id: string;
        title: string;
        description: string;
        number: string;
        startDate: string;
        endDate: string;
        department: string;
        credits: number;
        image: string;
    }[];
    const enrollments = useSelector((state: any) => state.enrollmentsReducer.enrollments);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser?.role.toUpperCase() === "FACULTY";

    const [showAllCourses, setShowAllCourses] = useState(false);

    const displayedCourses = showAllCourses
        ? courses
        : courses.filter((c) =>
            enrollments.some(
            (e: any) => e.user === currentUser._id && e.course === c._id
            )
        );

    const [course, setCourse] = useState({
        _id: "",
        title: "",
        description: "",
        number: "",
        startDate: "",
        endDate: "",
        department: "",
        credits: 0,
        image: "",
    });

    const handleAddNewCourse = () => {
        const newCourse = {
            ...course,
            _id: uuidv4(),
            image: course.image || "/images/NEU.png",
        };
        dispatch(addCourse(newCourse));

        // Faculty needs to enroll to see course
        dispatch(enroll({
            user: currentUser._id,
            course: newCourse._id,
            role: "ADMIN",
            section: "S100",
            lastActivity: new Date().toISOString().split("T")[0],
            totalActivity: "00:00:00"
        }));

        setCourse({
            _id: "",
            title: "",
            description: "",
            number: "",
            startDate: "",
            endDate: "",
            department: "",
            credits: 0,
            image: "",
        });
    };

    const handleUpdateCourse = () => {
        dispatch(updateCourse(course));
        setCourse({
        _id: "",
        title: "",
        description: "",
        number: "",
        startDate: "",
        endDate: "",
        department: "",
        credits: 0,
        image: "",
        });
    };

    const handleDeleteCourse = (id: string) => {
        dispatch(deleteCourse(id));
    };

    const handleEnroll = (courseId: string) => {
        dispatch(enroll({ user: currentUser._id, course: courseId }));
    };

    const handleUnenroll = (courseId: string) => {
        dispatch(unenroll({ user: currentUser._id, course: courseId }));
    };
    
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

            {/* enroll button for non faculty */}
            {!isFaculty && (
                <Button className="float-end"
                    variant="primary"
                    onClick={() => setShowAllCourses(!showAllCourses)}
                >
                    Enrollments
                </Button>
            )}
            
            {/* new course permissions for faculty*/}
            {isFaculty && (
                <>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5 className="mb-0">New Course</h5>
                        <div>
                            <Button
                                className="btn btn-warning me-2"
                                onClick={handleUpdateCourse}
                                id="wd-update-course-click"
                            >
                                Update
                            </Button>
                            <Button
                                className="btn btn-primary"
                                id="wd-add-new-course-click"
                                onClick={handleAddNewCourse}
                            >
                                Add
                            </Button>
                        </div>
                    </div>
                    <Row className="mb-2">
                        <Col>
                            <FormControl
                            value={course.title}
                            onChange={(e) => setCourse({ ...course, title: e.target.value })}
                            placeholder="New Course"
                            />
                        </Col>
                        <Col>
                            <FormControl
                            value={course.number}
                            onChange={(e) => setCourse({ ...course, number: e.target.value })}
                            placeholder="New Course Number"
                            />
                        </Col>
                    </Row>

                    <FormControl
                    value={course.description}
                    rows={3}
                    as="textarea"
                    className="mb-2"
                    onChange={(e) => setCourse({ ...course, description: e.target.value })}
                    placeholder="New Description"
                    />

                    <FormControl
                    type="file"
                    className="mb-2"
                    onChange={(e) => {
                        const target = e.target as HTMLInputElement; 
                        const file = target.files?.[0];
                        if (file) {
                        const imageUrl = URL.createObjectURL(file);
                        setCourse({ ...course, image: imageUrl });
                        }
                    }}
                    placeholder="Upload Image"
                    />

                    <hr />
                </>
            )}

            {/* published course permissions */}
            <h2 id="wd-dashboard-published">
                Published Courses ({displayedCourses.length})
            </h2>
            <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {displayedCourses.map((course: any) => (
                        <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                            <Card>
                                <Link
                                    to={`/Kambaz/Courses/${course._id}/Home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark"
                                >
                                    <Card.Img
                                        src={course.image}
                                        variant="top"
                                        width="100%"
                                        height={160}
                                    />
                                    <Card.Body className="card-body">
                                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden text-primary">
                                            {course.title || "Untitled Course"}
                                        </Card.Title>
                                        <Card.Text
                                            className="wd-dashboard-course-description overflow-hidden"
                                            style={{ height: "100px" }}
                                        >
                                            {course.description}
                                        </Card.Text>

                                        <Button variant="primary">Go</Button>

                                        {/* Enroll/Unenroll Buttons */}
                                        {!isFaculty && (
                                        enrollments.some(
                                            (e: any) => e.user === currentUser._id && e.course === course._id
                                        ) ? (
                                            <Button
                                            variant="danger"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleUnenroll(course._id);
                                            }}
                                            className="float-end mt-2"
                                            >
                                            Unenroll
                                            </Button>
                                        ) : (
                                            <Button
                                            variant="success"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleEnroll(course._id);
                                            }}
                                            className="float-end mt-2"
                                            >
                                            Enroll
                                            </Button>
                                        )
                                        )}

                                        {/* other buttons only for FACULTY */}
                                        {isFaculty && (
                                            <>
                                                <Button
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        handleDeleteCourse(course._id);
                                                    }}
                                                    className="btn btn-danger float-end"
                                                    id="wd-delete-course-click"
                                                >
                                                    Delete
                                                </Button>
                                                <Button
                                                    id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }}
                                                    className="btn btn-warning me-2 float-end"
                                                >
                                                    Edit
                                                </Button>
                                            </>
                                        )}
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}
