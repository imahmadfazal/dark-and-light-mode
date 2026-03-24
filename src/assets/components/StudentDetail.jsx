import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StudentDetail = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(id);

  const getdata = async () => {
    await fetch(`http://localhost:4000/student/api/student/${id}`)
      .then((res) => res.json())
      .then((data) => setStudent(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getdata();
  }, [id]);

  return (
    <div>
      <div>{student.firstName}</div>
      <div>{student.lastName}</div>
      <div>{student.email}</div>
    </div>
  );
};

export default StudentDetail;
