import Image from "next/image";
import Comment from "../../components/comment";
import { IComment, IBlog } from "../../database/blogSchema";
import connectDB from "../../helper/db";
import blogSchema from "../../database/blogSchema";
import CommentForm from "../../components/commentForm"; // Client Component

type Props = {
  params: { title: string };
};

export default async function Page({ params: { title } }: Props) {
  // Function to fetch blog data from the database
  async function getBlog(title: string) {
    await connectDB();

    try {
      const blog = await blogSchema.findOne({ slug: title }).orFail();
      return blog;
    } catch (err) {
      return null;
    }
  }

  const blog = await getBlog(title);

  if (blog) {
    return (
      <main>
        <div className="blog-body">
          <h1 className="blog-title">{blog.title}</h1>
          <div className="blog-image">
            <Image src={blog.image} alt="blog picture" height={350} width={550} />
          </div>
          <h3 className="blog-date">{new Date(blog.date).toDateString()}</h3>
          <p className="blog-text">{blog.content}</p>
        </div>

        <div className="comments">
          <h2>Comments</h2>
          {blog.comments?.map((comment: IComment, index: number) => (
            <Comment key={index} {...comment} />
          ))}
        </div>

        {/* Use the Client Component to handle comment submission */}
        <CommentForm  />
      </main>
    );
  } else {
    return (
      <main>
        <h1>Page Not Found</h1>
      </main>
    );
  }
}
