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


import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const enrollments = useSelector((state: any) => state.enrollmentsReducer.enrollments);
    const { cid } = useParams();

    if (!currentUser) {
        return <Navigate to="/Kambaz/Account/Signin" />;
    }

    // check enrollment
    if (cid) {
        // if (!enrollments || enrollments.length === 0) {
        //     return <div>Loading enrollments...</div>;
        // }
        const isEnrolled = enrollments.some((c: any) => c._id === cid);

        if (!isEnrolled) {
        return <Navigate to="/Kambaz/Dashboard" />;
        }
    }

    return children;
}
