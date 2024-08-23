import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments.map((comment, i) => <Comment data={comment} key={i} />);
};
const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Shreya Sen",
      text: "good video",
      replies: [
        { name: "Shreya Sen", text: "good video", replies: [] },
        {
          name: "Shreya Sen",
          text: "good video",
          replies: [
            {
              name: "Shreya Sen",
              text: "good video",
              replies: [
                {
                  name: "Shreya Sen",
                  text: "good video",
                  replies: [
                    { name: "Shreya Sen", text: "good video", replies: [] },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Shreya Sen",
      text: "good video",
      replies: [
        {
          name: "Shreya Sen",
          text: "good video",
          replies: [
            {
              name: "Shreya Sen",
              text: "good video",
              replies: [
                { name: "Shreya Sen", text: "good video", replies: [] },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Shreya Sen",
      text: "good video",
      replies: [{ name: "Shreya Sen", text: "good video", replies: [] }],
    },
  ];
  return (
    <div>
      <h1 className="font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
