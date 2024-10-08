'use client'; 

import React, { useState } from "react";
import { IComment } from "../database/blogSchema";

export default function CommentForm() {
  const [newComment, setComment] = useState<IComment | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const formElement = e.target as HTMLFormElement;
      const nameInput = formElement.querySelector<HTMLInputElement>('input[name="name"]');
      const descriptionText = formElement.querySelector<HTMLTextAreaElement>('textarea[name="description"]');

      const newComment: IComment = {
        user: nameInput?.value || "",
        comment: descriptionText?.value || "",
        time: new Date(),
      };

      // Send the new comment to an API route for server-side handling
      const response = await fetch(`/api/portfolio/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      });

      if (response.status === 200) {
        // Clear the form and update the UI
        if (nameInput) nameInput.value = "";
        if (descriptionText) descriptionText.value = "";
        setComment(newComment); // Update the UI with the new comment
        window.location.reload(); // Reload to show the new comment (or handle it dynamically)
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <textarea id="description" placeholder="Comment" name="description"></textarea>
        <input type="submit" />
      </form>
    </div>
  );
}
