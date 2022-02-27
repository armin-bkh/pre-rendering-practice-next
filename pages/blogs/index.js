import BlogItem from "components/BlogItem/BlogItem";

export const BASEURL = "https://api.freerealapi.com";

export const getStaticProps = async () => {
  const { blogs } = await (await fetch(`${BASEURL}/blogs`)).json();
  return {
    props: {
      blogs,
    },
  };
};

const BlogsPage = ({ blogs }) => {
  console.log(blogs);
  return (
    <main className="p-5">
      <h1 className="text-4xl text-blue-400 font-bold mb-10">list of blogs</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {blogs.map((blog) => (
          <BlogItem key={blog._id} blog={blog} />
        ))}
      </section>
    </main>
  );
};

export default BlogsPage;
