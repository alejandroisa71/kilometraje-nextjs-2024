// "use client";
import Link from "next/link";

const VehiculoCard = ({ vehiculo }) => {
  return (
    <div className="flex flex-row  justify-between border-b-2 border-slate-950">
      <Link href={`/newMovimiento/${vehiculo.id}`}> {vehiculo.patente} </Link>
      {/* <Link href={'/newMovimiento'}> {vehiculo.patente} </Link> */}
      <Link className=" hover:bg-cyan-300"  href={`/vehiculo/edit/${vehiculo.id}`}>🖊</Link>

      {/* <Link href={`/dashboard/${vehiculo.id}`} onClick={()=> {console.log(vehiculo.id)}}> {vehiculo.patente}</Link> */}
    </div>
  );
};

export default VehiculoCard;
