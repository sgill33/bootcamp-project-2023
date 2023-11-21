import React from "react";
import projects from "../helper/projectData";
import ProjectPreview from "../components/projectPreview";
import connectDB from "../helper/db";
import portfolioSchema from "../database/portfolioSchema";

async function getProjects() {
  await connectDB();

  try {
    // query for all blogs and sort by date
    const projs = await portfolioSchema.find().orFail();
    // send a response as the blogs as the message
    return projs;
  } catch (err) {
    return null;
  }
}

export default async function Portfolio() {
  const projects = await getProjects();
  if (projects) {
    return (
      <main>
        <h1 className="page-title">Shawn's Portfolio</h1>
        {projects.map((project) => (
          <ProjectPreview
            title={project.title}
            description={project.description}
            image={project.image}
            slug={project.slug}
          />
        ))}
      </main>
    );
  } else {
    return (
      <main>
        <h1>No Projects Found</h1>
      </main>
    );
  }
}
