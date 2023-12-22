import React from "react";
import style from "./comment.module.css";
import { IComment } from "../database/blogSchema";




export default function Comment(props: IComment) {
  
  return (
    <div className={style.comment}>
        <h3 className={style.user}>{props.user}</h3>
        <p className={style.date}>{new Date(props.time).toDateString()}</p>
        <p className={style.content}>{props.comment}</p>
    </div>
  );
}
