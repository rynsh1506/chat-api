/*
  Warnings:

  - Added the required column `user_password` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "user_password" VARCHAR(255) NOT NULL,
ALTER COLUMN "user_image_profile" DROP NOT NULL,
ALTER COLUMN "user_remember_token" DROP NOT NULL;
