'use client';
import React, { useState } from "react";
import ProjectPreview from "../components/projectPreview";
import  {IPort} from "../database/portfolioSchema";
import Comment from "../components/comment";
import { IComment } from "../database/blogSchema";

export default async function Portfolio() {
  async function getProjects() {
    const res = await fetch(`./api/portfolio`,
    {
      cache:"no-store"
    });
  
    if(res.ok){
      return res.json()
    }
    return null
  }

  async function getComments() {
    const res = await fetch(`./api/portfolio/comment`,
      {
        method:'GET',
        cache:"no-store"
      });
  
      if(res.ok){
        return res.json()
      }
      return null
  }

  const [newComment, setComment] = useState<IComment | null>(null);
  const projects = await getProjects();
  const comments = await getComments();

  console.log(projects)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    /*
    Handles form submission by clearing form and appending comment
    */
    e.preventDefault();

    try {
      //get form submission event
      const formElement = e.target as HTMLFormElement;

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
          `api/portfolio/comment`, {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(newComment),
          });

        
        //clear form data
        if (nameInput) nameInput.value = "";
        if (descriptionText) descriptionText.value = "";

        if (response.status === 200)
          setComment({
            user: newComment?.user || "",
            comment: newComment?.comment || "",
            time: newComment?.time || new Date(),
            
          });
        window.location.reload();
          
    } catch (err) {
      console.error(err);
    }
  }

  
  if (projects) {
    return (
      <main>
        <h1 className="page-title">Shawn's Portfolio</h1>
        {projects?.map((proj : IPort, index: number) => (
                        <ProjectPreview {...proj}/>
                    ))}
        <div className="comments">
            <h2>Comments</h2>
        {comments?.map((comment : IComment, index: number) => (
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
  else {
    return (
      <main>
        <h1>No Projects Found</h1>
      </main>
    );
  }
}
