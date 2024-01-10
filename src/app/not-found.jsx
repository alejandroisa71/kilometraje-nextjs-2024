import Link from "next/link"

const NotFound = () => {
  return (
      <section className=" flex bg-red-400 h-screen justify-center items-center">
         <div className="text-center">
         <h1 className="text-4xl font-bold">404 (Page Not Found)</h1>
          <Link href="/dashboard" className="text-slate-800 hover:text-slate-500 text-2xl mt-5" >Back to Dashboard</Link>
         </div>
      </section>   
    )
}
export default NotFound