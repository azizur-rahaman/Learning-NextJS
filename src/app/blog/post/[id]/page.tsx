import Post from "@/app/ui/components/posts/Post";
import { posts } from "@/app/lib/placeholder-data";

export default function PostPage({params} : {params: {id: string}}) {

    const post = posts.find((post) => post.id === params.id);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <>
        <h1>Post</h1>
            <Post {...post}></Post>
        </>
    );
}