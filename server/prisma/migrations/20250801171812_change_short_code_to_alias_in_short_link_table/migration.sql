/*
  Warnings:

  - You are about to drop the column `short_code` on the `ShortLink` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[alias]` on the table `ShortLink` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `alias` to the `ShortLink` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."ShortLink_short_code_key";

-- AlterTable
ALTER TABLE "public"."ShortLink" DROP COLUMN "short_code",
ADD COLUMN     "alias" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ShortLink_alias_key" ON "public"."ShortLink"("alias");
