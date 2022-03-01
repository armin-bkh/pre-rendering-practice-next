import Image from "next/image";
import { BASEURL } from ".";

export const getStaticPaths = async () => {
  const { blogs } = await (await fetch(`${BASEURL}/blogs`)).json();
  const paths = blogs.map((blog) => ({ params: { blogId: `${blog._id}` } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { blogId } }) => {
  const { blog } = await (await fetch(`${BASEURL}/blogs/${blogId}`)).json();
  const { comments } = await (await fetch(`${BASEURL}/comments`)).json();
  return {
    props: {
      blog,
      comments: comments.filter((comment) => comment.blog === blog._id),
    },
    revalidate: 10,
  };
};

const BlogDetailPage = ({ blog, comments }) => {
  return (
    <main className="p-5">
      <h1 className="text-blue-400 mb-8 text-2xl font-bold">{blog.title}</h1>
      <div className="w-full relative mb-3 h-72 lg:h-screen">
        <Image src={blog.image} alt={blog.title} layout="fill" blurDataURL />
      </div>
      <p className="mb-1 text-sm">tags:</p>
      <div className="flex items-center mb-7 overflow-x-auto">
        {blog.tags.map((tag, index) => (
          <p
            key={index}
            className="px-2 py-1 mr-2 last:mr-0 rounded-full bg-blue-400 text-white text-xs"
          >
            {tag}
          </p>
        ))}
      </div>
      <p className="text-sm text-justify">{blog.text}</p>
      <footer className="text-xs flex justify-between items-center py-3 border-t border-blue-300 mt-5">
        <span>created: {blog.createdAt}</span>
        <span>updated: {blog.updatedAt}</span>
      </footer>

      <div className="shadow-lg mb-2">
        <h1 className="mb-3 text-blue-400">comments:</h1>
        {comments.map((comment) => (
          <div
            className="border-b border-blue-400 py-1 px-2 rounded-md"
            key={comment._id}
          >
            <p>{comment.user.name}</p>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BlogDetailPage;
