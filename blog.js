
const blogContainer = document.getElementById("blogContainer");
const viewAllBtn = document.getElementById("viewAllBtn");

const API_URL = "https://jsonplaceholder.typicode.com/posts";

// 👉 reusable function to render blog cards
function renderBlogs(posts) {
  blogContainer.innerHTML = "";

  posts.forEach(post => {
    blogContainer.innerHTML += `
      <div class="blog-card">
       <img src="https://picsum.photos/600/400?random=${post.id}" />


        <div class="blog-content">
          <span class="category">Blog</span>
          <h3>${post.title}</h3>
          <p>${post.body.substring(0, 100)}...</p>
          <a href="#">Read More</a>
        </div>
      </div>
    `;
  });
}

// 👉 page load → only 3 posts
fetch(`${API_URL}?_limit=3`)
  .then(res => res.json())
  .then(data => {
    renderBlogs(data);
  });

// 👉 View All button click
viewAllBtn.addEventListener("click", () => {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      renderBlogs(data);
      viewAllBtn.style.display = "none"; // hide button
    });
});
