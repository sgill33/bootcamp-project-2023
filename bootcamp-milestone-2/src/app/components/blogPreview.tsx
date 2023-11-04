import React from "react";
import style from "./blogPreview.module.css";
import Image from "next/image";
import type { Blog } from "../static/blogData";
import Link from "next/link";

export default function BlogPreview(props: Blog) {
  return (

    <div className={style.blogpost}>
      <div>
        <h3 className="blog-title"> {props.title} </h3>
        <Image src={props.image} alt="preview image" width={500} height={350}></Image>
        <p className="blog-text">{props.description}</p>
        <p className="preview_date">{props.date}</p>
        <Link href={props.slug}>Read More</Link>
      </div>
    </div>
  );
}
