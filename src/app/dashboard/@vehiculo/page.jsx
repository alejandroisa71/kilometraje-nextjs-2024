import VehiculoCard from "./components/VehiculoCard"
import VehiculoForm from "./components/VehiculoForm"

const VehiculoPage =async () => {
 const response = await fetch('http://localhost:3000/api/vehiculo')
//  console.log(response)
 const data = await response.json()
//  console.log(data)
//  console.log(data)
 const results = data
//  console.log(results)
      
  return (
    <main>
      <h1 className="text-3xl">Vehiculo Page</h1>
      {results?.map((result) => (
       <VehiculoCard key={result.id} result={result}/>
      ))}
      <VehiculoForm/>
    </main>
  )
}
export default VehiculoPage