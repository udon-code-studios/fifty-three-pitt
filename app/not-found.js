import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grow flex flex-col items-center justify-between">
      <div className="w-full flex flex-col items-center">
        <div className="py-20 justify-center w-full max-w-4xl text-5xl text-center">404 ; Page not found</div>
      </div>
    </main>
  );
}
