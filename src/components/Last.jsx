

const Last = () => {
  return (
    <div className="mt-20 flex justify-center items-center" >
      <div className="font-bold ">
        <h1 className="font-bold text-3xl text-center" >GAIN A COMPETITIVE EDGE IN JOB MARKET</h1>
        <p className="font-bold text-center text-gray-400 pt-5 mb-20" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam non iste id ad! Quod eligendi voluptate magnam inventore itaque impedit.</p>

        <div className="flex flex-col justify-center items-center gap-6" >
          <h1 className="text-green-500 font-bold text-center">WHAT YOU WILL GET</h1>
          <div className="flex flex-col justify-center items-center space-y-4 md:flex-row gap-5 mr-10 ml-10 mb-10" >

          <img src="./assets/icon-guides-2.svg" alt="" />
          <h1>Comprehensive guides, projects & cources</h1>
          
          <img src="./assets/icon-job.svg" alt="" />
          <h1>Exclusiv job+ intership posting</h1>
         
          <img src="./assets/icon-tips.svg" alt="" />
          <h1>1;1 Career guidance & mentorship</h1>
          </div>
          
          <div className="hover:rotate-6 duration-200">
            <img className="" src="./assets/illustration-job.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Last
