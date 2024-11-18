"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { capitalizeFirstLetter } from "../utils/string-utils";
import useTailwindScreenSize from "../utils/useTailwindScreenSize";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-center text-md">
      <div
        className="sm:pb-2 max-w-4xl flex flex-col items-center border-b border-gray-600"
        style={{ width: "calc(100% - 2rem)" }}
      >
        {pathname === "/" ? <MainHeader /> : <SubpageHeader pathname={pathname} />}
      </div>
    </div>
  );
}

function MainHeader() {
  const screenSize = useTailwindScreenSize();

  return (
    <div className="px-2 py-8 sm:py-10 w-full max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* site title for small screens */}
      {screenSize === "xs" && (
        <Link href="/">
          <div className="flex flex-col w-full pb-2">
            <h1 className="w-full text-3xl font-semibold text-center">Devil&apos;s Casino</h1>
            <h2 className="w-full text-xs font-mono text-center tracking-wider">CAPITAL MANAGEMENT LLC</h2>
          </div>
        </Link>
      )}

      <Link href="/research">
        <p className="text-center">Research</p>
      </Link>
      <Link href="/education">
        <p className="text-center">Education</p>
      </Link>

      {/* site title for larger screens */}
      {screenSize !== "xs" && (
        <Link href="/">
          <div className="w-full flex flex-col">
            <h1 className="w-full text-3xl font-semibold text-center">Devil&apos;s Casino</h1>
            <h2 className="w-full text-xs font-mono text-center tracking-wider">CAPITAL MANAGEMENT LLC</h2>
          </div>
        </Link>
      )}

      <Link href="/portfolio">
        <p className="text-center">Portfolio</p>
      </Link>
      <Link href="/clients">
        <p className="text-center">Clients</p>
      </Link>
    </div>
  );
}

function SubpageHeader(props: { pathname: string }) {
  const screenSize = useTailwindScreenSize();

  return (
    <div className="py-8 sm:py-10 sm:px-10 w-full max-w-3xl flex flex-col sm:flex-row items-center gap-6">
      <Link href="/">
        <div className="w-full flex flex-col">
          <h1 className="w-full text-2xl sm:text-3xl font-semibold text-center">Devil&apos;s Casino</h1>
          <h2 className="w-full text-2xs sm:text-xs font-mono text-center tracking-wider">CAPITAL MANAGEMENT LLC</h2>
        </div>
      </Link>
      {screenSize !== "xs" && <h1 className="text-2xl">|</h1>}
      <h1 className="text-3xl">{capitalizeFirstLetter(props.pathname.split("/")[1])}</h1>
    </div>
  );
}
