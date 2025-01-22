import { server } from "../../main";
import { UserData } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { CourseData } from "../../context/CourseContext";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight, Trash2 } from "lucide-react";
import { User, Clock, IndianRupee } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { LogIn } from "lucide-react";


const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const { user, isAuth } = UserData();
  const { fetchCourses } = CourseData();

  const deleteHandler = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete this course?");
      
      if (confirmDelete) {
        const { data } = await axios.delete(`${server}/api/course/${id}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        });
        toast.success(data.message);
        fetchCourses();
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden h-full bg-blue-500 text-white ">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={`${server}/${course.image}`}
            alt={course.title}
            className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
          />
        </div>
        <CardContent className="p-6 ">
          <h3 className="text-xl font-semibold mb-2 text-white">{course.title}</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-red-500 animate-bounce" />
              <span className="text-white">Instructor: {course.createdBy}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-yellow-500 animate-spin" />
              <span className="text-white">Duration: {course.duration} weeks</span>   
            </div>
            <div className="flex items-center gap-2">
              <IndianRupee className="h-4 w-4 text-green-200 animate-pulse  " />
              <span className="text-white">Price: ₹{course.price}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex flex-col gap-3">
          {isAuth ? (
            <>
              {user && user.role !== "admin" ? (
                <>
                  {user.subscription.includes(course._id) ? (
                    <Button 
                      className="w-full"
                      onClick={() => navigate(`/course/study/${course._id}`)}
                    >
                      <BookOpen className="mr-2 h-4 w-4 animate-bounce" />
                      Study Now
                    </Button>
                  ) : (
                    <Button 
                      className="w-full "
                      onClick={() => navigate(`/course/${course._id}`)}
                    >
                      <ArrowRight className="mr-2 h-4 w-4 animate-bounce" />
                      Get Started
                    </Button>
                  )}
                </>
              ) : (
                <Button 
                  className="w-full"
                  onClick={() => navigate(`/course/study/${course._id}`)}
                >
                  <BookOpen className="mr-2 h-4 w-4 animate-pulse" />
                  Study Now
                </Button>
              )}
            </>
          ) : (
            <Button 
              className="w-full"
              onClick={() => navigate("/login")}
            >
              <LogIn className="mr-2 h-4 w-4 animate-bounce" />
              Get Started
            </Button>
          )}

          {user && user.role === "admin" && (
            <Button 
              variant="destructive"
              className="w-full"
              onClick={() => deleteHandler(course._id)}
            >
              <Trash2 className="mr-2 h-4 w-4 animate-bounce" />
              Delete Course
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};


export default CourseCard;