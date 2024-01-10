import {prisma} from '@/libs/prisma'
import VehiculoCard from "./components/VehiculoCard"
// import VehiculoForm from "./components/VehiculoForm"
import Link from 'next/link'

async function loadVehiculos () {
  
  return await prisma.vehiculo.findMany()
}

const VehiculoPage = async () => {
 
  const vehiculos = await loadVehiculos()

      
  return (
    <main>
      <h1 className="text-3xl">Vehiculo Page</h1>
      <Link href='/newVehiculo' >Nuevo</Link>
      {vehiculos.map((vehiculo) => (
       <VehiculoCard key={vehiculo.id} vehiculo={vehiculo}/>
      ))}
    </main>
  )
}
export default VehiculoPage