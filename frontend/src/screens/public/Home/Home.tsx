import LeftSection from "./LeftSection"
import RightSection from "./RightSection"
import Feed from "./Feed"

const Home = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className='flex justify-center w-[80vw] py-6 gap-x-6'>
      <LeftSection />
      <Feed />
      <RightSection />
    </div>
    </div>
  )
}

export default Home
