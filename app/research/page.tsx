import Image from "next/image";
import Link from "next/link";

export default function Research() {
  const articles = [
    {
      title: "Equity Research: Apple Inc. (AAPL)",
      description:
        "When generative AI first emerged, people mostly used it for simple things like creating recipes or planning trips. But as they became more familiar with what it could do, they’ve also grown more...",
      thumbnail: "/article-thumbnails/000.jpg",
      date: "2024-01-01",
      time: "12:00 EST",
    },
    {
      title: "Salesforce Acquires Slack: The Future of Work Is Here",
      description:
        "When generative AI first emerged, people mostly used it for simple things like creating recipes or planning trips. But as they became more familiar with what it could do, they’ve also grown more...",
      thumbnail: "/article-thumbnails/001.jpg",
      date: "2024-01-01",
      time: "12:00 EST",
    },
    {
      title: "Equity Research: Tesla Inc. (TSLA)",
      description:
        "When generative AI first emerged, people mostly used it for simple things like creating recipes or planning trips. But as they became more familiar with what it could do, they’ve also grown more...",
      thumbnail: "/article-thumbnails/002.jpg",
      date: "2024-01-01",
      time: "12:00 EST",
    },
    {
      title: "From Bots to Agents: The Next Great Leap Forward Is Autonomous AI",
      description:
        "When generative AI first emerged, people mostly used it for simple things like creating recipes or planning trips. But as they became more familiar with what it could do, they’ve also grown more...",
      thumbnail: "/article-thumbnails/003.jpg",
      date: "2024-01-01",
      time: "12:00 EST",
    },
  ];

  return (
    <main className="grow flex flex-col items-center justify-between">
      <div className="pb-2 w-full flex flex-col items-center">
        {/* articles */}
        <div className="p-14 px-8 w-full flex flex-col max-w-4xl text-sm space-y-8">
          {articles.map((article, idx) => (
            <div key={idx} className="w-full flex flex-col items-center">
              <Link href="/">
                <div className="pb-8 w-full flex items-center justify-between space-x-4">
                  <div className="w-1/4 pl-4">
                    <Image src={article.thumbnail} alt={article.thumbnail} width={300} height={300} />
                  </div>
                  <div className="w-3/4 flex flex-col">
                    <h2 className="text-xl font-semibold">{article.title}</h2>
                    <p className="italic pb-2">
                      {article.date} {article.time}
                    </p>
                    <p className="">{article.description}</p>
                  </div>
                </div>
              </Link>
              {idx !== articles.length - 1 && <div className="max-w-2xl border-t border-gray-800 w-16" />}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
