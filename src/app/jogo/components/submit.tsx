import { Button } from "@/components/ui/button";
import { useState } from "react";

export function SubmitPage() {
  const [loading, setLoading] = useState(false)

  function handleSubmit() {
    setLoading(true)
  }

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center snap-center snap-always">
      {!loading &&
        <Button
          className="min-w-md h-20 text-lg"
          onClick={handleSubmit}
        >
          Enviar respostas
        </Button>
      }
    </div>
  )
}
