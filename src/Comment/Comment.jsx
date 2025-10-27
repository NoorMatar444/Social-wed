import React from "react";
import UpdateComment from "../UpdateComment/UpdateComment";
import DeleteComment from "../DeleteComment/DeleteComment";

export default function Comment({ comment }) {
  if (!comment) return null;

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-6 my-6 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">
        💬 Comment
      </h2>

      <p className="text-gray-700 bg-gray-50 p-4 rounded-lg mb-5">
        {comment?.content}
      </p>

      <div className="flex gap-3 justify-between">
        <UpdateComment id={comment._id} />
        <DeleteComment id={comment._id} />
      </div>
    </div>
  );
}

