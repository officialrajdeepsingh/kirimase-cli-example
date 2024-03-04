import { getPostById } from '@/lib/api/posts/queries';
import { notFound } from 'next/navigation';
import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon} from 'lucide-react';
import type { Metadata} from 'next'
 
export async function generateMetadata({params}:{params : {slug: string }}): Promise<Metadata> {

  const { post } = await getPostById(params.slug);

  return {
    title: post?.title,
    description: post?.description
  }
}

export default async function Page({ params }: { params: { slug: string };}) {

  return (
    <main className="overflow-auto">
      <Post id={params.slug} />
    </main>
  );
}

const Post = async ({ id }: { id: string }) => {

  const { post } = await getPostById(id);
  
  if (!post) notFound();

  return (
  <div className='container my-12 p-5'>
      
      <div className='my-6 flex flex-row justify-between'>
        <Link href="/"> 
          <Button variant="ghost" size="icon">
             <ChevronLeftIcon className="h-4 w-4" />
          </Button>
        </Link>
        <Button variant="link" className='hover:!no-underline' size="icon">
          #{post.tag}    
        </Button>
      </div>
      
      <h1 className="scroll-m-20 text-3xl sm:text-3xl md:text-5xl font-extrabold tracking-tight lg:text-6xl">
        {post.title}
      </h1>

      <h3 className="mt-10 scroll-m-20 border-b pb-2 text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {post.description}
      </h3>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {post.content}
      </p>

  </div>
  );
};
