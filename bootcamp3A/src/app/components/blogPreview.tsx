import React from "react";
import style from "./blogPreview.module.css";
import Image from "next/image";
import Link from "next/link";
import { IBlog } from "../database/blogSchema";




export default function BlogPreview(props: IBlog) {
  
  return (
    <div className={style.blogpost}>
      <div>
        <h3 className="blog-title"> {props.title} </h3>
        <Image src={props.image} alt="preview image" width={500} height={350}></Image>
        <p className="blog-text">{props.description}</p>
        <p className="preview_date">{props.date && props.date.toDateString()}</p>
        <Link href= {`blog/${props.slug}`}>Read More</Link>
      </div>
    </div>
  );
}

