import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const movimientos = await prisma.movimiento.findMany();

  return NextResponse.json(movimientos);
}

export async function POST(request) {
  const {
    descripcion,
    inicial,
    final,
    novedades,
    locOrigen,
    provOrigen,
    chofer,
    id
  } = await request.json();

  console.log('--------------------------------')
  console.log(id);
  console.log('----')
  const newMovimiento = await prisma.movimiento.create({
    data: {
      descripcion,
      inicial: Number(inicial),
      final: Number(final),
      novedades,
      loc_origen: locOrigen,
      prov_origen: provOrigen,
      loc_destino: "San Miguel de Tucuman",
      prov_destino: "Tucuman",
      chofer: "Galvan",
      vehiculoId: Number(id),
    },
  });
  return NextResponse.json(newMovimiento);
}

// export async function POST(request) {
//    const { patente, descripcion } = await request.json();
//    const newVehiculo = await prisma.vehiculo.create({
//      data: {
//        patente,
//        descripcion,
//      },
//    });

//    return NextResponse.json(newVehiculo);
//  }
