'use client';
import {useRouter} from 'next/navigation';

function VehiculoForm()  {
  
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const patente = e.target.patente.value;
    const descripcion = e.target.descripcion.value;

    const res = await fetch("/api/vehiculo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ patente, descripcion }),
    });

    router.push('/dashboard');
  };

  return (
    <main className='h-screen flex flex-col justify-center items-center'>
    <h1 className='mb-5'>Nuevo Vehiculo</h1>
    <form className="bg-slate-800 lg:w-1/4 md:w-1/2 rounded-lg p-10" onSubmit={onSubmit}>
      <label className="w-full flex flex-col mb-4">
        Patente
        <input
          type="text"
          className="border-gray-400 text-slate-900 px-1"
          id="patente"
          autoFocus
        />
      </label>
      <label className="w-full flex flex-col mb-4">
        Descripcion
        <input
          type="text"
          className="border-gray-400 text-slate-900 px-1"
          id="descripcion"
        />
      </label>
      <button className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded ">
        Crear
      </button>
    </form>
    </main>

  );
};


export default VehiculoForm;