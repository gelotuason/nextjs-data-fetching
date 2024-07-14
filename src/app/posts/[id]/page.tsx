import Link from "next/link";

export const dynamicParams = false;

export async function generateStaticParams() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'force-cache' });

    const posts = await response.json();

    return posts.map((post: any) => ([{
        params: post.id,
    }]));
}

async function getPost(params: any) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params}`);

    return response.json();
}

export default async function PostDetails({ params }: { params: any }) {
    const post = await getPost(params.id);

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div key={post.id} className="bg-white mb-4 p-4 rounded-lg shadow-lg">
                <small className="mb-4">Posted by User {post.id}</small>
                <h1 className="font-bold text-lg mb-1">{post.title}</h1>
                <p className="mb-4">{post.body}</p>
                <Link href='/posts' className="text-gray-500">Go back</Link>
            </div>
        </main>
    )
}