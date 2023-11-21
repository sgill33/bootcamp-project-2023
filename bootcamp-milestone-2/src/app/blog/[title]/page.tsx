import React from "react";
import Image from "next/image";
import Comment from "@/app/components/comment";
import { IComment } from "@/app/database/blogSchema";

type Props = {
    params: {title:string}
}

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


export default async function Page({params:{title}}:Props) {
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
            </main>
          );
    }
    else{
        return (
            <main><h1>Page Not Found</h1></main>
        )
    }
  
}