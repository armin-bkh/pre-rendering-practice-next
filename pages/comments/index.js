import { useRouter } from "next/router";

export const getServerSideProps = async () => {
  const comments = await (
    await fetch(`https://jsonplaceholder.typicode.com/comments`)
  ).json();

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
            onClick={() => router.push(`/comments/${comment.id}`)}
            className="shadow-md mb-5 rounded-md cursor-pointer"
            key={comment.id}
          >
            <h3 className="text-xl text-blue-400">{comment.email}</h3>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default CommentsListPage;
