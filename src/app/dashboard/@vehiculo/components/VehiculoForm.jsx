'use client';

function VehiculoForm()  {
  
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

    const data = await res.json();
    console.log(data);
  };

  return (
    <form className="bg-slate-800 w-full rounded-lg p-10" onSubmit={onSubmit}>
      <label className="w-full flex flex-col mb-4">
        Patente
        <input
          type="text"
          className="border-gray-400 text-slate-900 px-1"
          id="patente"
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
  );
};


export default VehiculoForm;