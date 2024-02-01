import React, { useState } from "react";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const BookShow = () => {

    const storedData = localStorage.getItem("selectedShow");
    const singleShowData = JSON.parse(storedData);
    console.log(singleShowData);


  const [showForm, setShowForm] = useState(false);
  const [show, setShow] = useState(singleShowData.name)
  const [name, setName] = useState('')
  const [people, setPeople] = useState('')
  const [date, setDate] = useState('')


 const handleOnFormSubmit = (e) =>{
    e.preventDefault()
toast.success(`Booking Confirmed! \n  ${show} \n ${name} \n  ${people} \n ${date}`)
setShowForm(false)
setName('')
setPeople('')
setDate('')
 }

 const formOpener = (e) =>{
    e.preventDefault()
    setShowForm(true)
 }




  return (
    <div className="bg-black h-full flex gap-5 lg:p-10 p-5 flex-col lg:flex-row ">
        <ToastContainer />
      <div className="lg:w-2/5 w-full">
        <div className="h-full">
          <img
            src={singleShowData.image.original}
            className="w-full h-full object-cover rounded-2xl"
            alt=""
          />
        </div>
      </div>
      {!showForm ? (
        <div className="lg:w-3/5 w-full border text-white lg:p-5 p-2 rounded-2xl">
          <div className="flex justify-center flex-col items-center">
            <h1 className="text-6xl mb-5">{singleShowData.name}</h1>
            <p className="lg:p-10 p-2 text-justify lg:text-balance text-lg">{singleShowData.summary}</p>

            <div className="w-full h-full flex lg:p-10 p-2  rounded-2xl">
              <div className="pl-0 w-full p-10">
                <div className="flex flex-col gap-5">
                  <h1 className="text-2xl font-bold underline underline-offset-8">
                    Show Info
                  </h1>
                  <p className="font-bold text-lg">
                    Schedule:{" "}
                    <span className="font-normal">
                      {singleShowData.schedule.days.length} Days at{" "}
                      {singleShowData.schedule.time} for{" "}
                      {singleShowData.runtime}
                      min
                    </span>
                  </p>
                  <p className="font-bold text-lg">
                    Status:{" "}
                    <span className="font-normal">{singleShowData.status}</span>
                  </p>
                  <p className="font-bold text-lg">
                    Show Type:{" "}
                    <span className="font-normal">{singleShowData.type}</span>
                  </p>
                  <p className="font-bold text-lg">
                    Genres:{" "}
                    <span className="font-normal">
                      {singleShowData.genres + " "}
                    </span>
                  </p>
                  <p className="font-bold text-lg">
                    Premiered on:{" "}
                    <span className="font-normal">
                      {singleShowData.premiered}
                    </span>
                  </p>
                  <p className="font-bold text-lg">
                    Language:{" "}
                    <span className="font-normal">
                      {singleShowData.language}
                    </span>
                  </p>
                  <p className="font-bold text-lg">
                    Official site:{" "}
                    <a
                      href={singleShowData.officialSite}
                      target="_blank"
                      className="font-normal text-blue-400 underline underline-offset-4"
                    >
                      Official Site link
                    </a>
                  </p>
                  <div className="flex justify-center mt-10 lg:mt-0">
                    <button className="p-5 border text-xl font-bold rounded-2xl border-gray-700 hover:text-black hover:bg-white" onClick={formOpener}>
                      Proceed to details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="lg:w-3/5 w-full border text-white p-5 rounded-2xl justify-center flex flex-col">
             
<form>
    <div className="text-white justify-center flex flex-col items-center gap-10 w-full">
    <h1 className="text-4xl">Booking Form</h1>
    <div className="lg:w-4/5 w-full flex items-center gap-5 flex-col ">
        <div className="flex flex-row gap-5 w-full items-center lg:justify-between justify-center">
        <label htmlFor="show" className=" p-2 border rounded-xl font-bold w-1/6 hidden lg:flex">Enter Show</label>
        <input type="text" disabled className="w-5/6 p-3 rounded-2xl outline-none cursor-not-allowed bg-white text-black text-lg font-semibold" id="show" name="show" placeholder="Enter show name here" value={show}/>
        </div>
   
        <div className="flex flex-row gap-5 w-full items-center lg:justify-between justify-center">
        <label htmlFor="name" className=" p-2 border rounded-xl font-bold w-1/6 hidden lg:flex">Enter Name</label>
        <input type="text" className="w-5/6 p-3 rounded-2xl outline-none text-black text-lg font-semibold" id="name" name="name" placeholder="Enter your name here" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="flex flex-row gap-5 w-full items-center lg:justify-between justify-center">
        <label htmlFor="people" className=" p-2 border rounded-xl font-bold w-1/6 hidden lg:flex">Enter Peoples</label>
        <input type="text" className="w-5/6 p-3 rounded-2xl outline-none text-black text-lg font-semibold" id="people" name="people" placeholder="Enter number of people"value={people} onChange={(e)=>setPeople(e.target.value)}/>
        </div>
        <div className="flex flex-row gap-5 w-full items-center lg:justify-between justify-center">
        <label htmlFor="people" className="w-1/6 p-2 border rounded-xl font-bold hidden lg:flex">Enter Date</label>
        <input type="text" className="w-5/6 p-3 rounded-2xl outline-none text-black text-lg font-semibold" id="people" name="people" placeholder="Enter date i.e(01/02/2024)" value={date} onChange={(e)=>setDate(e.target.value)}/>
        </div>
        <div>
            <button className="p-5 border rounded-xl text-xl font-bold hover:bg-white hover:text-black" onClick={handleOnFormSubmit}>Book Now</button>
        </div>
        
    </div>
    </div>
    
</form>
        </div>
      )}
    </div>
  );
};

export default BookShow;
