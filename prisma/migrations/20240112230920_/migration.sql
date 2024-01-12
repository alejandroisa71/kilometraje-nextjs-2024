-- CreateTable
CREATE TABLE "Vehiculo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patente" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Movimiento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vehiculoId" INTEGER NOT NULL,
    "fecha" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "inicial" INTEGER NOT NULL,
    "final" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "novedades" TEXT NOT NULL,
    "loc_origen" TEXT NOT NULL,
    "prov_origen" TEXT NOT NULL,
    "loc_destino" TEXT NOT NULL,
    "prov_destino" TEXT NOT NULL,
    "chofer" TEXT NOT NULL,
    CONSTRAINT "Movimiento_vehiculoId_fkey" FOREIGN KEY ("vehiculoId") REFERENCES "Vehiculo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
