# Migration `20200910134502-intial`

This migration has been generated by landsprutte at 9/10/2020, 3:45:02 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT NOT NULL
)

CREATE TABLE "Bugdet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,

    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
)

CREATE TABLE "Ticket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "price" REAL NOT NULL
)

CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
)

CREATE TABLE "_CategoryToTicket" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Ticket"("id") ON DELETE CASCADE ON UPDATE CASCADE
)

CREATE UNIQUE INDEX "User.email_unique" ON "User"("email")

CREATE UNIQUE INDEX "_CategoryToTicket_AB_unique" ON "_CategoryToTicket"("A", "B")

CREATE INDEX "_CategoryToTicket_B_index" ON "_CategoryToTicket"("B")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200910134502-intial
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,42 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+
+model User {
+  id           Int       @id @default(autoincrement())
+  name         String?
+  email        String   @unique
+
+  budgets      Bugdet[]
+}
+
+model Bugdet {
+  id         Int     @id @default(autoincrement())
+  title      String
+  createdBy  User    @relation(fields: [userId], references: [id])
+  userId     Int    
+
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
+}
+
+model Ticket {
+  id    Int   @id @default(autoincrement())
+  price Float
+  categories Category[]
+}
+
+model Category {
+  id  Int @id @default(autoincrement())
+  name String
+  tickets Ticket[]
+}
```

