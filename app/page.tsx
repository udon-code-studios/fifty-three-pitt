import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* header + contents */}
      <div className="w-full flex flex-col items-center">
        {/* header */}
        <div className="p-10 w-full max-w-2xl flex items-center justify-between text-sm">
          <Link href="/research">
            <p>Research</p>
          </Link>
          <Link href="/education">
            <p>Education</p>
          </Link>
          <Link href="/">
            <h1 className="w-full text-2xl font-semibold">Fifty-Three Pitt</h1>
          </Link>
          <Link href="/funds">
            <p>Portfolio</p>
          </Link>
          <Link href="/contact">
            <p>Contact</p>
          </Link>
        </div>

        {/* divider */}
        <div className="max-w-4xl border-t border-gray-600" style={{ width: "calc(100% - 2rem)" }} />

        {/* content section 1 */}
        <div className="pt-12 pb-20 px-4 w-full flex grow max-w-4xl items-center text-sm">
          <div className="w-1/3">
            <Image src="/williamsburg_bridge_00.jpeg" alt="williamsburg bridge" width={400} height={400} />
          </div>
          {/* <div className="w-0 h-24 mx-6 border-l border-gray-600" /> */}
          <div className="w-2/3 pl-10 flex flex-col items-center justify-between space-y-3">
            <h2 className="w-full text-2xl font-semibold">About</h2>
            <p className="w-full">
              Fifty-Three Pitt is a boutique investment firm which specializes in equity research and public education.
              With nearly 2 days of experience in the financial industry, we have a proven track record of delivering
              consistent middling results for our clients.
            </p>
          </div>
        </div>

        {/* divider */}
        <div className="max-w-2xl border-t border-gray-600 w-16" />

        {/* content section 2 */}
        <div className="w-full pt-16 flex grow max-w-2xl items-center text-sm">
          <div className="w-full px-20 flex flex-col items-center justify-between">
            <h2 className="w-full text-2xl font-semibold pb-4">Philosphy</h2>
            <p className="w-full italic">
              &quot;You don&apos;t have to be brilliant, only a little bit wiser than the other guys, on average, for a
              long, long, time.&quot;
            </p>
            <p className="w-full text-center">Charlie Munger</p>
          </div>
        </div>
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
