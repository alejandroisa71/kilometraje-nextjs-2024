import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
  const vehiculo = await prisma.vehiculo.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  console.log(vehiculo);

  return NextResponse.json(vehiculo);
}

export async function DELETE(request, { params }) {
  const vehiculoRemove = await prisma.vehiculo.delete({
    where: {
      id: Number(params.id),
    },
  });

  console.log(vehiculoRemove);

  return NextResponse.json("Eliminado Vehiculo");
}

export async function PUT(request, {params}) {
  const data = await request.json();

  const vehiculoUpdate = await prisma.vehiculo.update({
    where: {
      id: Number(params.id),
    },
    data
  });

  return NextResponse.json(vehiculoUpdate);
}
