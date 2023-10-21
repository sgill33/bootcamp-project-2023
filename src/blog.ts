type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
}

const blogpost: Blog[] = [
    {
        title: "My First Blog",
        date: "10-19-2023",
        description: "This blog is my very first",
        slug: "Read More"
    },
    {
        title: "My Second Blog",
        date: "10-19-2023",
        description: "Back-to-back blogs? WOW!",
        slug: "Read More"
    }

];

function addPost(){
    const container = document.getElementsByClassName("blogpost");

    blogpost.forEach((blog) => {
        const blogElement = document.createElement('div');
        const title = document.createElement('h2');
        const date = document.createElement('h5');
        const description = document.createElement('p');
        const slug = document.createElement('a');


        title.textContent = blog.title;
        date.textContent = blog.date;
        description.textContent = blog.description;
        slug.textContent = blog.slug;

        blogElement.appendChild(title);
        blogElement.appendChild(date);
        blogElement.appendChild(description);
        blogElement.appendChild(slug);
        container[0].appendChild(blogElement);

    })
}