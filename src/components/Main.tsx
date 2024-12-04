import Card from "@/components/Card";
import Link from 'next/link'

const Main = () => {
  return (
    <>
        <main>

            <Link href="/create-recipe">
              <button className='m-7 uppercase bg-gradient-to-r from-blue-400 to-red-300 text-white w-56 h-10 rounded-lg hover:brightness-110'>
                + Create New Recipe
              </button>
            </Link>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center px-8 py-8'>
              <Card />
              <Card />
              <Card />
              <Card />
            </div>

        </main>
    </>
  )
}

export default Main