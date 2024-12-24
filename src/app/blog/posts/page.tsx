import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";
import { getPosts, supabase } from "@/app/lib/database";

export default async function Page(){
    const client = await supabase;

    const data = await getPosts();

    return (
        <>  
            {client && <h1 className="text-purple-800">Connected to the database</h1>}

            <h1 className="text-purple-800">Posts</h1>

                {/* {posts.map((post) => (
                    <Post key = {post.id} {...post} />
                ))} */}

                {data.map((post) => (
                    <Post key={post.id} {...post} />
                ))}
        </>
    );
}