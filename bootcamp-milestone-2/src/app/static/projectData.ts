
export interface Project {
    title:string;
    description:string;
    slug:string;
    image:string;
}

const projects: Project[] = [
    {
        image:"/pokemon.png",
        title:"Pokemon Game",
        description:"Interactive pokemon game made using Java",
        slug:"https://github.com/sgill33/PokemonGame"
    },
    {
        image:"/calculator.png",
        title:"Calculator",
        description:"GUI Calculator made using Python",
        slug:"https://github.com/sgill33/Calculator-Project"
    },
    {
        image:"/port.png",
        title:"Portfolio Website",
        description:"A simple website made using React.js,HTML and CSS",
        slug:"./"
    },

];

export default projects;