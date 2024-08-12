import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentSettings from "./StudentSettings";

const StudentsList = () => {
    const [students, setStudents] = useState([]);
    const apiToken = "123"; 

    useEffect(() => {
        const fetchStudentsData = async () => {
            try {
                const response = await axios.get(
                    `https://wagag-elalm-backend.fliicker.com/api/students?api_token=${apiToken}`
                );
                console.log(response);
                
                setStudents(response.data);
            } catch (error) {
                console.error("Error fetching students data:", error);
            }
        };

        fetchStudentsData();
    }, [apiToken]);

    return (
        <div>
            {students.length === 0 ? (
                <div>Loading...</div>
            ) : (
                students.map((student) => (
                    <StudentSettings key={student.id} student={student} />
                ))
            )}
        </div>
    );
};

export default StudentsList;
