import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* header + contents */}
      <div className="w-full flex flex-col items-center">
        {/* header */}
        <div className="p-10 w-full max-w-2xl flex items-center justify-between text-sm">
          <Link href="/research">
            <p className="w-full text-center">Research</p>
          </Link>
          <Link href="/education">
            <p className="w-full text-center">Education</p>
          </Link>
          <Link href="/">
            <h1 className="w-full text-2xl font-semibold">Fifty-Three Pitt</h1>
          </Link>
          <Link href="/funds">
            <p className="w-full text-center">Funds</p>
          </Link>
          <Link href="/contact">
            <p className="w-full text-center">Contact</p>
          </Link>
        </div>

        {/* divider */}
        <div className="max-w-4xl border-t border-gray-600" style={{ width: "calc(100% - 2rem)" }} />

        {/* content section 1 */}
        <div className="py-20 justify-center w-full max-w-4xl text-5xl text-center">404 ; Page not found</div>
      </div>

      {/* footer */}
      <div
        className="p-10 w-full max-w-2xl items-center justify-between text-sm border-t border-gray-600"
        style={{ width: "calc(100% - 8rem)" }}
      >
        <p className="w-full text-center">copyright © 2024 ; all rights reserved ; fifty-three pitt</p>
      </div>
    </main>
  );
}
