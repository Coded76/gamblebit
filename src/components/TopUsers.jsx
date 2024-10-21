import React from 'react';
import { FaTrophy } from 'react-icons/fa';

const TopUsers = ({ users }) => {
  return (
    <div className="bg-white p-5 rounded-md">
      <h2 className="text-xl flex items-center gap-2 font-bold">
        <FaTrophy className="text-yellow-500" />
        Top Users
      </h2>
      {users.map((user, index) => (
        <div key={index} className="flex justify-between mt-3">
          <span>{user.name}</span>
          <span>${user.betVolume}</span>
        </div>
      ))}
    </div>
  );
};

export default TopUsers;
