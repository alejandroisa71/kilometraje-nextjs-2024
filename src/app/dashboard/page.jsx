"use client";
import useStore from "@/app/store/selectVehiculo";

const DashboardPage = () => {
  const { count, inc } = useStore();
  console.log(count);

  return (
    <section>
      <h1 className="text-5xl py-4">Dashboard Page</h1>
      <button className="bg-red-500" onClick={() => inc()}>
        Click
      </button>
    </section>
  );
};
export default DashboardPage;
