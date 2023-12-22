'use client';
import React, { useState } from "react";
import Image from "next/image";
import Comment from "../../components/comment";
import { IComment,IBlog } from "../../database/blogSchema";
import { usePathname } from 'next/navigation'
import { NextPageContext,GetServerSideProps } from 'next'
import { useRouter } from 'next/router';



type Props = {
    params: {title:string}
}

export default async function Page({params:{title}}:Props) {
  


  async function getBlog(title: string){
    const res = await fetch(`http://localhost:3000/api/blog/${title}`,
    {
        cache:"no-store"
    })
    if (res.ok){
        return res.json()
    }
    return null
}


  const [newBlog, setBlog] = useState<IBlog | null>(null);
	
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        /*
        Handles form submission by clearing form and appending comment
        */
        e.preventDefault();
    
        try {
          //get form submission event
          const formElement =  e.target as HTMLFormElement;
    
          // Access values directly from the form elements
          const nameInput = 
            formElement.querySelector<HTMLInputElement>(
              'input[name="name"]'
            );
          const descriptionText =
            formElement.querySelector<HTMLTextAreaElement>(
              'textarea[name="description"]'
            );
  
          // Explicitly cast e.target to HTMLFormElement
          const newComment: IComment = {
            user: nameInput?.value || "",
            comment: descriptionText?.value || "",
            time: new Date(),
          };
    
            //Add comment to db and update UI
            const response = await fetch(
              `/api/blog/${title}/comment`, {
                method: "POST",
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify(newComment),
              });
    
            
            // //clear form data
            // if (nameInput) nameInput.value = "";
            // if (descriptionText) descriptionText.value = "";
    
            if (response.status === 200)
              setBlog({
                title: newBlog?.title || "",
                slug: newBlog?.slug || "",
                date: newBlog?.date || new Date(),
                description: newBlog?.description || "",
                content: newBlog?.content || "",
                image: newBlog?.image || "",
                comments: newBlog
                  ? [...newBlog.comments, newComment]
                  : [newComment],
              });
            window.location.reload();
              
        } catch (err) {
          console.error(err);
        }
      }

    const blog = await getBlog(title)
    if (blog){
        return (
            <main>
                <div className="blog-body">
                    <h1 className="blog-title">{blog.title}</h1>
                    <div className="blog-image">
                        <Image src = {blog.image} alt="blog picture" height={350} width={550}></Image> 
                    </div>
                    <h3 className="blog-date"> {new Date(blog.date).toDateString()}</h3>
                    <p className="blog-text"> {blog.content}</p>
                </div>
                <div className="comments">
                    <h2>Comments</h2>
                    {blog.comments?.map((comment : IComment, index: number) => (
                        <Comment {...comment}/>
                    ))}
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Name" required/>
                        <textarea
                        id="description"
                        placeholder="Comment"
                        name="description"
                        ></textarea>
                        <input type="submit" />
                    </form>
                </div>
            </main>
          );
    }
    else{
        return (
            <main><h1>Page Not Found</h1></main>
        )
    }
  
}