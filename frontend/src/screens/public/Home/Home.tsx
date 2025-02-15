import { PlusCircle } from "@phosphor-icons/react"

const Home = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className='flex justify-center items-center w-[80vw] py-6 gap-x-6'>
      <div className="w-[20%] text-center">
        Left Section
      </div>
      <div className="w-[50%]">
        <div className="flex py-4 px-6 bg-primary-light rounded-lg gap-x-4">
          <PlusCircle size={26} className="text-danger" />
         <p className="w-full text-neutral-400 font-medium">Start a post...</p>
        </div>
      </div>
      <div className="w-[30%] text-center">
        Right Section
      </div>
    </div>
    </div>
  )
}

export default Home
