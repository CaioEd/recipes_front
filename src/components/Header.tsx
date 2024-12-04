import Link from 'next/link'

const Header = () => {
  return (
    <>
        <header className="bg-gradient-to-r from-blue-400 to-red-300 text-white py-4 shadow-md">
          <Link href="/">
              <h1 className="text-3xl font-bold ml-2">RecipesApp</h1>          
          </Link>
        </header>
    </>
  )
}

export default Header