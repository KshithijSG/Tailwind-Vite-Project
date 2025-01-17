const Footer = () => {
  return (
    <div className="md:flex flex-row justify-between relative  space-x-10 ">
      <div
        className="flex
      justify-center m-10 md:order-1  "
      >
        <img src="./assets/logo.svg" alt="" />
      </div>
      <div className="order-3">
        <div className="flex items-center justify-center space-x-4 mt-5 md:mt-12 order-3 ">
          <a
            className=" p-2 transition-all duration-150 rounded-full group hover:bg-green-50 ring-transparent ring-inset hover:ring-green-300"
            href=""
          >
            <img
              className="h-8 transition-all duration-150 grayscale group-hover:grayscale-0"
              src="./assets/icon-instagram.svg"
              alt=""
            />
          </a>
          <a
            className=" p-2 transition-all duration-150 rounded-full group hover:bg-green-50 ring-transparent ring-inset hover:ring-green-300"
            href=""
          >
            <img
              className="h-8 transition-all duration-150 grayscale group-hover:grayscale-0"
              src="./assets/icon-youtube.svg"
              alt=""
            />
          </a>
          <a
            className=" p-2 transition-all duration-150 rounded-full group hover:bg-green-50 ring-transparent ring-inset hover:ring-green-300"
            href=""
          >
            <img
              className="h-8 transition-all duration-150 grayscale group-hover:grayscale-0"
              src="./assets/icon-twitter.svg"
              alt=""
            />
          </a>
          <a
            className=" p-2 transition-all duration-150 rounded-full group hover:bg-green-50 ring-transparent ring-inset hover:ring-green-300"
            href=""
          >
            <img
              className="h-8 transition-all duration-150 grayscale group-hover:grayscale-0"
              src="./assets/icon-linkedin.svg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="order-2">
        <h1
          className="text-xl
         font-bold text-center text-gray-500 m-12 "
        >
          2023&copy; DSA revision
        </h1>
      </div>
    </div>
  );
};

export default Footer;
