import React from "react";
import BlogPreview from "../components/blogPreview";
import blogs from "../static/blogData";

export default function Blog() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <main>
        {blogs.map(
          (blog) => (
            <BlogPreview {...blog} />
          ) // This is how we call the component
        )}
    </main>
  );
}
