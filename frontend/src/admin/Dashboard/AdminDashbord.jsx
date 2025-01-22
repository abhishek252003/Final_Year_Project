import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { server } from "../../main"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Video } from 'lucide-react'
import Layout from "../Utils/Layout"

export default function AdminDashboard({ user }) {
  const navigate = useNavigate()
  const [stats, setStats] = useState({
    totalCoures: 0,
    totalLectures: 0,
    totalUsers: 0
  })

  useEffect(() => {
    if (user && user.role !== "admin") {
      navigate("/")
    } else {
      fetchStats()
    }
  }, [user, navigate])

  async function fetchStats() {
    try {
      const { data } = await axios.get(`${server}/api/stats`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      setStats(data.stats)
    } catch (error) {
      console.error("Error fetching stats:", error)
    }
  }

  return (
    <Layout>
      <div className="container mt-10 ml-auto mr-auto px-14 py-20 max-w-10xl bg-blue-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-7">
          <StatsCard
            title="Total Courses "
            value={stats.totalCoures}
            icon={<BookOpen className=" text-purple-500" />}
          />
          <StatsCard
            title="Total Lectures"
            value={stats.totalLectures}
            icon={<Video className="h-5 w-5 text-purple-500" />}
          />
          <StatsCard
            title="Total Users"
            value={stats.totalUsers}
            icon={<Users className="h-5 w-5 text-purple-500" />}  
          />
        </div>
      </div>
    </Layout>
  )
}

function StatsCard({ title, value, icon }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-2 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}