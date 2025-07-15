-- CreateTable
CREATE TABLE "Resultado" (
    "id" TEXT NOT NULL,
    "jogo" TEXT NOT NULL,
    "nota" INTEGER NOT NULL,
    "userEmail" TEXT,

    CONSTRAINT "Resultado_pkey" PRIMARY KEY ("id")
);
