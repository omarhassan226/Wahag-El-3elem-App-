import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CourseContext = createContext();

const CourseProvider = ({ children, apiToken }) => {
    // const [rating, setRating] = useState(0);
    // const [courseDetails, setCourseDetails] = useState({});
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const studentId = localStorage.getItem('id');

        if (studentId) {
            const fetchCourses = async () => {
                try {
                    const response = await axios.get(
                        `https://wagag-elalm-backend.fliicker.com/api/students/get-boughted-courses/10?api_token=${apiToken}`
                    );
                    setCourses(response.data.data);
                } catch (error) {
                    console.error("Error fetching courses:", error);
                }
            };

            fetchCourses();
        } else {
            console.error("No student ID found in local storage");
        }
    }, [apiToken]);

    return (
        <CourseContext.Provider value={{ courses }}>
            {children}
        </CourseContext.Provider>
    );
};

export { CourseContext, CourseProvider };
