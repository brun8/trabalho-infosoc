import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="min-h-screen flex flex-col items-center justify-center">
        <div
          className="flex flex-col gap-4"
        >
          <Link href="/jogo/teste">
            <div
              className="
              p-4 bg-black text-white rounded-sm min-w-48
              text-center
            "
            >
              capítulos 1 e 2
            </div>
          </Link>
          <Link href="/jogo/banco-de-dados" hidden>
            <div
              className="
              p-4 bg-black text-white rounded-sm min-w-48
              text-center
            "
            >
              banco de dados
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
