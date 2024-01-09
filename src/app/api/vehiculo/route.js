import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const vehiculos = await prisma.vehiculo.findMany();

  return NextResponse.json(vehiculos);
}

export async function POST(request) {
  const { patente, descripcion } = await request.json();
  const newVehiculo = await prisma.vehiculo.create({
    data: {
      patente,
      descripcion,
    },
  });

  return NextResponse.json(newVehiculo);
}
