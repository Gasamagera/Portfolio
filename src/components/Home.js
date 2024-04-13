import mypic from "././images/prince1.png";
import github from "././images/github.svg";
import instagram from "././images/instagram.svg";
import twitter from "././images/twitter.svg";
import linkedin from "././images/linkedin.svg";
import gmail from "././images/gmail.svg";
import pytho from "././images/python.svg";
import htm from "././images/html-5.svg";
import javs from "././images/javsrc.svg";
import photocontact from "././images/ContactUsHeader.jpg";
import reanat from "././images/react-nat.svg";
import Aos from "aos";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [myProfile, setMyprofile] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/profile")
      .then((response) => {
        setMyprofile(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      className="flex flex-col h-auto  bg-blue-100 "
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="flex md:flex-row md:mx-3 flex-col-reverse">
        <div className="w-1/2 ">
          <img
            className="h-[27rem] w-[22rem] mx-24 mb-5 object-top rounded-full object-cover"
            src={mypic}
          />
        </div>
        <div className="flex-col p-14">
          <h1 className=" md:text-4xl text-black font-bold">
            Full-stack web and mobile app developer
          </h1>
          <p className="max-w-sm md:text-md text-left p-2 pt-4">
            I am a backend developer with expertise in Node.js. I have an
            experience in building scalabl, secure and reliable web applications
            using various framework and technologies. i enjoy solving complex
            problems and learning new skills. i am passionate about creating
            high-quality code that follows best practices and industry
            standards. i am always looking for new challenges and opportunities
            to grow as a developer
          </p>
          <div className="flex flex-row space-x-1 md:space-x-6 p-4">
            <a href="https://github.com/Gasamagera">
              <img src={github} />
            </a>
            <a href="https://www.instagram.com/gasamagera_/">
              {" "}
              <img src={instagram} />
            </a>
            <a href="https://twitter.com/iradukundapri16">
              {" "}
              <img src={twitter} />
            </a>
            <a href="https://www.linkedin.com/in/iradukunda-prince-b9913326b/">
              {" "}
              <img src={linkedin} />
            </a>
          </div>
        </div>
      </div>
      <div id="proj" className=" grid grid-cols-1 md:grid-cols-4 gap-7 p-3">
        <div className="bg-blue-100 p-4 rounded shadow-2xl" data-aos="zoom-out">
          <img className="" src={reanat} />
          <h1 className="font-bold  text-2xl">Project 1</h1>
          <p className="">
            The React project displayed movies fetched from an API. Utilizing
            React's component-based architecture, it dynamically rendered movie
            information such as titles, ratings, and summaries.
          </p>

          <a
            target="_blank"
            href="https://movie-project-phi-orpin.vercel.app/"
            className="block bg-blue-300 text-black font-bold tracking-widest rounded-full p-2 my-2 px-20 mx-4 mt-4 hover:bg-blue-400"
          >
            Visit
          </a>
        </div>
        <div className="bg-blue-100 p-4 rounded shadow-2xl" data-aos="zoom-out">
          <img className="" src={htm} />
          <h1 className="font-bold text-2xl">Project 2</h1>
          <p>
            The HTML5 project was a responsive landing page designed for a
            fictional product. Leveraging HTML5's semantic elements and CSS3 for
            styling, it showcased smooth transitions and animations
          </p>
          <a
            target="_blank"
            href="https://movie-project-phi-orpin.vercel.app/"
            className="block bg-blue-300 text-black font-bold tracking-widest rounded-full p-2 my-2 px-20 mx-4 mt-4 hover:bg-blue-400"
          >
            Visit
          </a>
        </div>
        <div
          className="bg-blue-100 p-4 rounded shadow-2xl "
          data-aos="zoom-out"
        >
          <img className="" src={javs} />
          <h1 className="font-bold text-2xl">Project 3</h1>
          <p>
            The JavaScript project involved building a dynamic todo list
            application. Using JavaScript's DOM manipulation, it allowed users
            to add, delete, and mark tasks as complete,user-friendly web
          </p>

          <a
            target="_blank"
            href="https://movie-project-phi-orpin.vercel.app/"
            className="block bg-blue-300 text-black font-bold tracking-widest rounded-full p-2 my-2 px-20 mx-4 mt-4 hover:bg-blue-400"
          >
            Visit
          </a>
        </div>
        <div className="bg-blue-100 p-4 rounded shadow-2xl" data-aos="zoom-out">
          <img className="" src={pytho} />
          <h1 className="font-bold text-2xl">Project 4</h1>
          <p>
            The Python project was a web scraper gathering product data from
            multiple sites, stored in MySQL.Using BeautifulSoup and requests for
            extraction, SQLAlchemy managed the database
          </p>
          <a
            target="_blank"
            href="https://movie-project-phi-orpin.vercel.app/"
            className="block bg-blue-300 text-black font-bold tracking-widest rounded-full p-2 my-2 px-20 mx-4 mt-4 hover:bg-blue-400"
          >
            Visit
          </a>
        </div>
        <div class="flex justify-between items-center px-4">
          <span class="text-sm font-medium text-gray-700">JavaScript</span>
          <div class="bg-blue-400 h-12 w-1/6 rounded-full"></div>
          <span class="text-sm font-medium text-gray-700">75%</span>

          <span class="text-sm font-medium text-gray-700">HTML</span>
          <div class="bg-green-400 h-12 w-3/6 rounded-full"></div>
          <span class="text-sm font-medium text-gray-700">90%</span>
        </div>
      </div>
      <div
        id="contac"
        className="grid md:grid-cols-2 flex-row md:flex-col-reverse"
      >
        <div className="grid grid-row container mx-auto px-4 py-8">
          <h1 className=" md:text-3xl  font-bold  mb-8">Contact Me</h1>
          <form className="grid  grid-cols-1 md:w-3/5  gap-4">
            <div>
              <input
                placeholder="Full Name"
                type="text"
                id="fullName"
                className="w-full px-3 py-2 rounded-md  text-gray-900 bg-blue-100 border  border-b-blue-700  font-bold"
              />
            </div>
            <div>
              <input
                placeholder="E-mail"
                type="email"
                id="email"
                className="w-full px-3 py-2 rounded-md bg-blue-100 border border-b-blue-700  font-bold text-black"
              />
            </div>
            <div>
              <textarea
                placeholder="Enter Message"
                id="message"
                rows={5}
                className="w-full px-3 py-2  bg-blue-100  rounded-md border border-b-blue-700  text-blue-700 font-bold"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex text-center bg-blue-300  hover:bg-blue-400  px-4 py-2 rounded-full  text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
            >
              Contact Me
            </button>
          </form>
        </div>
        <div className="grid container md:order-first mx-auto px-4 py-8">
          <div className="">
            <img
              className="h-[30rem] w-[60rem]  mb-5 object-top rounded-2xl "
              src={photocontact}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
