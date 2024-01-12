import { prisma } from "@/libs/prisma";
import VehiculoCard from "./components/VehiculoCard";
// import VehiculoForm from "./components/VehiculoForm"
import Link from "next/link";

async function loadVehiculos() {
  return await prisma.vehiculo.findMany();
}

const VehiculoPage = async () => {
  const vehiculos = await loadVehiculos();

  return (
    <main>
      <h1 className="text-3xl mb-4">Vehiculo Page</h1>
    
      {vehiculos.map((vehiculo) => (
        <VehiculoCard key={vehiculo.id} vehiculo={vehiculo} />
      ))}
      <div className="mt-4">
     <Link
        href="/newVehiculo"
        className="bg-slate-500 hover:bg-slate-700 font-bold py-2 px-4 rounded"
      >
        Nuevo
      </Link>
     </div>
    </main>
  );
};
export default VehiculoPage;
