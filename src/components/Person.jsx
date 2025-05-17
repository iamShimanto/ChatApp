import React from "react";
import Mainbtn from "../utils/Mainbtn";
import { CiSearch } from "react-icons/ci";
import CommonPerson from "./CommonPerson";

const Person = () => {
  return (
    <>
      <div className="px-4 pt-12.5 bg-[#16181C] h-screen">
        <div className="heading flex justify-between items-center">
          <Mainbtn path="/login" title="Login" />
          <Mainbtn path="register" title="Register" />
          <Mainbtn title="Add" />
        </div>
        <div className="search flex items-center gap-2.5 border-b-2 mt-6 mb-4.25 border-[#7289DA] text-xl font-semibold font-inter text-[#7289DA]">
          <CiSearch className="text-2xl" />
          <input
            className="border-none outline-none w-full bg-transparent text-white placeholder-[#99AAB5]"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="person overflow-y-auto h-[calc(100vh-180px)] overflow-x-hidden">
          <CommonPerson
            image="images/shimanto.jpg"
            name="Shimanto Sarkar"
            message="I love You"
            time="12 : 00 am"
            styling="bg-[#1E2124]"
            stylingName="text-white"
            stylingMessage="text-[#99AAB5]"
          />
          <CommonPerson
            image="images/naruto.png"
            name="Naruto Uzumaki"
            message="I Hate You"
            time="12 : 30 am"
            styling="bg-[#1A1D21]"
            stylingName="text-white"
            stylingMessage="text-[#99AAB5]"
          />
          <CommonPerson
            image="images/kakashi.png"
            name="Kakashi Hatake"
            message="Slap You...."
            time="12 : 30 am"
            styling="bg-[#1E2124]"
            stylingName="text-white"
            stylingMessage="text-[#99AAB5]"
          />
          <CommonPerson
            image="images/luffy.jpg"
            name="Monkey D. Luffy"
            message="Faull........"
            time="12 : 30 am"
            styling="bg-[#1A1D21]"
            stylingName="text-white"
            stylingMessage="text-[#99AAB5]"
          />
          <CommonPerson
            image="images/madara.jpg"
            name="Madara Uchiha"
            message="Need Money ....."
            time="12 : 30 am"
            styling="bg-[#1E2124]"
            stylingName="text-white"
            stylingMessage="text-[#99AAB5]"
          />
          <CommonPerson
            image="images/eren.jpg"
            name="Eren Yeager"
            message="Love You ....."
            time="12 : 30 am"
            styling="bg-[#1A1D21]"
            stylingName="text-white"
            stylingMessage="text-[#99AAB5]"
          />
          <CommonPerson
            image="images/mickey.jpeg"
            name="Manjiro Sano Mikey"
            message="Slap You ...."
            time="12 : 30 am"
            styling="bg-[#1E2124]"
            stylingName="text-white"
            stylingMessage="text-[#99AAB5]"
          />
          <CommonPerson
            image="images/tomyo.jpg"
            name="Giyu Tomioka"
            message="Faull........"
            time="12 : 30 am"
            styling="bg-[#1A1D21]"
            stylingName="text-white"
            stylingMessage="text-[#99AAB5]"
          />
          <CommonPerson
            image="images/sasuke.jpg"
            name="Sasuke Uchiha"
            message="Need Money ....."
            time="12 : 30 am"
            styling="bg-[#1E2124]"
            stylingName="text-white"
            stylingMessage="text-[#99AAB5]"
          />
          <CommonPerson
            image="images/levi.jpg"
            name="Levi Ackerman"
            message="Need Money ....."
            time="12 : 30 am"
            styling="bg-[#1A1D21]"
            stylingName="text-white"
            stylingMessage="text-[#99AAB5]"
          />
          <CommonPerson
            image="images/zenetsu.jpeg"
            name="Zenitsu Agatsuma"
            message="Need Money ....."
            time="12 : 30 am"
            styling="bg-[#1E2124]"
            stylingName="text-white"
            stylingMessage="text-[#99AAB5]"
          />
        </div>
      </div>
    </>
  );
};

export default Person;
