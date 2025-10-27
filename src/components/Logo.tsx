import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-lg font-semibold text-forest transition hover:text-clay focus-visible:outline-none"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/40 text-forest">
        <svg
          aria-hidden="true"
          className="h-6 w-6"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 28c3.5-6 9-10 16-10s12.5 4 16 10"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 24s3 6 9 6 9-6 9-6"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 4c0 6 3 10 6 12-4 1-6 4-6 4s-2-3-6-4c3-2 6-6 6-12Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="font-heading text-lg">Abahlengi Group</span>
    </Link>
  );
}
