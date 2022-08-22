import React from "react";

const CommentCard = () => {
  return (
    <div className='w-80 rounded-2xl overflow-hidden shadow-lg'>
      <div className='bg-white text-charcoal h-48'>
        <div className='flex flex-col flex-wrap mx-4 py-10'>
          {/* <q className='italic line-clamp-6 text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam eius earum ut
              molestias architecto voluptate aliquameius earum ut molestias
              architecto voluptate aliquameius earum ut molestias architecto
              voluptate aliquam
            </q> */}
          <div className='italic text-center'>
            <span className='text-teal-400 text-4xl leading-3 font-serif'>
              “
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae
            <span className='text-teal-400 text-4xl leading-3 font-serif'>
              „
            </span>
          </div>
        </div>
      </div>
      <div className='flex-center flex-col pt-4 relative h-32 bg-teal-700'>
        <h4 className='text-white text-lg uppercase font-semibold tracking-wider'>
          John Smith
        </h4>
        <h5 className='text-teal-200'>Google Inc.</h5>
        <div className='absolute overflow-hidden border-4 border-white left-1/2 -top-16 rounded-full w-16 h-16  transform -translate-x-1/2 translate-y-1/2'>
          <img
            src='https://avatars.githubusercontent.com/u/35654946?v=4'
            alt='logo'
          />
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
