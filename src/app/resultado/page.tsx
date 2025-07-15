import { db } from "@/server/db"

export default async function Page() {
  const res = await db.resultado.findMany({
  })
  console.log(res)

  return (
    <div>{res.length}</div>
  )
}
