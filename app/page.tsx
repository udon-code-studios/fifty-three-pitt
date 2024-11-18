import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grow flex flex-col items-center justify-between">
      <div className="pb-2 w-full flex flex-col items-center">
        {/* about */}
        <div className="pt-14 pb-20 pl-12 px-8 w-full flex flex-col sm:flex-row grow max-w-4xl items-center text-sm justify-center">
          <div className="w-32 sm:w-48 pb-8 sm:pb-0">
            <Image src="/devil_standing.png" alt="casino time" width={500} height={500} />
          </div>
          <div className="sm:w-2/3 sm:pl-8 flex flex-col items-start space-y-2">
            <h2 className="w-full text-2xl font-semibold pb-1">About</h2>
            <p className="w-full">
              Devil&apos;s Casino is a boutique investment firm specializing in equity research, financial education,
              and capital management.
            </p>
            <p className="w-full">
              Our star-studded team of Ugandan quants begin each morning by declineing multi-million dollar sign-on
              bonuses from Gayman Sachs and Mogran Stans. They then engage in relentless alphamaxxing via statistical
              arbitrage. Devil&apos;s Casino is the proud counterparty to every trade Jane Boulevard dares to enter into
              their Robinhood account.
            </p>
          </div>
        </div>

        {/* divider */}
        {/* <div className="max-w-2xl border-t border-gray-800 w-16" /> */}

        {/* philosophy */}
        {/* <div className="w-full pt-16 flex grow max-w-2xl items-center text-sm">
          <div className="w-full px-20 flex flex-col items-center justify-between">
            <h2 className="w-full text-2xl font-semibold pb-4">Philosphy</h2>
            <p className="w-full italic">
              &quot;You don&apos;t have to be brilliant, only a little bit wiser than the other guys, on average, for a
              long, long, time.&quot;
            </p>
            <p className="w-full text-center">Charlie Munger</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
