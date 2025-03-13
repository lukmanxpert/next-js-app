import Link from 'next/link';
import React from 'react';
export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json()
    return data;
}
const Posts = async () => {
    const posts = await getPosts();
    return (
        <div className='grid grid-cols-4 gap-4'>
            {posts.map(post => {
                return <div key={post.id} className='border-2 rounded-2xl p-2'>
                    <h1>Id: {post.id}</h1>
                    <p>Id: {post.title}</p>
                    <p>Id: {post.body}</p>
                    <Link className='border-2 p-2 rounded-sm mt-2' href={`/posts/${post.id}`}>Details</Link>
                </div>
            })}
        </div>
    );
};

export default Posts;