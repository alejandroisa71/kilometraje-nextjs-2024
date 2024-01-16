// "use client"
import { prisma } from "@/libs/prisma";


async function loadMovimientos({ params }) {

  


  console.log(params);

  return await prisma.movimiento.findMany({
    where: {
      vehiculoId: 2,
    },
  });
}

const MovimientoPage = async ({ params }) => {

  // const { count } = useStore()
  // console.log(count)
  console.log(params)
  console.log("------")

  const movimientos = await loadMovimientos(params);

  if (!true) {
    throw new Error("This is fine");
  }
  return (
    <main>
      <h1 className="text-3xl">Movimiento Page</h1>
      {movimientos.length > 0 ? (
        movimientos.map((movimiento) => {
          return (
            <div key={movimiento.id}>
              <h2>{movimiento.descripcion}</h2>
            </div>
          );
        })
      ) : (
        <>No hay movimientos </>
      )}
    </main>
  );
};
export default MovimientoPage;
