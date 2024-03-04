
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sHMJFM9kdf6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white shadow-md dark:bg-gray-800">
      
      <div className="flex items-center gap-4">
        <Link className="flex items-center gap-2" href="/">
          <MountainIcon />
          <span className="text-lg font-semibold">Kirimase CLI + Demo</span>
        </Link>
      </div>

    </header>
  )
}

function MountainIcon() {
  return (
    <svg
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
