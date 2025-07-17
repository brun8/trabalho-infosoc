"use server"

import { db } from "@/server/db"
import { currentUser } from "@clerk/nextjs/server"

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
