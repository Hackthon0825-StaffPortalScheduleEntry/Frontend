import React, { useState, useEffect } from "react";
import axios from "axios";

function CourseList() {
  const [courses, setCourses] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Form states
  const [showForm, setShowForm] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [batchCycle, setBatchCycle] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [students, setStudents] = useState(0);
  const [groups, setGroups] = useState(0);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/courses");
      setCourses(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load courses");
      setLoading(false);
    }
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();
    const newCourse = { courseName, batchCycle, location, type, students, groups };

    try {
      await axios.post("http://localhost:5000/api/courses", newCourse);
      setCourses([...courses, newCourse]); // update UI
      setShowForm(false); // hide form
      resetForm();
    } catch (err) {
      alert("Error adding course");
    }
  };

  const resetForm = () => {
    setCourseName("");
    setBatchCycle("");
    setLocation("");
    setType("");
    setStudents(0);
    setGroups(0);
  };

  return (
    <div className="container mt-4">
      {/* Header with Add Course button (always visible) */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>📚 Course List</h3>
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          ➕ Add Course
        </button>
      </div>

      {/* Show Form when Add Course is clicked */}
      {showForm && (
        <div className="card p-3 mb-4 shadow-sm">
          <h5>Add New Course</h5>
          <form onSubmit={handleAddCourse}>
            <div className="row">
              <div className="col-md-4 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Course Name"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Batch Cycle"
                  value={batchCycle}
                  onChange={(e) => setBatchCycle(e.target.value)}
                />
              </div>
              <div className="col-md-4 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />
              </div>
              <div className="col-md-4 mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Students"
                  value={students}
                  onChange={(e) => setStudents(e.target.value)}
                />
              </div>
              <div className="col-md-4 mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Groups"
                  value={groups}
                  onChange={(e) => setGroups(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-success">
              Save Course
            </button>
          </form>
        </div>
      )}

      {/* Loading/Error/Course Table */}
      {loading ? (
        <p>Loading courses...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : courses.length === 0 ? (
        <p>No courses available. Please add a course.</p>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Course Name</th>
              <th>Batch Cycle</th>
              <th>Location</th>
              <th>Type</th>
              <th>Students</th>
              <th>Groups</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.courseName}</td>
                <td>{course.batchCycle}</td>
                <td>{course.location}</td>
                <td>{course.type}</td>
                <td>{course.students}</td>
                <td>{course.groups}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CourseList;
