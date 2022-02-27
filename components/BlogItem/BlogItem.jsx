import Image from "next/image";
import { useRouter } from "next/router";

const BlogItem = ({ blog }) => {
  const router = useRouter();
  return (
    <article
      onClick={() => router.push(`/blogs/${blog._id}`)}
      className="shadow-md rounded-md overflow-hidden cursor-pointer flex flex-col"
    >
      <div className="relative w-full h-72 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          layout="fill"
          className="hover:scale-150 hover:rotate-12 transform transition"
          priority
          blurDataURL
        />
      </div>
      <div className="p-3">
        <h2 className="text-xl text-blue-400 mb-5">{blog.title}</h2>
        <p className="text-sm text-justify">{blog.text.substring(0, 500)}...</p>
      </div>
      <footer className="flex items-center justify-between text-xs p-3 border-t border-blue-300 mt-auto">
        <span>
          created: <br />
          {blog.createdAt}
        </span>
        <span>
          updated: <br />
          {blog.updatedAt}
        </span>
      </footer>
    </article>
  );
};

export default BlogItem;
