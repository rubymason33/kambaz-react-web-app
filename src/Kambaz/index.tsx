import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Kambaz() {
    const [courses, setCourses] = useState<any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const fetchCourses = async () => {
        try {
        const courses = await courseClient.fetchAllCourses();
        setCourses(courses);
        } catch (error) {
        console.error(error);
        }
    };
    useEffect(() => {
        fetchCourses();
    }, [currentUser]);
    const addNewCourse = async (course: any) => {
        try {
            const newCourse = await courseClient.createCourse(course);
            await fetchCourses();
            setCourses([...courses, newCourse]);
        } catch (error) {
            console.error("Failed to add course:", error);
        }
    };
    const deleteCourse = async (courseId: string) => {
        const status = await courseClient.deleteCourse(courseId);
        await fetchCourses();
        setCourses(courses.filter((course) => course._id !== courseId));
        console.log("Delete status:", status);
    };
    const updateCourse = async (course: any) => {
        await courseClient.updateCourse(course);
        await fetchCourses();
        setCourses(courses.map((c) => {
            if (c._id === course._id) { return course; }
            else { return c; }
        }));
    };

    return (
        <Session>
            <div id="wd-kambaz">
                <KambazNavigation />
                <div className="wd-main-content-offset p-3">
                    <Routes>
                        <Route path="/" element={<Navigate to="Account" />} />
                        <Route path="/Account/*" element={<Account />} />
                        <Route path="/Dashboard" element={
                            <ProtectedRoute>
                                <Dashboard 
                                addNewCourse={addNewCourse} 
                                deleteCourse={deleteCourse} 
                                updateCourse={updateCourse}
                                courses={courses}/>
                            </ProtectedRoute>
                        } />
                        <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses/></ProtectedRoute>} />
                        <Route path="/Calendar" element={<h1>Calendar</h1>} />
                        <Route path="/Inbox" element={<h1>Inbox</h1>} />
                    </Routes>
                </div>
            </div>
        </Session>
        
);}
  