import React from "react";
import blogs from "../../static/blogData";
import Image from "next/image";

export default function Blog2() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <main>
        <div className="blog-body">
                <h1 className="blog-title">My Hobbies</h1>
                <div className="blog-image">
                    <Image src = "/p.jpeg" alt="picture of the P" height={350} width={550}></Image> 
                </div>
                <h3 className="blog-date"> 10-20-2023</h3>
                <p className="blog-text">
                    Hello there! My hobbies include hiking, riding my motorcycle, or watching F1. I only got into hiking when I came to
                    Cal Poly. I've done all the campus hikes but have yet to do the off campus ones. I saved up for a motorycle last summer
                    and this summer I got myself a Kawasaki Ninja and spent a lot of summer learning to ride. Finally, I enjoy watching 
                    Formula 1 on weekends. I personally root for the American team, though it's tough to when they keep losing. That sums up
                    my main hobbies, stay tuned for more about me!
                </p>
            </div>
    </main>
  );
}