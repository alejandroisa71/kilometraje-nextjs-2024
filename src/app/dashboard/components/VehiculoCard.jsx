'use client'

const VehiculoCard = ({result}) => {
  return (
    <div >
          <button className="hover:bg-cyan-300" onClick={() => console.log(result.id)}>{result.title}</button>
     </div>
  )
}

export default VehiculoCard
