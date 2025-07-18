import { db } from "@/server/db"

async function seed() {
  const emails = [
    "matheus_pereira@exemplo.com",
    "kayo_jorge@exemplo.com",
    "joao@email.com",
    "bruce_wayne@email.com",
    "peter_parker@email.com",
  ]

  const mockCount = 50

  const results = []

  for (let i = 0; i < mockCount; i++) {
    results.push(
      db.result.create({
        data: {
          jogo: "plagio",
          nota: Math.floor(Math.random() * 7),
          userEmail: emails[Math.floor(Math.random() * emails.length)]
        }
      })
    )
  }

  await db.$transaction(results)

  // const res = await db.result.create({
  //   data: {
  //     jogo: "sbc",
  //     nota: 5,
  //     userEmail: "email@exemplo.com"
  //   }
  // })

}

function main() {
  seed()
    .then(() => { console.log("seeds finalizados") })
    .catch((err) => {
      console.error("erro nos seeds")
      console.error(err)
    })
}

main()

