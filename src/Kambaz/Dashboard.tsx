import { Link } from "react-router-dom";
import { Row, Col, Card, Button, FormControl,  } from "react-bootstrap";
import { useSelector } from "react-redux";
import * as db from "./Database";

export default function Dashboard({ 
    courses,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse 
}: { 
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (courseId: string) => void;
    updateCourse: () => void;
}){
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser?.role === "FACULTY";
    const { enrollments } = db;

    const filteredCourses = courses.filter(course =>
    enrollments.some(
        (enrollment) =>
        enrollment.user === currentUser._id &&
        enrollment.course === course._id
    )
    );
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

            {/* <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="mb-0">New Course</h5>
                <div>
                    <Button
                        className="btn btn-warning me-2"
                        onClick={updateCourse}
                        id="wd-update-course-click"
                    >
                        Update
                    </Button>
                    <Button
                        className="btn btn-primary"
                        id="wd-add-new-course-click"
                        onClick={addNewCourse}
                    >
                        Add
                    </Button>
                </div>
            </div>

            <FormControl value={course.name} className="mb-2" 
                onChange={(e) => setCourse({ ...course, name: e.target.value }) } placeholder="New Course" />
            <FormControl value={course.description} rows={3} as="textarea" 
                onChange={(e) => setCourse({ ...course, description: e.target.value }) } placeholder="New Description" />
            <hr />

            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {courses.filter((course) =>
                    enrollments.some(
                        (enrollment) =>
                        enrollment.user === currentUser._id &&
                        enrollment.course === course._id
                        )).map((course) => (
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to={`/Kambaz/Courses/${course._id}/Home`}
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                                <Card.Img src={course.image} variant="top" width="100%" height={160} />
                                <Card.Body className="card-body">
                                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden text-primary">
                                        {course.name}
                                    </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                        {course.description}
                                    </Card.Text>
                                    <Button variant="primary"> Go </Button>
                                    <Button onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course._id);
                                        }} className="btn btn-danger float-end"
                                        id="wd-delete-course-click"
                                    >
                                        Delete
                                    </Button>
                                    <Button id="wd-edit-course-click"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}
                                        className="btn btn-warning me-2 float-end"
                                    >
                                        Edit
                                    </Button>


                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </div> */}

            {/* new course permissions for faculty*/}
            {isFaculty && (
                <>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5 className="mb-0">New Course</h5>
                        <div>
                            <Button
                                className="btn btn-warning me-2"
                                onClick={updateCourse}
                                id="wd-update-course-click"
                            >
                                Update
                            </Button>
                            <Button
                                className="btn btn-primary"
                                id="wd-add-new-course-click"
                                onClick={addNewCourse}
                            >
                                Add
                            </Button>
                        </div>
                    </div>

                    <FormControl
                        value={course.name}
                        className="mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })}
                        placeholder="New Course"
                    />
                    <FormControl
                        value={course.description}
                        rows={3}
                        as="textarea"
                        onChange={(e) => setCourse({ ...course, description: e.target.value })}
                        placeholder="New Description"
                    />
                    <hr />
                </>
            )}

            {/* published course permissions */}
            <h2 id="wd-dashboard-published">
                Published Courses ({filteredCourses.length})
            </h2>
            <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {filteredCourses.map((course) => (
                        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
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
                                            {course.name}
                                        </Card.Title>
                                        <Card.Text
                                            className="wd-dashboard-course-description overflow-hidden"
                                            style={{ height: "100px" }}
                                        >
                                            {course.description}
                                        </Card.Text>

                                        <Button variant="primary">Go</Button>

                                        {/* other buttons only for FACULTY */}
                                        {isFaculty && (
                                            <>
                                                <Button
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        deleteCourse(course._id);
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
