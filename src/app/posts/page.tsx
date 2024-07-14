import PostList from "./post-list"

export default async function AllPostsPage() {

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="font-extrabold tracking-tight text-5xl">Latest posts</h1>
            <PostList />
        </main>
    )
}