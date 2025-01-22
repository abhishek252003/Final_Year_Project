import React, { useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { CourseData } from "../../context/CourseContext"
import { server } from "../../main"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, User } from 'lucide-react'

export default function CourseStudy({ user }) {
  const params = useParams()
  const navigate = useNavigate()
  const { fetchCourse, course } = CourseData()

  useEffect(() => {
    if (user && user.role !== "admin" && !user.subscription.includes(params.id)) {
      navigate("/")
    } else {
      fetchCourse(params.id)
    }
  }, [user, params.id, navigate, fetchCourse])

  if (!course) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="overflow-hidden">
        <div className="relative h-64 md:h-96">
          <img
            src={`${server}/${course.image}`}
            alt={course.title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{course.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600">{course.description}</p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>Instructor: {course.createdBy}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>Duration: {course.duration} weeks</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link to={`/lectures/${course._id}`}>
              View Lectures
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}