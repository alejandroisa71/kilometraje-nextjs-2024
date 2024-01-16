"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NewMovimiento({ params }) {
  //   const [patente, setPatente] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [inicial, setInicial] = useState(0);
  const [final, setFinal] = useState(0);
  const [novedades, setNovedades] = useState("");
  const [locOrigen, setLocOrigen] = useState("");
  const [provOrigen, setProvOrigen] = useState("");
  const { id } = params;


  




  // console.log(id)

  const router = useRouter();

  //   useEffect(() => {
  //     if (params.id) {
  //       fetch(`/api/vehiculo/${params.id}`)
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setPatente(data.patente);
  //           setDescripcion(data.descripcion);
  //         });
  //     }
  //   }, [params]);

  //   const onSubmit = async (e) => {
  //     e.preventDefault();

  //     if (params.id) {
  //       // console.log(params.id);
  //       const res = await fetch(`/api/vehiculo/${params.id}`, {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           patente: patente,
  //           descripcion: descripcion,
  //         }),
  //       });
  //       const data = await res.json();
  //     } else {
  //       const res = await fetch("/api/vehiculo", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ patente, descripcion }),
  //       });
  //       const data = await res.json();
  //     }

  //     router.push("/dashboard");
  //     router.refresh();
  //   };

  const onSubmit = async (e) => {
        e.preventDefault();
    const res = await fetch("/api/movimiento", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ descripcion,inicial,final,novedades, locOrigen, provOrigen, id }),
    });
    const data = await res.json();
    router.push("/dashboard");
    router.refresh();
  };

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h1 className="mb-5">Nuevo Movimiento</h1>
      <form
        className="bg-slate-800 lg:w-1/3 md:w-1/2 rounded-lg p-10"
        onSubmit={onSubmit}
      >
      
      
       <div className="md:grid grid-cols-3 gap-2">
       <label className="w-full flex flex-col mb-4">
          Fecha
          <input
            type="date"
            className="border-gray-400 text-slate-900 px-1"
            // id="inicial"
            // onChange={(e) => setInicial(e.target.value)}
            // value={inicial}
          />
        </label>
       <label className="w-full flex flex-col mb-4">
          Km Inicial
          <input
            type="text"
            className="border-gray-400 text-slate-900 px-1"
            id="inicial"
            onChange={(e) => setInicial(e.target.value)}
            value={inicial}
          />
        </label>
        <label className="w-full flex flex-col mb-4">
          Km Final
          <input
            type="text"
            className="border-gray-400 text-slate-900 px-1"
            id="final"
            onChange={(e) => setFinal(e.target.value)}
            value={final}
          />
        </label>
       </div>
        <label className="w-full flex flex-col mb-4">
          Descripcion
          <input
            type="text"
            className="border-gray-400 text-slate-900 px-1"
            id="descripcion"
            onChange={(e) => setDescripcion(e.target.value)}
            value={descripcion}
          />
        </label>
        <label className="w-full flex flex-col mb-4">
          Novedades
          <input
            type="text"
            className="border-gray-400 text-slate-900 px-1"
            id="novedades"
            onChange={(e) => setNovedades(e.target.value)}
            value={novedades}
          />
        </label>
       <div className="md:grid grid-cols-2 gap-2">
       <label className="w-full flex flex-col mb-4">
          Localidad de origen
          <input
            type="text"
            className="border-gray-400 text-slate-900 px-1"
            id="locOrigen"
            onChange={(e) => setLocOrigen(e.target.value)}
            value={locOrigen}
          />
        </label>
        <label className="w-full flex flex-col mb-4">
          Provincia de Origen
          <input
            type="text"
            className="border-gray-400 text-slate-900 px-1"
            id="provOrigen"
            onChange={(e) => setProvOrigen(e.target.value)}
            value={provOrigen}
          />
        </label>
       </div>
        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
            type="submit"
          >
            Guardar
          </button>
          {/* {params.id && (
            <button
              className="bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded"
              onClick={async () => {
                const res = await fetch(`/api/vehiculo/${params.id}`, {
                  method: "DELETE",
                });
                const data = await res.json();
                // console.log(data);
                router.push("/dashboard");
                router.refresh();
              }}
            >
              Eliminar
            </button>
          )} */}
        </div>
      </form>
    </main>
  );
}

export default NewMovimiento;
