import React, { useState } from "react";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

export default function DeleteComment({ id }) {
  const [isLoading, setisLoading] = useState(false);
  const queryClient = useQueryClient();
function handleDeleteComment() {
  setisLoading(true);

  axios
    .delete(`https://linked-posts.routemisr.com/comments/${id}`, {
      headers: {
        token: localStorage.getItem("userToken"),
      },
    })
    .then((response) => {
      console.log("✅ Comment deleted successfully:", response.data);
      queryClient.invalidateQueries({ queryKey: ["getUserPosts"] });
      queryClient.invalidateQueries({ queryKey: ["getsinglepost"] });
    })
    .catch((error) => {
      console.error("❌ Delete error:", error);
    })
    .finally(() => {
      setisLoading(false);
    });
}


  return (
    <>
      {isLoading ? (
        <i className="fa-solid fa-spinner fa-spin"></i>
      ) : (
        <button
          onClick={handleDeleteComment}
          className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-white rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md transition-all duration-300 hover:from-indigo-500 hover:to-blue-700 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Delete comment
        </button>
      )}
    </>
  );
}
