import Link from "next/link"

const Notfound = () => {
  return (
      <div className=" flex bg-red-400 flex-1 flex-col w-full h-screen items-center justify-evenly gap-4 p-4 ">
          <h2>404 (Page noat Found)</h2>
          <Link href="/dashboard" >Back to Dashboard</Link>
      </div>   
    )
}
export default Notfound