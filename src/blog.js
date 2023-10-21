var blogpost = [
    {
        title: "My Hobbies",
        date: "10-20-2023",
        description: "Get to know about my hobbies",
        slug: "blog2.html"
    },
    {
        title: "My First Blog",
        date: "10-19-2023",
        description: "This blog is my very first",
        slug: "blog1.html"
    }

];
function addPost() {
    var container = document.getElementsByClassName("blogpost");
    blogpost.forEach(function (blog) {
        var blogElement = document.createElement('div');
        var title = document.createElement('h2');
        var date = document.createElement('h5');
        var description = document.createElement('p');
        var slug = document.createElement('a');
        
        title.textContent = blog.title;
        date.textContent = blog.date;
        description.textContent = blog.description;

        slug.textContent = "Read More";
        slug.href = blog.slug

        blogElement.appendChild(title);
        blogElement.appendChild(date);
        blogElement.appendChild(description);
        blogElement.appendChild(slug);
        container[0].appendChild(blogElement);
    });
}

addPost();
