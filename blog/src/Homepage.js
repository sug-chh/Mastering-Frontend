import useFetch from "./usefetch";
import BlogList from "./BlogList";
const Home = () => {
  const { blogs, isPending, error } = useFetch("http://localhost:8000/blogs");
  

  return (
    <div className="home">
      {error && <div style={{ textAlign: "center" }}>{error}</div>}
      {isPending && <div style={{ textAlign: "center" }}>Loading....</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
          
        />
      )}
    </div>
  );
};

export default Home;
