const Header = () => {
  return (
    <div className=" flex justify-between sticky top-0 inset-z-50  w-full  bg-white/90 backdrop-blur-3xl mb-5 ">
      <div>
        <img src="./assets/logo.svg" alt="logo" />
      </div>
      <div className="hidden   rounded-full md:justify-center md:items-center md:flex">
        <ul className="list-none flex  space-x-5 items-center bg-slate-200 px-8 py-3 mb-2 rounded-full">
          
          <li><a className="hover:bg-white rounded-full p-2" href="">Intro</a></li>
          <li><a className="hover:bg-white rounded-full p-2" href="">Pricing </a></li>
          <li><a className="hover:bg-white rounded-full p-2" href="">Features</a></li>
          <li><a className="hover:bg-white rounded-full p-2" href="">Testimonials</a></li>
        </ul>
      </div>
      <div>
        <button className="bg-green-950 px-2 py-2 rounded-full text-white font-bold hover:bg-green-500">Join Community</button>
      </div>
    </div>
  );
};

export default Header;
