"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { capitalizeFirstLetter } from "../utils/string-utils";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-center text-md">
      <div
        className="pb-2 max-w-4xl flex flex-col items-center border-b border-gray-600"
        style={{ width: "calc(100% - 2rem)" }}
      >
        {pathname === "/" ? <MainHeader /> : <SubpageHeader pathname={pathname} />}
      </div>
    </div>
  );
}

function MainHeader() {
  return (
    <div className="py-10 w-full max-w-3xl flex items-center justify-between">
      <Link href="/research">
        <p>Research</p>
      </Link>
      <Link href="/education">
        <p>Education</p>
      </Link>
      <Link href="/">
        <div className="w-full flex flex-col">
          <h1 className="w-full text-3xl font-semibold">Devil&apos;s Casino</h1>
          <h2 className="w-full text-xs font-mono text-center tracking-wider">CAPITAL MANAGEMENT LLC</h2>
        </div>
      </Link>
      <Link href="/portfolio">
        <p>Portfolio</p>
      </Link>
      <Link href="/clients">
        <p>Clients</p>
      </Link>
    </div>
  );
}

function SubpageHeader(props: { pathname: string }) {
  return (
    <div className="p-10 w-full max-w-3xl flex items-center">
      <Link href="/">
        <div className="w-full flex flex-col">
          <h1 className="w-full text-3xl font-semibold">Devil&apos;s Casino</h1>
          <h2 className="w-full text-xs font-mono text-center tracking-wider">CAPITAL MANAGEMENT LLC</h2>
        </div>
      </Link>
      <h1 className="text-2xl px-6">|</h1>
      <h1 className="text-3xl">{capitalizeFirstLetter(props.pathname.split("/")[1])}</h1>
    </div>
  );
}
