import { Link } from "react-router-dom";
import { Row, Col, Card, Button, FormControl,  } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { setEnrollments } from "./Enrollments/reducer";
import { v4 as uuidv4 } from "uuid";
import * as enrollmentsClient from "./Enrollments/client"

axios.defaults.withCredentials = true;
const API_BASE_URL = import.meta.env.VITE_REMOTE_SERVER;


export default function Dashboard({
    addNewCourse,
    deleteCourse,
    updateCourse
}: {
    addNewCourse: (course: any) => void;
    deleteCourse: (courseId: string) => void;
    updateCourse: (course: any) => void;
    courses: any[];
}){
    const dispatch = useDispatch();

    // need to keep enrollments for the enrollment button logic, but removed filtering via backend
    const enrollments = useSelector((state: any) => state.enrollmentsReducer.enrollments) || [];
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser?.role?.toUpperCase() === "FACULTY";

    const [showAllCourses, setShowAllCourses] = useState(false);
    const [myCourses, setMyCourses] = useState<any[]>([]);
    const [allCourses, setAllCourses] = useState<any[]>([]);

    // Fetch enrolled courses
    const fetchMyCourses = async () => {
        try {
        const response = await axios.get(`${API_BASE_URL}/api/users/current/courses`);
        setMyCourses(response.data);
        } catch (error) {
        console.error("Failed to fetch enrolled courses:", error);
        setMyCourses([]);
        }
    };

    // Fetch all courses
    const fetchAllCourses = async () => {
        try {
        const response = await axios.get(`${API_BASE_URL}/api/courses`);
        setAllCourses(response.data);
        } catch (error) {
        console.error("Failed to fetch all courses:", error);
        setAllCourses([]);
        }
    };

    useEffect(() => {
        if (currentUser) {
            fetchMyCourses();
            fetchAllCourses();
            enrollmentsClient.fetchUserEnrollments(currentUser._id)
                .then((data) => dispatch(setEnrollments(data)))
                .catch((error) => {
                    console.error("Failed to fetch user enrollments:", error);
                    dispatch(setEnrollments([]));
                });
        } else {
        setMyCourses([]);
        setAllCourses([]);
        }
    }, [currentUser]);

    const displayedCourses = Array.isArray(showAllCourses ? allCourses : myCourses)
        ? (showAllCourses ? allCourses : myCourses)
        : [];

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
        addNewCourse(newCourse);

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
        updateCourse(course);
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
        deleteCourse(id);
    };

    // Enrollment logic
    const handleEnroll = async (courseId: string) => {
        try {
            await enrollmentsClient.enrollInCourse(courseId, currentUser._id);
            const updatedEnrollments = await enrollmentsClient.fetchUserEnrollments(currentUser._id);
            dispatch(setEnrollments(updatedEnrollments));
        } catch (error) {
            console.error("Failed to enroll in course:", error);
        }
    };
    const handleUnenroll = async (courseId: string) => {
        try {
            await enrollmentsClient.unenrollFromCourse(courseId, currentUser._id);
            const updatedEnrollments = await enrollmentsClient.fetchUserEnrollments(currentUser._id);
            dispatch(setEnrollments(updatedEnrollments));
        } catch (error) {
            console.error("Failed to unenroll from course:", error);
        }
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
                                    <Link to={`/Kambaz/Courses/${course._id}/Home`} 
                                        className="wd-dashboard-course-link text-decoration-none text-dark"
                                    >
                                        <Button variant="primary">Go</Button>
                                    </Link>
                                        

                                    {/* Enroll/Unenroll Buttons */}
                                    {!isFaculty && (
                                    enrollments.some((c: any) => c._id === course._id)

                                        ? (
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
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}
