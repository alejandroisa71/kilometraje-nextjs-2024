"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NewMovimiento({ params }) {
  //   const [patente, setPatente] = useState("");
  const [descripcion, setDescripcion] = useState("");
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
      body: JSON.stringify({ descripcion, id }),
    });
    const data = await res.json();
    router.push("/dashboard");
    router.refresh();
  };

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h1 className="mb-5">Nuevo Vehiculo</h1>
      <form
        className="bg-slate-800 lg:w-1/4 md:w-1/2 rounded-lg p-10"
        onSubmit={onSubmit}
      >
        {/* <label className="w-full flex flex-col mb-4">
          Patente
          <input
            type="text"
            className="border-gray-400 text-slate-900 px-1"
            id="patente"
            autoFocus
            onChange={(e) => setPatente(e.target.value)}
            value={patente}
          />
        </label> */}
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
