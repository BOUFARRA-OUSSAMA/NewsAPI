const apiKey = 'add here the api key from newsapi';
const blogContainer = document.getElementById("blog-container");

async function fetchRandomNews() {
    try {
        const apiURL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`;
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log("API Response:", data); // Log the API response
        return data.articles;

    } catch (error) {
        console.error("Error fetching random News", error);
        return [];
    }
}

function displayBlogs(articles) {
    blogContainer.innerHTML = "";
    articles.forEach((article) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");
        const img = document.createElement("img");
        img.src = article.urlToImage;
        img.alt = article.title;
        const title = document.createElement("h2");
        title.textContent = article.title;
        const description = document.createElement("p");
        description.textContent = article.description;

        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogContainer.appendChild(blogCard);
    })
}

(async () => {
    try {
        const articles = await fetchRandomNews();
        console.log("Articles:", articles); // Log the articles obtained
        displayBlogs(articles);
    } catch (error) {
        console.error("Error fetching random News", error);
    }
})();
