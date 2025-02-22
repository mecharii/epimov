"use client";
import { FaComments } from "react-icons/fa";
import { BsFillSendPlusFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { addNewComment, getComments } from "@/utils/helpers/Datafetcher";

const Comments = ({ movieId }) => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [message, setMessage] = useState("");

  //yeni yorum ekleme
  async function handleNewComment() {
    addNewComment(movieId, newComment, setMessage);
    setNewComment("");
    const commentsData = await getComments(movieId, setMessage);
    setComments(commentsData);
  }

  //Yorumları çekme
  useEffect(() => {
    async function fetchCom() {
      const commentsData = await getComments(movieId, setMessage);
      setComments(commentsData);
    }

    fetchCom();
  }, [movieId]);

  // durum mesajı süresi
  useEffect(() => {
    let timer;
    if (message) {
      timer = setTimeout(() => {
        setMessage("");
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [message]);

  return (
    <div className="lg:w-1/2 w-full rounded-lg p-3 grid bg-gray-900 justify-center  mt-10">
      <div className="grid grid-cols-4 justify-between gap-6">
        <div className="col-span-3">
          <h1 className="text-lg  font-bold mb-3">
            Yorumlar {comments?.length}
          </h1>
          {message && (
            <div className="text-center my-5">
              <div className="font-mono rounded-lg bg-gray-800 inline-block p-2">
                {message}
              </div>
            </div>
          )}
          <textarea
            name="comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-3 rounded-lg focus:outline-black bg-gray-600 focus:bg-transparent"
            rows={4}
            placeholder="Yorumunuzu Buraya Yazın Küfür Hakaret Spoler İçeren Yorumlar Silinir "
          ></textarea>
        </div>

        <div className="text-center col-span-1">
          <FaComments className="h-32 w-9/12 text-red-600" />
          <button
            onClick={handleNewComment}
            className="w-full rounded-lg p-2 bg-gray-700 hover:bg-gray-800 hover:text-teal-400 font-bold text-teal-500 flex items-center justify-center gap-x-1"
          >
            Gönder<BsFillSendPlusFill></BsFillSendPlusFill>
          </button>
        </div>
      </div>

      <hr className="w-full mt-5 mb-10" />
      <div>
        {comments?.map((comment, index) => (
          <div className="mb-10 border-b" key={index}>
            <h4 className=" text-teal-500 font-bold">
              Anonim{" "}
              <span className="text-slate-400 ms-4 font-normal">
                {" "}
                20.3.2022
              </span>
            </h4>
            <div className="mt-3 p-2 font-mono">{comment.commentText}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
