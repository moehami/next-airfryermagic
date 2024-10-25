import Link from "next/link";
import { BlogQueryResult } from "./types";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

const getBlogEntries = async (): Promise<BlogQueryResult> => {
  const entries = await client.getEntries({ content_type: "blog" });
  return entries;
};

export default async function Home() {
  const blogEntries = await getBlogEntries();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {blogEntries.items.map((singlePost) => {
        const { slug, title, date } = singlePost.fields;
        return (
          <div key={slug}>
            <Link href={`/articles/${slug}`}>
              <h2>{title}</h2>
              <span>
                Posted on{" "}
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </Link>
          </div>
        );
      })}
    </main>
  );
}
