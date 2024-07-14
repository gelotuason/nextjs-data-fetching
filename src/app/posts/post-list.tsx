import Link from "next/link";

async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
}

export default async function PostList() {
    const posts = await getPosts();

    return (
        <section className="mt-6 max-w-[768px]">
            {
                posts.map((post: any) => (
                    <div key={post.id} className="bg-white mb-4 p-4 rounded-lg shadow-lg">
                        <Link href={`/posts/${post.id}`}>
                            <h1 className="font-bold text-lg mb-1">{post.title}</h1>
                            <p>{post.body.slice(0, 100)} ...</p>
                        </Link>
                    </div>
                ))
            }
        </section>
    )
} 