import { Nav } from "./assets/smallcomponents/Nav";
import StudentList from "./assets/components/StudentList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./assets/layout/Layout";
import StudentDetail from "./assets/components/StudentDetail";

function App() {
  // Apply theme

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StudentList />} />
          <Route path="studentDetail/:id" element={<StudentDetail />} />
        </Route>
      </Routes>
    </Router>

    // <>
    //   <StudentList />
    // </>
  );
}

export default App;
