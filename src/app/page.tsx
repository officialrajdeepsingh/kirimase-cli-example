/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PmwTvNfrVgf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import CardComponent from "@/components/Card/Card";
import { getPosts } from "@/lib/api/posts/queries";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Demo Post',
  description: 'Demo Post',
}
export default async function LandingPage() {

  const { posts } = await getPosts();
  
  console.log("my posts", posts)
  
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto my-12">
          <h1 className="text-4xl"> All Posts </h1>
      </div>
      
      <div className="mx-auto w-10/12 sm:w-10/12 md:w-8/12 lg:w-5/12">
        {
          posts.map(
            post=> <CardComponent  key={post.id} post={post} />
          )
        }
      </div>
   </div>
  );
}

