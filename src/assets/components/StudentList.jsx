import React from "react";
import { useContext } from "react";
import { Nav } from "../smallcomponents/Nav";
import { ThemeContext } from "../context/ThemeContext";
import { TiThMenuOutline } from "react-icons/ti";
import Studentcard from "../smallcomponents/Studentcard";

const StudentList = () => {
  const { navOpen, setNavopen } = useContext(ThemeContext);
  return (
    <div
      className="h-screen "
      style={{
        background: `
          radial-gradient(circle at 30% 30%, rgba(0,114,255,0.1), transparent 40%),
          radial-gradient(circle at 70% 70%, rgba(0,198,255,0.1), transparent 40%),
          #f5f7fa
        `,
      }}
    >
      <div
        className="flex justify-end pr-3 text-3xl "
        onClick={() => {
          setNavopen(true);
        }}
      >
        {!navOpen && <TiThMenuOutline />}
      </div>
      {/* <Nav /> */}
      <Studentcard />
    </div>
  );
};

export default StudentList;
