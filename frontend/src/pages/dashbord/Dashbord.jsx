import React from "react";
import "./dashbord.css";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";

const Dashbord = () => {
  const { mycourse } = CourseData();
  return (
    <div className="student-dashboard ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mt-10">All Enrolled Courses</h2>
      <div className="student-dashboard ml-5 mr-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 bg-blue-100 rounded-lg shadow-lg">
        {mycourse && mycourse.length > 0 ? (
          mycourse.map((e) => <CourseCard key={e._id} course={e} />)
        ) : (
          <p className="text-center py-10 text-lg text-muted-foreground">No course Enrolled Yet</p>
        )}
      </div>
    </div>
  );
};

export default Dashbord;