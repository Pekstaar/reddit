import axios from "axios";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

const New = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="" style={{ backgroundColor: "#cdcdcd" }}>
      <Navbar />

      <form
        className="container  p-4 d-flex flex-column gap-2"
        style={{ maxWidth: "1100px" }}
        onSubmit={async (e) => {
          e.preventDefault();
          await axios.post("http://localhost:5000/api/posts", {
            title,
            desc: description,
            user: "626c056e4bc1e746e8b2d1fd",
          });
        }}
      >
        <div class="form-group col-md-6">
          <label for="inputEmail4">Title</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            placeholder="title"
            // value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div class="form-group col-md-6">
          <label for="inputPassword4">Description</label>
          <textarea
            type="text"
            class="form-control"
            id="inputPassword4"
            placeholder="Description"
            // value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default New;
