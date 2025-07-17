import { auth } from "@clerk/nextjs/server";
import { db } from "@/server/db"
import { notFound } from "next/navigation";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CreateTurmaDialog } from "./components/create-turma-dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function TurmasPage() {
  const user = await auth()
  if (!user.isAuthenticated) {
    notFound()
  }

  const clerkId = user.userId

  const res = await db.professor.findFirst({
    where: {
      clerkId,
    }
  })

  if (!res) {
    notFound()
  }

  const turmas = await db.turma.findMany({
    where: {
      clerkId
    }
  })

  return (
    <div
      className="p-10 space-y-4"
    >
      <h1 className="md:text-3xl text:xl font-bold">
        Turmas
      </h1>
      <CreateTurmaDialog />

      <h2 className="md:text-xl text-lg font-semibold mt-4">
        Minhas turmas
      </h2>

      <div className="flex flex-wrap gap-3">
        {turmas.map((turma) => (
          <Card
            key={turma.id}
            className="w-full max-w-[300px]"
          >
            <CardHeader>
              <CardTitle>{turma.name}</CardTitle>
            </CardHeader>
            <CardFooter className="">
              <Link
                href={`/turma/${turma.id}`}
                className="ml-auto"
              >
                <Button
                >
                  <ArrowRight />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
