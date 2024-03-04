import { Suspense } from "react";

import Loading from "@/app/loading";
import PostList from "@/components/posts/PostList";
import { getPosts } from "@/lib/api/posts/queries";

import { checkAuth } from "@/lib/auth/utils";

export const revalidate = 0;

export default async function PostsPage() {
  return (
    <main>
      <div className="relative">
        <div className="flex justify-between">
          <h1 className="font-semibold text-2xl my-2">Posts</h1>
        </div>
        <Posts />
      </div>
    </main>
  );
}

const Posts = async () => {
  await checkAuth();

  const { posts } = await getPosts();
  
  return (
    <Suspense fallback={<Loading />}>
      <PostList posts={posts}  />
    </Suspense>
  );
};
