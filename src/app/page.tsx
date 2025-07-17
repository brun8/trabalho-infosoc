import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="min-h-screen flex flex-col items-center justify-center">
        <div
          className="flex flex-col gap-4"
        >
          <Link href="/jogo/sbc">
            <div
              className="
              p-4 bg-black text-white rounded-sm min-w-48
              text-center
            "
            >
              O Código Invisível
            </div>
          </Link>
          <Link href="/jogo/plagio">
            <div
              className="
              p-4 bg-black text-white rounded-sm min-w-48
              text-center
            "
            >
              A Imitação
            </div>
          </Link>
          <Link href="/jogo/banco-de-dados" hidden>
            <div
              className="
              p-4 bg-black text-white rounded-sm min-w-48
              text-center
            "
            >
              Banco de Dados
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
