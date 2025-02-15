import { MagnifyingGlass } from "@phosphor-icons/react"

const Searchbar = () => {
  return (
    <>
      <input 
      type="text"
        placeholder="Search"
        className="bg-primary-light py-1.5 w-48 focus-within:w-64 transition-all duration-300 relative text- rounded-md pl-9 px-3"
       />
      <MagnifyingGlass weight="bold" className="absolute text-text-dark  left-34" />
    </>
  )
}

export default Searchbar
