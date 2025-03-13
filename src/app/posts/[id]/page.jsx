const getPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}
const PostDetails = async ({ params }) => {
    const {id} =await params;
    const data = await getPost(id);
    return (
        <div className="border-2 rounded-sm p-2 m-2">
            <p>User ID: {data.userId}</p>
            <p>ID: {data.id}</p>
            <p>Title: {data.title}</p>
            <p>Body: {data.body}</p>
        </div>
    );
};

export default PostDetails;