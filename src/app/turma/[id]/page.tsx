import { db } from "@/server/db"
import { notFound } from "next/navigation"
import { CadastroAlunosDialog } from "./components/cadastro-alunos-dialog"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type Params = Promise<{
  id: string
}>

export default async function TurmaPage({ params }: { params: Params }) {
  const { id } = await params
  const turma = await db.turma.findFirst({
    where: {
      id
    },
    include: {
      alunos: true
    }
  })

  if (!turma) {
    notFound()
  }

  const emails = turma.alunos.map((aluno) => aluno.emailAluno)
  const resultados = await db.result.findMany({
    where: {
      userEmail: {
        in: emails
      }
    },
    orderBy: [
      {
        jogo: "desc",
      },
      {
        data: "asc",
      },
      {
        userEmail: "asc",
      },
    ],
  })

  return (
    <div className="p-10 space-y-6">
      <div className="space-y-4">
        <h1 className="md:text-3xl text-2xl font-bold">
          Turma {turma.name}
        </h1>

        <CadastroAlunosDialog turmaId={turma.id} />
      </div>

      <div
        className="space-y-4"
      >
        <h3 className="font-semibold text-lg">
          Alunos cadastrados:
        </h3>
        <div
          className="space-y-2"
        >
          <div className="bg-white/20 rounded-md shadow-md overflow-hidden">
            <Table>
              <TableCaption></TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Email</TableHead>
                  <TableHead className="text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {emails.map((email) => (
                  <TableRow key={email}>
                    <TableCell>
                      {email}
                    </TableCell>
                    <TableCell>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      <div
        className="space-y-4 mt-2"
      >
        <h3 className="font-semibold text-lg">
          Resultados:
        </h3>
        <div
          className="space-y-2"
        >
          <div className="bg-white/20 rounded-md shadow-md overflow-hidden">
            <Table>
              <TableCaption></TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="">Jogo</TableHead>
                  <TableHead className="">Email</TableHead>
                  <TableHead className="">Nota</TableHead>
                  <TableHead className="">Data</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {resultados.map((res) => (
                  <TableRow key={res.id}>
                    <TableCell>
                      {res.jogo}
                    </TableCell>
                    <TableCell>
                      {res.userEmail}
                    </TableCell>
                    <TableCell>
                      {res.nota}
                    </TableCell>
                    <TableCell>
                      {res.data.toLocaleString("pt-br")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div >
  )
}
