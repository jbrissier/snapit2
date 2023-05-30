import Image from 'next/image'
import Link from 'next/link';
export default function Home() {
  return (
    <main> 

      <div className="bg-slate-600 flex flex-col md:justify-center md:items-center h-screen p-12">


        <h1 className="text-3xl mb-3"> SnapIT 2.0</h1>

        <Link href="/iv">
        <div className="bg-orange-500 rounded shadow hover:shadow-xl hover:bg-orange-600 cursor:pointer  p-3  my-2">show Images</div>
        </Link>
        <div className="bg-orange-500 rounded shadow hover:shadow-xl hover:bg-orange-600 cursor:pointer  p-3 my-2 ">upload Images</div>



      </div>

    </main>
  )
}
