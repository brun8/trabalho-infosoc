"use server"

import { db } from "@/server/db"

export async function saveResult(
  opts: {
    nota: number,
    jogo: string,
  }
) {
  const res = await db.result.create({
    data: {
      jogo: opts.jogo,
      nota: opts.nota,
    }
  })
  return res
}
