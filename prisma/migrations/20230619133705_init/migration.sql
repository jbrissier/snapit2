-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "uploadTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "showTime" DATETIME,
    "eventId" TEXT NOT NULL,
    CONSTRAINT "Image_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Image" ("eventId", "id", "published", "showTime", "uploadTime", "url") SELECT "eventId", "id", "published", "showTime", "uploadTime", "url" FROM "Image";
DROP TABLE "Image";
ALTER TABLE "new_Image" RENAME TO "Image";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
