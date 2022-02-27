import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen p-5">
      <h1 className="text-blue-400 text-4xl mb-5 font-bold">parctice pre-rendering</h1>
      <p className="md:w-2/4 text-justify">
        By default, Next.js pre-renders every page. This means that Next.js
        generates HTML for each page in advance, instead of having it all done
        by client-side JavaScript. Pre-rendering can result in better
        performance and SEO. Each generated HTML is associated with minimal
        JavaScript code necessary for that page. When a page is loaded by the
        browser, its JavaScript code runs and makes the page fully interactive.
        (This process is called hydration.)
      </p>
      <Link href="/blogs" passHref>
        <button
          type="button"
          className="px-14 py-2 shadow-md hover:shadow-xl transition rounded-md mt-10 bg-blue-400 text-white"
        >
          blogs
        </button>
      </Link>
    </main>
  );
}
