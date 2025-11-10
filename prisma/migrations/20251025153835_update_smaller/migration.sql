/*
  Warnings:

  - You are about to drop the column `oldCount` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "oldCount",
ADD COLUMN     "soldCount" INTEGER NOT NULL DEFAULT 0;
