import { useRouter } from "next/router";
import { BASEURL } from "pages/blogs";

export const getServerSideProps = async () => {
  const { comments } = await (await fetch(`${BASEURL}/comments`)).json();

  return {
    props: {
      comments,
    },
  };
};

const CommentsListPage = ({ comments }) => {
  const router = useRouter();
  return (
    <main className="p-5">
      <ul>
        {comments.map((comment) => (
          <li
            onClick={() => router.push(`/comments/${comment._id}`)}
            className="shadow-md mb-5 rounded-md cursor-pointer"
            key={comment._id}
          >
            <h3 className="text-xl text-blue-400">{comment.user.email}</h3>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default CommentsListPage;
