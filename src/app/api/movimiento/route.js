import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";


export async function GET(){

   const movimientos= await prisma.movimiento.findMany()

   return NextResponse.json(movimientos)
}

export async  function POST(request){

   const { descripcion } = await request.json();

   const newMovimiento = await prisma.movimiento.create({
      data:{
         descripcion,
         vehiculoId:1
        
      }
   })
   return NextResponse.json(newMovimiento)
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