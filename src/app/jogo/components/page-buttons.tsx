import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Props = {
  passo: number
  setPasso: (_: number) => void
  total: number
}

export function PageButtons({ passo, total }: Props) {
  return (
    <div
      className="
          absolute bottom-8 right-8
          flex items-center gap-3
        "
    >
      <Button
        variant="secondary"
        disabled={passo === 0}
      >
        <ChevronLeft />
      </Button>
      <Button
        variant="secondary"
        disabled={passo === total - 1}
      >
        <ChevronRight />
      </Button>
    </div>
  )
}
