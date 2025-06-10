// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
// export default function ProtectedRoute({ children }: { children: any }) {
//     const { currentUser } = useSelector((state: any) => state.accountReducer);
//     if (currentUser) {
//         return children;
//     } 
//     else {
//         return <Navigate to="/Kambaz/Account/Signin" />;
//     };
// }


import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { setEnrollments } from "../Enrollments/reducer";
import * as enrollmentsClient from "../Enrollments/client";

export default function ProtectedRoute({ children }: { children: any }) {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const enrollments = useSelector((state: any) => state.enrollmentsReducer.enrollments);
    const { cid } = useParams();

    // fetch the enrollments so we can refresh page
    useEffect(() => {
        if (currentUser && enrollments.length === 0) {
            enrollmentsClient.fetchUserEnrollments(currentUser._id)
                .then(data => dispatch(setEnrollments(data)))
                .catch(err => console.error("Failed to fetch enrollments", err));
        }
    }, [currentUser, enrollments, dispatch]);

    if (!currentUser) {
        return <Navigate to="/Kambaz/Account/Signin" />;
    }

    // check enrollment
    if (cid) {
        if (!enrollments || enrollments.length === 0) {
            return <div>Loading enrollments...</div>;
        }
        const isEnrolled = enrollments.some((c: any) => c._id === cid);

        if (!isEnrolled) {
            return <Navigate to="/Kambaz/Dashboard" />;
        }
    }

    return children;
}
