import React from "react";
import Mainbtn from "../utils/Mainbtn";
import { CiSearch } from "react-icons/ci";
import CommonPerson from "./CommonPerson"

const Person = () => {
  return (
    <>
      <div className="px-4 pt-12.5">
        <div className="heading flex justify-between items-center">
          <h2 className="text-xl font-semibold font-inter text-black">Chat</h2>
          <Mainbtn title="Add" />
        </div>
        <div className="search flex items-center gap-2.5 border-b-2 mt-6 mb-4.25 border-primary text-xl font-semibold font-inter text-primary">
          <CiSearch className="text-2xl" />
          <input
            className="border-none outline-none w-full"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="person">
          <CommonPerson
            image="images/shimanto.jpg"
            name="Shimanto Sarkar"
            message="I love You"
            time="12 : 00 am"
            styling="bg-personBg"
            stylingName="text-white"
            stylingMessage="text-[#D3D3D3]"
          />
          <CommonPerson
            image="images/shimanto.jpg"
            name="Shimanto Sarkar"
            message="I Hate You"
            time="12 : 30 am"
          />
          <CommonPerson
            image="images/shimanto.jpg"
            name="Shimanto Sarkar"
            message="Slap You...."
            time="12 : 30 am"
          />
          <CommonPerson
            image="images/shimanto.jpg"
            name="Shimanto Sarkar"
            message="Faull........"
            time="12 : 30 am"
          />
          <CommonPerson
            image="images/shimanto.jpg"
            name="Shimanto Sarkar"
            message="Need Money ....."
            time="12 : 30 am"
          />
          <CommonPerson
            image="images/shimanto.jpg"
            name="Shimanto Sarkar"
            message="Love You ....."
            time="12 : 30 am"
          />
          <CommonPerson
            image="images/shimanto.jpg"
            name="Shimanto Sarkar"
            message="Slap You ...."
            time="12 : 30 am"
          />
          <CommonPerson
            image="images/shimanto.jpg"
            name="Shimanto Sarkar"
            message="Faull........"
            time="12 : 30 am"
          />
          <CommonPerson
            image="images/shimanto.jpg"
            name="Shimanto Sarkar"
            message="Need Money ....."
            time="12 : 30 am"
          />
          <CommonPerson
            image="images/shimanto.jpg"
            name="Shimanto Sarkar"
            message="Need Money ....."
            time="12 : 30 am"
          />
          <CommonPerson
            image="images/shimanto.jpg"
            name="Shimanto Sarkar"
            message="Need Money ....."
            time="12 : 30 am"
          />
        </div>
      </div>
    </>
  );
};

export default Person;
