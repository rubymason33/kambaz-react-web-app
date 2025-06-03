import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        enroll: (state, action) => {
        const { user, course } = action.payload;
            const exists = state.enrollments.some(
                (e) => e.user === user && e.course === course
            );
            if (!exists) {
                state.enrollments.push({
                _id: uuidv4(),
                user: user,
                course: course,
                role: "STUDENT",
                section: "S100",
                lastActivity: new Date().toISOString().split("T")[0],
                totalActivity: "00:00:00",
                });
            }
            },
            unenroll: (state, action) => {
            const { user, course } = action.payload;
            state.enrollments = state.enrollments.filter(
                (e) => !(e.user === user && e.course === course)
            );
        },
    },
});

export const { enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
