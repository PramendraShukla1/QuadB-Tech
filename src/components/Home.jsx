import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate()

  const handleShowMore = (selectedShow) => {
    const selectedShowDataString = JSON.stringify(selectedShow);
    localStorage.setItem("selectedShow", selectedShowDataString);
    navigate('/book-show');
  };

  useEffect(() => {
    const callAPI = async () => {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/search/shows?q=al"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    callAPI();
  }, []);







  return (
    <div className="relative">
      <div className="bg-black h-[700px] flex justify-center p-20">
        <div className="flex justify-center flex-col items-center gap-10">
          <h1 className="text-white lg:text-6xl text-4xl font-serif lg:w-5/6 w-full text-center lg:leading-[70px] leading-[42px]">
            Enjoy the comfort and luxury while booking shows
          </h1>
          <p className="text-white lg:w-1/2 w-full text-center text-lg font-bold">
            Enjoy the comfort and luxury of your home while booking any of your
            shows ticket. Our platform provide one click booking facility which
            no one does.
          </p>
          <button className="text-white p-5 border rounded-xl text-lg font-bold hover:bg-white hover:text-black">
            Browse Movies
          </button>
        </div>
      </div>

      <div className="lg:p-10 p-5 h-full bg-gray-200">
        <div>
          <p className="text-4xl text-center font-bold ">Browse Shows</p>
        </div>
        {/* Card div start */}
        <div className="mt-10 flex gap-5 flex-wrap justify-center">
          {/* single Card div start */}
          {data.map((item, index) => (
            <div
              className="lg:w-2/5 w-full h-full rounded-2xl shadow-xl bg-white p-3"
              key={index}
            >
              <div className="w-full h-full rounded-xl flex gap-5 flex-col lg:flex-row">
                <div className="lg:w-1/2 w-full">
                  <img
                    src={item.show.image.medium}
                    alt=""
                    className="h-full lg:w-96 w-full object-cover rounded-2xl"
                  />
                </div>
                <div className="p-5 pl-0 lg:w-1/2 w-full">
                  <h1 className="text-3xl font-semibold text-center mb-5">
                    {item.show.name}
                  </h1>
                  <div className="flex flex-col gap-5">
                    <h1 className="text-2xl font-bold underline underline-offset-8">
                      Show Info
                    </h1>
                    <p className="font-bold text-lg">
                      Schedule:{" "}
                      <span className="font-normal">
                        {item.show.schedule.days.length} Days at{" "}
                        {item.show.schedule.time} for {item.show.runtime}min
                      </span>
                    </p>
                    <p className="font-bold text-lg">
                      Status:{" "}
                      <span className="font-normal">{item.show.status}</span>
                    </p>
                    <p className="font-bold text-lg">
                      Show Type:{" "}
                      <span className="font-normal">{item.show.type}</span>
                    </p>
                    <p className="font-bold text-lg">
                      Genres:{" "}
                      <span className="font-normal">
                        {item.show.genres + " "}
                      </span>
                    </p>
                    <p className="font-bold text-lg">
                      Premiered on:{" "}
                      <span className="font-normal">{item.show.premiered}</span>
                    </p>
                    <p className="font-bold text-lg">
                      Language:{" "}
                      <span className="font-normal">{item.show.language}</span>
                    </p>
                    <p className="font-bold text-lg">
                      Official site:{" "}
                      <a
                        href={item.show.officialSite}
                        target="_blank"
                        className="font-normal text-blue-400 underline underline-offset-4"
                      >
                        Official Site link
                      </a>
                    </p>

                    <button
                      className="p-5 border text-xl font-bold rounded-2xl border-gray-700 hover:text-white hover:bg-black"
                      onClick={() => handleShowMore(item.show)}
                    >
                      Show More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Card div end */}
        </div>
        <div className="p-5 flex justify-center">
       <a href="https://www.linkedin.com/in/pramendra-shukla-11812a221/" className="text-xl text-blue-400 cursor-pointer hover:text-blue-600" target="_blank">Created by Pramendra Shukla</a>
        </div>
      
      </div>
  
    </div>
  );
};

export default Home;
