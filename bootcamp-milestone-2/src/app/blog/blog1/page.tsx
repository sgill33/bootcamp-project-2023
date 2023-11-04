import React from "react";
import blogs from "../../static/blogData";
import Image from "next/image";

export default function Blog1() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <main>
         <div className="blog-body">
                <h1 className="blog-title">My First Blog!</h1>
                <div className="blog-image">
                    <Image src = "/calpoly.jpeg" alt="picture of the P" height={350} width={550}></Image> 
                </div>
                <h3 className="blog-date"> 10-19-2023</h3>
                <p className="blog-text">
                    Hello There! This is my very first blog post. If your are reading this, 
                    then that means my blog was uploaded correctly. Unless of course you're reading the
                    html file for this page. Stay tuned for the next post!
                </p>
            </div>
    </main>
  );
}