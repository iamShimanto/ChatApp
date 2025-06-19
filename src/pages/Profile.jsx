import React, { useRef, useState } from "react";
import {
  FaEdit,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { getAuth, updateProfile } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { loggedUser } from "../store/slices/authSlice";

const Profile = () => {
  const userInfo = useSelector((state) => state.userData.user);
  const dispatch = useDispatch();
  const updateProfileRef = useRef(null);
  const [editable, setEditable] = useState(false);
  const auth = getAuth();
  const [updateData, setUpdateData] = useState({
    avatar: "",
    userName: "",
  });

  document.addEventListener("mousedown", (e) => {
    if (
      updateProfileRef.current &&
      !updateProfileRef.current.contains(e.target)
    ) {
      setEditable(false);
    }
  });

  const handleEnableEdit = () => {
    setEditable(true);
  };

  const handleUpdate = () => {
    updateProfile(auth.currentUser, {
      displayName: updateData.userName || userInfo.displayName,
      photoURL: updateData.avatar || userInfo.photoURL,
    })
      .then(() => {
        toast.success("Profile Updated Successfully!");
        dispatch(loggedUser(auth.currentUser));
        setEditable(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center w-full relative">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="card duration-300 relative">
        <div
          onClick={handleEnableEdit}
          className="text-white absolute top-10 right-15 text-2xl hover:text-green-300 duration-300 cursor-pointer"
        >
          <FaEdit />
        </div>
        <center>
          <div className="profileimage">
            <img
              className="rounded-full"
              src={userInfo.photoURL}
              alt="profile_photo"
            />
          </div>
          <div className="Name">
            <p>{userInfo.displayName}</p>
          </div>
          <div className="email">
            <p className="text-white font-inter font-thin text-sm">
              {userInfo.email}
            </p>
          </div>
          <div className="socialbar flex justify-center items-center gap-1.5">
            <Link id="github" to="#">
              <FaGithub />
            </Link>
            &nbsp; &nbsp; &nbsp;
            <Link id="instagram" to="#">
              <FaInstagram />
            </Link>
            &nbsp; &nbsp; &nbsp;
            <Link id="facebook" to="#">
              <FaFacebook />
            </Link>
            &nbsp; &nbsp; &nbsp;
            <Link id="twitter" to="#">
              <FaTwitter />
            </Link>
          </div>
        </center>
      </div>
      {editable && (
        <div
          className="bg-[rgba(13,17,20,0.9)] absolute top-5/10 left-5/10 -translate-5/10 p-10 rounded-2xl"
          ref={updateProfileRef}
        >
          <div className=" flex flex-col items-center bg-brand p-8 rounded">
            <input
              onChange={(e) =>
                setUpdateData((prev) => ({ ...prev, avatar: e.target.value }))
              }
              type="text"
              placeholder="Edit Your PhotoURL"
              className={`w-full pl-10 pr-4 py-4 bg-[#1E2124] border-2  "border-[#2C2F33]"
              rounded-lg text-white placeholder-[#99AAB5] focus:outline-none focus:border-[#7289DA] transition-all hover:border-[#7289DA] mb-2`}
            />
            <input
              onChange={(e) =>
                setUpdateData((prev) => ({ ...prev, userName: e.target.value }))
              }
              type="text"
              placeholder="Edit Your Name"
              className={`w-full pl-10 pr-4 py-4 bg-[#1E2124] border-2  "border-[#2C2F33]"
              rounded-lg text-white placeholder-[#99AAB5] focus:outline-none focus:border-[#7289DA] transition-all hover:border-[#7289DA]`}
            />
            <div className="flex gap-5 justify-center mt-10">
              <button
                onClick={handleUpdate}
                className="py-2 px-3 bg-green-500 hover:bg-green-600 duration-300 rounded text-white cursor-pointer"
              >
                Update
              </button>
              <button
                onClick={() => setEditable(false)}
                className="py-2 px-3 bg-red-500 hover:bg-red-600 duration-300 rounded text-white cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
