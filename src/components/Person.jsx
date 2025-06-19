import React, { useRef, useState } from "react";
import Mainbtn from "../utils/Mainbtn";
import { CiSearch } from "react-icons/ci";
import CommonPerson from "./CommonPerson";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";

const Person = () => {
  const db = getDatabase();
  const userInfo = useSelector((state) => state.userData.user);
  const [data, setData] = useState([]);
  const [add, setAdd] = useState(false);
  const addFriendRef = useRef(null);

  const handleAdd = () => {
    const arr = [];
    onValue(ref(db, "users/"), (snapshot) => {
      snapshot.forEach((item) => {
        if (item.key !== userInfo.uid) {
          arr.push({ ...item.val(), id: item.key });
        }
      });
      setData(arr);
    });
    setAdd(true);
  };

  window.addEventListener("mousedown", (e) => {
    if (addFriendRef.current && !addFriendRef.current.contains(e.target)) {
      setAdd(false);
    }
  });

  return (
    <>
      <div className="px-4 pt-12.5 bg-[#16181C] h-screen">
        <div className="heading flex justify-between items-center">
          <button className="py-3 px-8 hover:bg-[#7289DA] hover:text-white ease-in-out duration-300 border border-[#7289DA] rounded-lg text-lg font-inter font-semibold text-[#7289DA]">
            Chat
          </button>
          <button
            onClick={handleAdd}
            className="py-3 px-8 hover:bg-[#7289DA] hover:text-white ease-in-out duration-300 border border-[#7289DA] rounded-lg text-lg font-inter font-semibold text-[#7289DA] cursor-pointer"
          >
            Add
          </button>
        </div>
        <div className="search flex items-center gap-2.5 border-b-2 mt-6 mb-4.25 border-[#7289DA] text-xl font-semibold font-inter text-[#7289DA] relative">
          <CiSearch className="text-2xl" />
          <input
            className="border-none outline-none w-full bg-transparent text-white placeholder-[#99AAB5]"
            type="text"
            placeholder="Search"
          />
          {add && (
            <div
              ref={addFriendRef}
              className="bg-personBg p-10 absolute top-0 left-0 z-10 w-full h-120 rounded-2xl add"
            >
              <input
                className=" outline-none w-full bg-transparent text-[#fff] placeholder-[#3680b1] pb-3 border-b mb-3 tracking-widest"
                type="text"
                placeholder="Search"
              />
              {data.map((item) => (
                <div
                  key={item.id}
                  className={` flex justify-between items-center p-3 rounded-sm bg-slate-100 hover:scale-105 hover:shadow-sm duration-300 mb-1 add`}
                >
                  <div className="profile flex gap-4">
                    <div className="name">
                      <h4
                        className={`text-lg font-semibold font-inter cursor-pointer`}
                      >
                        {item.username}
                      </h4>
                    </div>
                  </div>
                  <button className="add px-3 py-1.5 cursor-pointer !rounded-lg">
                    Add
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="person overflow-y-auto h-[calc(100vh-180px)] overflow-x-hidden">
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
        </div>
      </div>
    </>
  );
};

export default Person;
