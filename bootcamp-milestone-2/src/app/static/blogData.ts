
export interface Blog {
    title:string;
    date:string;
    description:string;
    slug:string;
    image:string;
}

const blogs: Blog[] = [
    {
        title: "My Hobbies",
        date: "10-20-2023",
        description: "Get to know about my hobbies",
        slug: "../blog/blog2",
        image:"/p.jpeg"
    },
    {
        title: "My First Blog",
        date: "10-19-2023",
        description: "This blog is my very first",
        slug: "../blog/blog1",
        image: "/calpoly.jpeg"
    }
];

export default blogs;