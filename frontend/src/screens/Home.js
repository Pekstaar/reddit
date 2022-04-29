import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Post from "../components/Post";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await axios.get("http://localhost:5000/api/posts");

      setPosts(posts.data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="" style={{ backgroundColor: "#cdcdcd" }}>
      <Navbar />

      <div
        className="container  p-4 d-flex flex-column gap-2"
        style={{ maxWidth: "1100px" }}
      >
        {posts?.map((p) => (
          <Post
            title={p.title}
            user={p.user}
            desc={p.desc}
            likes={p?.likes?.length}
            comments={p?.comments?.length}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
