import React, { use, useEffect } from "react";
// import img from "../assets/images/studentimg/ak.jpeg";
// import img from "../images/studentimg/ak.jpeg";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Studentcard = () => {
  const [student, setStudent] = React.useState([]);
  const navigate = useNavigate();

  const getAllStudents = async () => {
    try {
      const data = await axios.get(
        "http://localhost:4000/student/api/allStudents",
      );
      console.log(data);
      if (data.status === 200) {
        setStudent(data.data);
      }
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  return (
    <div className="flex flex-col gap-5 pt-5">
      {student.map((student) => (
        <container className="flex h-64 bg-[linear-gradient(115deg,#f2f8fc,#ced5e0)] rounded-lg shadow-lg overflow-hidden w-11/12 m-auto items-center gap-15">
          <leftside className="w-2/5 h-full flex items-center">
            {student.image && (
              <img
                src={`http://localhost:4000/uploads/${student.image}`}
                alt="Student"
                className="rounded-lg ml-5"
              />
            )}
          </leftside>
          <rightside>
            <div>
              <h2>
                Name: {student.firstName} {student.lastName}
              </h2>
              <h2>Roll no: {student.rollNo}</h2>
              <h2>Section: {student.section}</h2>
              <h2>Degree: {student.degree}</h2>
            </div>

            <button
              onClick={() => navigate(`/studentDetail/${student._id}`)}
              className="mt-5 btn-grad"
            >
              Details
            </button>
          </rightside>
        </container>
      ))}
    </div>
  );
};

export default Studentcard;
