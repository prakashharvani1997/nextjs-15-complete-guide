 import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      
      <p>Blog page</p>

      <Link href="/blog/post-1"> Post-1</Link>
      <Link href="/blog/post-2"> Post-2</Link>

    </main>
  );
}
