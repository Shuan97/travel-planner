import React from "react";

const Profile = () => {
  return (
    <>
      <div>
        <div className='w-80 border-2 border-charcoal rounded-full overflow-hidden shadow-2xl mb-4'>
          <img
            src='https://avatars.githubusercontent.com/u/35654946?v=4'
            alt=''
          />
        </div>
        <div className='text-xl'>Jarek Matura</div>
        <div className='text-sm text-gray-400'>
          488e8ba7-515d-44ab-abdf-3736b5622b0a
        </div>
      </div>
      <div className=''>
        <button className='px-4 py-2 my-2 bg-slate-900 hover:bg-slate-800 rounded-md w-full'>
          Edit profile
        </button>
        <div className='text-gray-400'>Kraków, Poland</div>
        <div className='text-gray-400'>#FFAA32</div>
        <div className='text-gray-400'>
          <a href='https://google.com'>https://google.com</a>
        </div>
      </div>
    </>
  );
};

export default Profile;
