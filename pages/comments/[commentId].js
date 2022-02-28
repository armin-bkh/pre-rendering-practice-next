export const getServerSideProps = async ({ query: { commentId } }) => {
  const comment = await (
    await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
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
      <h1 className="text-4xl text-blue-400 mb-3">
        {comment.id} {comment.name}
      </h1>
      <h4 className="mb-10">{comment.email}</h4>
      <p>{comment.body}</p>
    </main>
  );
};

export default CommentDetailPage;
