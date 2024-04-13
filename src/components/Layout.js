import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav
        className=" mx-auto px-1  flex justify-center bg-blue-100"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="">
          <ul className="space-x-12  px-24 bg-blue-100 my-5  rounded-full py-4 shadow-lg">
            <a href="/" className="hover:text-blue-500 hover:font-bold">
              Home
            </a>
            <a href="#proj" className="hover:text-blue-500 hover:font-bold">
              Project
            </a>

            <a href="#contac" className="hover:text-blue-500 hover:font-bold">
              Contact
            </a>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
