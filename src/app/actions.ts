"use server"

import { db } from "@/server/db"
import { auth, currentUser } from "@clerk/nextjs/server"

export async function saveResult(
  opts: {
    nota: number,
    jogo: string,
  }
) {
  const user = await currentUser()

  const res = await db.result.create({
    data: {
      jogo: opts.jogo,
      nota: opts.nota,
      userEmail: user?.emailAddresses.at(0)?.emailAddress ?? null
    }
  })

  return res
}

export async function createTurma(name: string) {
  const user = await auth()
  if (!user.isAuthenticated) { return }
  return await db.turma.create({
    data: {
      name,
      clerkId: user.userId || ""
    }
  })
}

export async function addAlunos(turmaId: string, emails: string[]) {
  const user = await auth()
  if (!user.isAuthenticated) { return }
  return await db.alunoTurma.createMany({
    data: emails.map((email) => ({
      turmaId,
      emailAluno: email,
    }))
  })
}
