import { db } from "@/lib/db/index";
import { eq, and } from "drizzle-orm";
import { getUserAuth } from "@/lib/auth/utils";
import { type PostId, postIdSchema, posts } from "@/lib/db/schema/posts";

export const getPosts = async () => {
  const { session } = await getUserAuth();
  const rows = await db.select().from(posts).where(eq(posts.userId, session?.user.id!));
  const p = rows
  return { posts: p };
};

export const getPostById = async (id: PostId) => {
  const { session } = await getUserAuth();
  const { id: postId } = postIdSchema.parse({ id });
  const [row] = await db.select().from(posts).where(and(eq(posts.id, postId), eq(posts.userId, session?.user.id!)));
  if (row === undefined) return {};
  const p = row;
  return { post: p };
};


