"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { capitalizeFirstLetter } from "../utils/string-utils";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-center text-sm">
      <div
        className="pb-2 max-w-4xl flex flex-col items-center border-b border-gray-600"
        style={{ width: "calc(100% - 2rem)" }}
      >
        {pathname === "/" || pathname === "/contact" ? <MainHeader /> : <SubpageHeader pathname={pathname} />}
      </div>
    </div>
  );
}

function MainHeader() {
  return (
    <div className="p-10 w-full max-w-2xl flex items-center justify-between">
      <Link href="/research">
        <p>Research</p>
      </Link>
      <Link href="/education">
        <p>Education</p>
      </Link>
      <Link href="/">
        <h1 className="w-full text-2xl font-semibold">Fifty-Three Pitt</h1>
      </Link>
      <Link href="/portfolio">
        <p>Portfolio</p>
      </Link>
      <Link href="/contact">
        <p>Contact</p>
      </Link>
    </div>
  );
}

function SubpageHeader(props: { pathname: string }) {
  return (
    <div className="p-10 w-full max-w-3xl flex items-center">
      <Link href="/">
        <h1 className="w-full text-2xl font-semibold">Fifty-Three Pitt</h1>
      </Link>
      <h1 className="text-2xl px-2">|</h1>
      <h1 className="text-2xl">{capitalizeFirstLetter(props.pathname.split("/")[1])}</h1>
    </div>
  );
}
