import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(false);

  // API fetch function
  const fetchPosts = async (all = false) => {
    setLoading(true);

    const response = await fetch(
      all
        ? "https://jsonplaceholder.typicode.com/posts"
        : "https://jsonplaceholder.typicode.com/posts?_limit=3"
    );

    const data = await response.json();
    setPosts(data);
    setLoading(false);
  };

  // first load → limited posts
  useEffect(() => {
    fetchPosts(false);
  }, []);

  // view all handler
  const handleViewAll = () => {
    setShowAll(true);
    fetchPosts(true);
  };

  return (
    <div>
      <h2>Blog Posts</h2>

      {loading && <p>Loading...</p>}

      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "15px" }}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}

      {!showAll && (
        <button onClick={handleViewAll}>
          View All Posts
        </button>
      )}
    </div>
  );
};

export default Blog;
