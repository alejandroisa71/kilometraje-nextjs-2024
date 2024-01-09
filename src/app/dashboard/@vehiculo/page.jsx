import {prisma} from '@/libs/prisma'
import VehiculoCard from "./components/VehiculoCard"
import VehiculoForm from "./components/VehiculoForm"


async function loadVehiculo () {
  
  return await prisma.vehiculo.findMany()
}

const VehiculoPage = async () => {
 
  const results = await loadVehiculo()

      
  return (
    <main>
      <h1 className="text-3xl">Vehiculo Page</h1>
      {results.map((result) => (
       <VehiculoCard key={result.id} result={result}/>
      ))}
      <VehiculoForm/>
    </main>
  )
}
export default VehiculoPage