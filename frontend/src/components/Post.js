import React from "react";

const Post = ({ title, user, desc, likes, comments }) => {
  return (
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">
          Posted By:{" "}
          <span
            className="text-grey"
            style={{ fontSize: "15px", color: "gray" }}
          >
            {user?.name}
          </span>
        </h6>
        <h5 class="card-subtitle mb-2 text-muted">{title}</h5>
        <p class="card-text">{desc}</p>

        <div
          className="card-footer d-flex gap-4 "
          style={{ position: "relative" }}
        >
          <button className="btn btn-secondary">
            {likes && likes > 0 && likes}{" "}
            <i className="bi bi-hand-thumbs-up"></i>
          </button>
          <button className="btn btn-secondary">
            {comments && comments > 0 && comments}&nbsp;
            <i class="bi bi-chat-left-text"></i>
          </button>

          <Comment />
        </div>
      </div>
    </div>
  );
};

export const Comment = () => {
  <div
    className="bg-success"
    style={{ position: "absolute", bottom: "0", zIndex: 100 }}
  >
    hello
  </div>;
};

export default Post;
