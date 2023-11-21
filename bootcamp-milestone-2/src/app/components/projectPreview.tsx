import React from "react";
import style from "./projectPreview.module.css";
import Image from "next/image";
import type { Project } from "../helper/projectData";
import Link from "next/link";
import { IPort } from "../database/portfolioSchema";

export default function ProjectPreview(props: IPort) {
  return (
    <div className={style.project}>
      <Link href={props.slug}>
        <Image src={props.image} width={617} height={500} alt="project image" />
      </Link>
      <div className={style.project_details}>
        <strong className={style.project_name}>{props.title}</strong>
        <p className={style.project_description}>{props.description}</p>
        <Link href={props.slug}>Learn More</Link>
      </div>
    </div>
  );
}
