-- CreateTable
CREATE TABLE "Publish" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Publish_pkey" PRIMARY KEY ("id")
);
