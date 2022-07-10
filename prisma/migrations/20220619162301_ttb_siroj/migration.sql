-- CreateTable
CREATE TABLE "Ariza" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Ariza_pkey" PRIMARY KEY ("id")
);
