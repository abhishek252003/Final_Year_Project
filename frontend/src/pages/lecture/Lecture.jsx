import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./lecture.css";

import { server } from "../../main";
import Loading from "../../components/loading/Loading";
import toast from "react-hot-toast";
import { TiTick } from "react-icons/ti";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const Lecture = ({ user }) => {
const [lectures, setLectures] = useState([]);
  const [lecture, setLecture] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lecLoading, setLecLoading] = useState(false);  
  const [show, setShow] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setvideo] = useState("");
  const [videoPrev, setVideoPrev] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [completed, setCompleted] = useState("");
  const [completedLec, setCompletedLec] = useState("");
  const [lectLength, setLectLength] = useState("");
  const [progress, setProgress] = useState([]);


  if (user && user.role !== "admin" && !user.subscription.includes(params.id))
    return navigate("/");

  async function fetchLectures() {
    try {
      const { data } = await axios.get(`${server}/api/lectures/${params.id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setLectures(data.lectures);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  async function fetchLecture(id) {
    setLecLoading(true);
    try {
      const { data } = await axios.get(`${server}/api/lecture/${id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setLecture(data.lecture);
      setLecLoading(false);
    } catch (error) {
      console.log(error);
      setLecLoading(false);
    }
  }

  const changeVideoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setvideo(file);
    };
  };

  const submitHandler = async (e) => {
    setBtnLoading(true);
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("file", video);

    try {
      const { data } = await axios.post(
        `${server}/api/course/${params.id}`,
        myForm,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      toast.success(data.message);
      setBtnLoading(false);
      setShow(false);
      fetchLectures();
      setTitle("");
      setDescription("");
      setvideo("");
      setVideoPrev("");
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnLoading(false);
    }
  };

  const deleteHandler = async (id) => {
    if (confirm("Are you sure you want to delete this lecture")) {
      try {
        const { data } = await axios.delete(`${server}/api/lecture/${id}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        });

        toast.success(data.message);
        fetchLectures();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  async function fetchProgress() {
    try {
      const { data } = await axios.get(
        `${server}/api/user/progress?course=${params.id}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      setCompleted(data.courseProgressPercentage);
      setCompletedLec(data.completedLectures);
      setLectLength(data.allLectures);
      setProgress(data.progress);
    } catch (error) {
      console.log(error);
    }
  }

  const addProgress = async (id) => {
    try {
      const { data } = await axios.post(
        `${server}/api/user/progress?course=${params.id}&lectureId=${id}`,
        {},
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      console.log(data.message);
      fetchProgress();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(progress);

  useEffect(() => {
    fetchLectures();
    fetchProgress();
  }, []);
  return (
    <div className="container mx-auto px-4 py-8 bg-blue-100">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Card className="mb-6 bg-blue-700 text-white">
            <CardHeader>
              <CardTitle>Course Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-white">
                Lecture completed - {completedLec} out of {lectLength}
              </p>
              <Progress value={completed} max={100} className="w-full bg-white" />
              <p className="mt-2 text-right font-bold text-white">{completed}%</p>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            <div className="md:col-span-2">
              {lecLoading ? (
                <Loading />
              ) : (
                <>
                  {lecture.video ? (
                    <Card>
                      <CardContent className="p-0">
                        <video
                          src={`${server}/${lecture.video}`}
                          width="100%"
                          controls
                          controlsList="nodownload noremoteplayback"
                          disablePictureInPicture
                          disableRemotePlayback
                          autoPlay
                          onEnded={() => addProgress(lecture._id)}
                          className="rounded-t-lg shadow-lg bg-white"
                        ></video>
                      </CardContent>
                      <CardHeader>
                        <CardTitle>{lecture.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{lecture.description}</p>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card>
                      <CardContent className="flex items-center justify-center h-64">
                        <h2 className="text-2xl font-semibold text-gray-500">Please Select a Lecture</h2>
                      </CardContent>
                    </Card>
                  )}
                </>
              )}
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Lecture List</CardTitle>
                </CardHeader>
                <CardContent>
                  {user && user.role === "admin" && (
                    <Button className="w-full mb-4" onClick={() => setShow(!show)}>
                      {show ? "Close" : "Add Lecture +"}
                    </Button>
                  )}

                  {show && (
                    <div className="space-y-4 mb-6">
                      <h3 className="text-lg font-semibold">Add Lecture</h3>
                      <form onSubmit={submitHandler} className="space-y-4">
                        <Input
                          type="text"
                          placeholder="Title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          required
                        />
                        <Input
                          type="text"
                          placeholder="Description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          required
                        />
                        <Input
                          type="file"
                          onChange={changeVideoHandler}
                          required
                        />
                        {videoPrev && (
                          <video src={videoPrev} width={300} controls className="mt-2"></video>
                        )}
                        <Button type="submit" disabled={btnLoading} className="w-full">
                          {btnLoading ? "Please Wait..." : "Add"}
                        </Button>
                      </form>
                    </div>
                  )}

                  <ScrollArea className="h-[400px]">
                    {lectures && lectures.length > 0 ? (
                      lectures.map((e, i) => (
                        <div key={i} className="mb-2">
                          <div
                            onClick={() => fetchLecture(e._id)}
                            className={`p-2 rounded cursor-pointer hover:bg-gray-100 ${lecture._id === e._id ? "bg-gray-200" : ""
                              }`}
                          >
                            <span className="font-medium">{i + 1}. {e.title}</span>
                            {progress[0] && progress[0].completedLectures.includes(e._id) && (
                              <TiTick className="inline-block ml-2 text-green-500" />
                            )}
                          </div>
                          {user && user.role === "admin" && (
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => deleteHandler(e._id)}
                              className="mt-1 w-full"
                            >
                              Delete {e.title}
                            </Button>
                          )}
                        </div>
                      ))
                    ) : (
                      <p className="text-center text-gray-500">No Lectures Yet!</p>
                    )}
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Lecture;