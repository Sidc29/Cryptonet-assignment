import React from "react";
import { ImageSkeleton, TextSkeleton } from "./common/loaders/";

const UserCard = ({ loading, user }) => {
  return (
    <div className="App">
      <div className="flex justify-center items-center w-full h-screen">
        <div className="bg-white shadow-lg mx-auto items-center max-w-4xl w-full rounded-md p-4 flex flex-col md:flex-row">
          <div className="md:w-1/2">
            {loading ? (
              <ImageSkeleton />
            ) : (
              <img
                className="object-cover w-full md:w-72 h-72 rounded-md md:rounded-md"
                src={user?.picture.large}
                alt="User"
              />
            )}
          </div>
          <div className="md:w-1/2 p-4">
            {loading ? (
              <TextSkeleton />
            ) : (
              <>
                <h2 className="text-5xl font-semibold">
                  {user?.name.first} {user?.name.last}
                </h2>
                <p className="text-gray-600 text-xl mt-2 capitalize">
                  <strong>Gender:</strong> {user?.gender}
                </p>
                <p className="text-gray-600 text-xl">
                  <strong>Phone Number:</strong> {user?.phone}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
