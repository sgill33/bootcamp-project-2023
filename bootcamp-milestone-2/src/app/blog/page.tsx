import React from "react";
import BlogPreview from "../components/blogPreview";
import connectDB from "../helper/db";
import blogSchema from "../database/blogSchema";

async function getBlogs() {
  await connectDB();

  try {
    // query for all blogs and sort by date
    const blogs = await blogSchema.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}

export default async function Blog() {
  const blogPosts = await getBlogs();
  if (blogPosts) {
    return (
      <main>
        {blogPosts.map((blog) => (
          <BlogPreview
            title={blog.title}
            slug={blog.slug}
            date={blog.date}
            description={blog.description}
            content={blog.content}
            comments={blog.content}
            image={blog.image}
          />
        ))}
      </main>
    );
  } else {
    return (
      <main>
        <h1>No Blogs Found</h1>
      </main>
    );
  }
}
