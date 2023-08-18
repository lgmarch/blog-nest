-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "author_id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "date_of_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_of_publication" TIMESTAMP(3),
    "status" TEXT NOT NULL DEFAULT 'PUBLISHED',
    "kind_id" INTEGER NOT NULL,
    "post" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);
