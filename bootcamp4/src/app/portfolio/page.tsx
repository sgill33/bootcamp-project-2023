// This is the Server Component
import React from "react";
import ProjectPreview from "../components/projectPreview";
import Comment from "../components/comment";
import portfolioSchema from "../database/portfolioSchema";
import commentSchema from "../database/commentSchema";
import connectDB from "../helper/db";
import CommentForm from "../components/commentForm";

export default async function Portfolio() {
  // Connect to the database and get projects and comments on the server side
  await connectDB();

  // Fetching projects
  const projects = await portfolioSchema.find().lean().orFail().catch(() => null);

  // Fetching comments
  const comments = await commentSchema.find().lean().orFail().catch(() => null);

  if (!projects) {
    return (
      <main>
        <h1>No Projects Found</h1>
      </main>
    );
  }

  return (
    <main>
      <h1 className="page-title">Shawn's Portfolio</h1>
      {projects?.map((proj, index) => (
        <ProjectPreview key={index} {...proj} />
      ))}
      <div className="comments">
        <h2>Comments</h2>
        {comments?.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))}
      </div>
      <CommentForm />
    </main>
  );
}
