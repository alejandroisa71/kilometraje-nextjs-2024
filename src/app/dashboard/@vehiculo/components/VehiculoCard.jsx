"use client";
import {useRouter} from 'next/navigation'

const VehiculoCard = ({ vehiculo }) => {

  const router = useRouter()

  return (
    <div>
      <button
        className="hover:bg-cyan-300"
        onClick={() => {
          router.push(`/vehiculo/edit/${vehiculo.id}`)
        }}
      >
        {vehiculo.patente} 
      </button>
    </div>
  );
};

export default VehiculoCard;
