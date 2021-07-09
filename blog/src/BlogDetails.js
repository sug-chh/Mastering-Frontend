import { useHistory, useParams } from "react-router";
import useFetch from "./usefetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs, error, isPending } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );
  const history = useHistory();

  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <p>{blogs.author}</p>
          <div>{blogs.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
