import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="text-lg sm:text-xl font-semibold text-forest dark:text-forest-dark transition hover:text-clay dark:hover:text-clay-dark focus-visible:outline-none font-heading whitespace-nowrap"
    >
      Abahlengi
    </Link>
  );
}
