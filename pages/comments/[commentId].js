import { BASEURL } from "pages/blogs";

export const getServerSideProps = async ({ query: { commentId } }) => {
  const { comment } = await (
    await fetch(`${BASEURL}/comments/${commentId}`)
  ).json();
  return {
    props: {
      comment,
    },
  };
};

const CommentDetailPage = ({ comment }) => {
  return (
    <main className="p-5">
      <h1 className="text-4xl text-blue-400 mb-3">{comment.user.name} for: {comment.blog}</h1>
      <h4 className="mb-10">{comment.user.email}</h4>
      <p>{comment.text}</p>
    </main>
  );
};

export default CommentDetailPage;
