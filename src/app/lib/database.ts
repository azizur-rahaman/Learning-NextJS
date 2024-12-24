// import { createClient, sql } from '@vercel/postgres';

// export async function connectToDB() {
//     const client = createClient();

//     await client.connect();

//     try{
//         if(client){
//             console.log('Connected to database');
//             return client;
//         }
//     }catch(err){
//         console.error(err);
//     }
// }

// export async function getPosts(){
//     const data = await sql `SELECT * FROM posts`;

//     console.log(data.rows);
// }


import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);


export async function getPosts(){
     const { data, error } = await supabase
    .from('posts')
    .select('*');

    if(error){
        console.log("Error fetching posts data: ", error.message);
        throw new Error(error.message);
    }

    return data;
}

