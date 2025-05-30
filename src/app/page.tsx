import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="min-h-screen flex flex-col items-center justify-center">
        <Link href="/jogo">
          <div
            className="
              p-4 bg-black text-white rounded-sm min-w-48
              text-center
            "
          >
            Começar
          </div>
        </Link>
      </main>
    </div>
  );
}
