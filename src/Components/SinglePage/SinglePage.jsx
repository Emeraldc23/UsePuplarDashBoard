import Transaction from "../../utils/transaction/Transaction";
import NavBar from "../../widgets/NavBar/NavBar";
import SideBar from "../../widgets/SideBar/SideBar";
import "../SinglePage/singlepage.scss";
import {
  BarChart,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Rectangle,
  Tooltip,
  Bar,
} from "recharts";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API = "https://jsonplaceholder.typicode.com/users";
const POSTAPI = "https://jsonplaceholder.typicode.com/posts";
const SinglePage = () => {
  const [loadUser, setLoadUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  /* Loads user by id when selected*/
  useEffect(() => {
    async function fetchUser() {
      try {
        const getData = await fetch(`${API}/${id}`);
        const data = await getData.json();
        console.log(data);
        setLoadUser(data);
      } catch (e) {
        console.error("Error coming from user id", e);
      } finally {
        setLoading(!loading);
      }
    }
    fetchUser();
  }, [id]);

  /* fetches users post */
  useEffect(() => {
    async function fetchPost() {
      try {
        const getPost = await fetch(`${POSTAPI}?userId=${id}`);
        const data = await getPost.json();
        console.log(data);
        setPosts(data);
      } catch (e) {
        console.error("Error coming from post", e);
      } finally {
        setLoading(!loading);
      }
    }
    fetchPost();
  }, [id]);

  const data = [
    {
      name: "January",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "February",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "March",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "April",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "June",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  ];

  return (
    <div className="singlePageContainer">
      <div className="singlePage">
        <div className="userDetails">
          <div className="userInfo">
            <div className="infoHeader">
              <h3 className="title">Information</h3>
              <div className="editButton">Edit</div>
            </div>

            <div className="userItem">
              {/* <div className="userImage">
                <img src={loadNewData.img} alt="" className="itemImage" />
              </div> */}

              <div className="details" key={loadUser.id}>
                <h2 className="itemTitle">{loadUser.name}</h2>
                <div className="detailItem">
                  <p className="itemKey">
                    <span>Email: </span>
                    {loadUser.email}
                  </p>
                  <p className="itemValue">
                    <span>Phone: </span>
                    {loadUser.phone}
                  </p>
                  <p className="itemValue">
                    <span>City: </span>
                    {loadUser?.address?.city || ""}
                  </p>
                  <p className="itemValue">
                    <span>Website: </span>
                    {loadUser.website}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="userSpending">
            <h2>Users Spending (Last 6 Months)</h2>
            <BarChart
              style={{
                width: "100%",
                maxWidth: "700px",
                maxHeight: "30vh",
                aspectRatio: 1.2,
              }}
              responsive
              data={data}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis width="auto" />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="pv"
                fill="#8884d8"
                activeBar={<Rectangle fill="green" stroke="blue" />}
              />
              <Bar
                dataKey="uv"
                fill="#82ca9d"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </div>
        </div>
        <div className="usertransactions">
          <h2>Post by {loadUser.name}</h2>
          {posts.length === 0
            ? "No post available"
            : posts.map((post) => (
                <div className="postPage" key={post.id}>
                  <h4>{post.title}</h4>
                  <p>{post.body}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
