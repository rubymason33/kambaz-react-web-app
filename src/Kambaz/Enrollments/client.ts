// import axios from "axios";
// const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
// const ENROLLMENTS_API = `${REMOTE_SERVER}/api/courses`;
// const axiosWithCredentials = axios.create({ withCredentials: true });

// export const fetchUserEnrollments = async (userId: string) => {
//     try {
//         const response = await axiosWithCredentials.get(`${ENROLLMENTS_API}/users/${userId}/enrollments`);
//         return response.data;
//     } catch (error) {
//         console.error("Failed to fetch user enrollments:", error);
//         throw error;
//     }
// };

// export const enrollInCourse = async (courseId: string, userId: string) => {
//     const response = await axiosWithCredentials.post(`${ENROLLMENTS_API}/${courseId}/enroll`, { userId });
//     return response.data;
// };

// export const unenrollFromCourse = async (courseId: string, userId: string) => {
//     await axiosWithCredentials.delete(`${ENROLLMENTS_API}/${courseId}/unenroll`, {
//         data: { userId }
//     });
// };
