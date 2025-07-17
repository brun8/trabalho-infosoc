import { auth } from "@clerk/nextjs/server";
import { db } from "@/server/db"
import { notFound } from "next/navigation";

export default async function TurmasPage() {
  const user = await auth()
  if (!user.isAuthenticated) {
    notFound()
  }

  const res = await db.professor.findFirst({
    where: {
      clerkId: user.userId!
    }
  })

  if (!res) {
    notFound()
  }

  return (
    <div>
      aaa
    </div>
  )
}
