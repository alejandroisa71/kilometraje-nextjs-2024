'use client'

const VehiculoCard = ({result}) => {
  return (
    <div >
          <button onClick={() => console.log(result.id)}>{result.title}</button>
     </div>
  )
}

export default VehiculoCard
