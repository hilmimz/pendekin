/*
  Warnings:

  - You are about to drop the column `expires_at` on the `ShortLink` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."ShortLink" DROP COLUMN "expires_at",
ADD COLUMN     "expires_in" INTEGER NOT NULL DEFAULT 0;
