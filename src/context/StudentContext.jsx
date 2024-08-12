// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const StudentContext = createContext();

// export const StudentProvider = ({ children }) => {
//     const { id } = useParams();
//     const [student, setStudent] = useState(null);
//     const apiToken = "123"; 

//     useEffect(() => {
//         const fetchStudentData = async () => {
//             if (id) { 
//                 try {
//                     const response = await axios.get(
//                         `https://wagag-elalm-backend.fliicker.com/api/students/${id}?api_token=${apiToken}`
//                     );
//                     console.log(response);
//                     setStudent(response.data);
//                 } catch (error) {
//                     console.error("Error fetching student data:", error);
//                 }
//             }
//         };

//         fetchStudentData();
//     }, [id, apiToken]); // Add id and apiToken to dependency array
//     return (
//         <StudentContext.Provider value={{ student, id }}>
//             {children}
//         </StudentContext.Provider>
//     );
// };

// export const useStudent = () => useContext(StudentContext);
