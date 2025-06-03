import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { useSelector } from "react-redux";

export default function Courses() {
    const courses = useSelector((state: any) => state.coursesReducer.courses);
    const { cid } = useParams();
    const course = courses.find((course: any) => course._id === cid);
    const enrollments = useSelector((state: any) => state.enrollmentsReducer.enrollments);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    // Check if the current user is enrolled in the course
    const isEnrolled = enrollments.some(
        (e: any) => e.user === currentUser._id && e.course === cid
    );

    if (!isEnrolled) {
        // If not enrolled, redirect back to Dashboard
        return <Navigate to="/Kambaz/Dashboard" replace />;
    }

    const {pathname} = useLocation();

    if (!course) {
        return <h2>Loading course...</h2>;
    }
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1"></FaAlignJustify>
                {course && course.number + "." + course.title} &gt; {pathname.split("/")[4]}
            </h2>
            <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CourseNavigation />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="Piazza" element={<h2>Piazza</h2>} />
                        <Route path="Zoom" element={<h2>Zoom</h2>} />
                        <Route path="Quizzes" element={<h2>Quizzes</h2>} />
                        <Route path="Grades" element={<h2>Grades</h2>} />
                        <Route path="People" element={<PeopleTable />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
  