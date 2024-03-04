
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7LUPCBOu1N0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import Link from "next/link"
import { type Post } from "@/lib/db/schema/posts";
import dayjs  from "dayjs"
export default function CardComponent({post}:{post:Post}) {
  return (
    <div className="p-4 mx-auto">
      <Card>
        <CardContent className="p-4">
          <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
            {post.title}
          </h2>
          <p className="mt-2 text-gray-500">
            {post.description}
          </p>
          <p className="mt-1 text-gray-400">Published on {dayjs(post.createdAt).format('DD MM YYYY')}</p>
          <div className="mt-4">
            <Link href={`/post/${post.id}`}>
            <Button variant="outline">Read More</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

