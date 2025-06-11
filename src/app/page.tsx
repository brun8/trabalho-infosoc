import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="min-h-screen flex flex-col items-center justify-center">
        <div
          className="space-y-4"
        >
          <Link href="/jogo">
            <div
              className="
              p-4 bg-black text-white rounded-sm min-w-48
              text-center
            "
            >
              Começar jogo 1
            </div>
          </Link>
          <Link href="/jogo/teste">
            <div
              className="
              p-4 bg-black text-white rounded-sm min-w-48
              text-center
            "
            >
              Começar jogo 2
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
