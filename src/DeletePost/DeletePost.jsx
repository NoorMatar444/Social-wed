import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

export default function DeletePost({ id }) {
  const queryClient=useQueryClient();
  const [Spinner, setisLoading] = useState(false);
  function deletePost(id) {
    setisLoading(true);
    return axios
      .delete(`https://linked-posts.routemisr.com/posts/${id}`, {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      })
      .then((res) => {
        console.log(res);
        queryClient.invalidateQueries({queryKey:[`getUserPosts`]})
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }

  return (
    <>
      {Spinner ? (
        <i class="fa-solid fa-spinner fa-spin"></i>
      ) : (
        <button
          onClick={() => deletePost(id)}
          disabled={Spinner}
          className="bg-red-600 text-white p-3 rounded-3xl cursor-pointer"
        >
          Delete post
        </button>
      )}
    </>
  );
}
