import Link from "next/link";

export default function Posts({params}) {
  return (
    <main>
      
      <p>Blog Post</p>
      <p> {params.slug}</p>

     </main>
  );
}
