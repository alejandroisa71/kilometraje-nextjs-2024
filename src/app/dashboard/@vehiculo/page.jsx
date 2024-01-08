import VehiculoCard from "../components/VehiculoCard"

const VehiculoPage =async () => {
 const response = await fetch('https://jsonplaceholder.typicode.com/todos')
 const data = await response.json()
 const results = data.slice(0,5)
 console.log(results)
      
  return (
    <main>
      <h1 className="text-3xl">Vehiculo Page</h1>
      {results.map((result) => (
       <VehiculoCard key={result.id} result={result}/>
      ))}
    </main>
  )
}
export default VehiculoPage