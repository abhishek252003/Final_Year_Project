import React from "react";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";
import { motion } from "framer-motion";



const Courses = () => {
  const { courses } = CourseData();

  return (
    <div className="container  mt-10 ml-auto mr-auto px-14 py-20 max-w-10xl bg-blue-100 rounded-lg shadow-lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Available Courses
        </h1>

        {courses && courses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No Courses Available Yet!</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Courses;