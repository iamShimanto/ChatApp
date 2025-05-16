import React from 'react'

const CommonPerson = ({
  image,
  name,
  message,
  time,
  styling = "bg-white",
  stylingName = "text-black22",
  stylingMessage = "[#7A7A7A]",
}) => {
  return (
    <>
      <div className={`${styling} flex justify-between p-3 rounded-sm cursor-pointer hover:shadow-sm duration-300 mb-1`}>
        <div className="profile flex gap-4">
          <img className="w-12 h-12 rounded-full" src={image} alt="logo" />
          <div className="name">
            <h4 className={`${stylingName} text-lg font-semibold font-inter`}>
              {name}
            </h4>
            <p className={`${stylingMessage}`}>{message}</p>
          </div>
        </div>
        <p className={`${stylingMessage}`}>{time}</p>
      </div>
    </>
  );
};

export default CommonPerson