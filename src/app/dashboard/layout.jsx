import { Suspense } from "react";
import Loading from "./loading";

const DashboardLayout = ({ children, vehiculo, movimiento }) => {
  return (
    <main className="max-w-7xl h-screen flex flex-col bg-slate-900 mx-auto p-4 gap-4 text-center">
      <section className="  bg-emerald-600 h-full rounded-lg flex flex-col justify-center gap-4">
        {children}
        <div className="flex bg-emerald-700 flex-1 w-full h-full items-center justify-evenly gap-4 p-4">
          <article className="bg-blue-600 w-full h-full rounded-lg grid place-items-center ">
            <Suspense fallback={<Loading />}>{vehiculo}</Suspense>
          </article>
          <article className="bg-red-600 w-full h-full rounded-lg grid place-items-center">
            <Suspense fallback={<Loading />}>{movimiento}</Suspense>
          </article>
        </div>
      </section>
    </main>
  );
};
export default DashboardLayout;
