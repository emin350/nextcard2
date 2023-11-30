import numToStars from './numToStars';
import { BsCameraVideo } from 'react-icons/bs';
import { BsTelephone } from 'react-icons/bs';
import { GrLanguage } from 'react-icons/gr';

const Card = ({ list }) => {
  return (
    <div className="container">
      <div className="shadow-lg rounded-lg grid justify-items-center">
        {/* image */}
        <img
          className=" rounded-full  w-36 h-36 object-cover flex justify-center "
          src={list.img}
          alt=""
        />

        <div className="p-5">
          {/* Stars */}
          <div className="flex justify-center text-xl font-bold text-slate-700 mb-3 p-5 ">
            {numToStars(list.stars)}
          </div>

          {/* Name */}
          <h9 className="text-xl font-bold text-slate-700 mb-3 flex justify-center">
            {list.name}
          </h9>

          {/* Description */}
          <div className="text-s text-slate-700 mb-3 flex justify-center">
            {list.desc}
          </div>

          {/* icons */}
          <div className="flex justify-center mx-3 ">
            <div className="flex text-s text-slate-700 mb-3 mx-3">
              {' '}
              <BsCameraVideo className="m-1" /> {list.camera}
            </div>
            <div className="flex text-s text-slate-700 mb-3 mx-3">
              {' '}
              <BsTelephone className="m-1" /> {list.tel}
            </div>
            <div className="flex text-s text-slate-700 mb-3 mx-3">
              {' '}
              <GrLanguage className="m-1" /> {list.lang}
            </div>
          </div>

          {/* Skills */}
          <div className="m-7">
            <button className=" bg-gray hover:bg-white text-black py-2 px-4 border border-gray rounded-full shadow m-1 ">
              {list.skill1}
            </button>
            <button className=" bg-gray hover:bg-white text-black py-2 px-4 border border-gray rounded-full shadow m-1 ">
              {list.skill2}
            </button>
            <button className=" bg-gray hover:bg-white text-black py-2 px-4 border border-gray rounded-full shadow m-1 ">
              {list.skill3}
            </button>
            <button className=" bg-gray hover:bg-white text-black py-2 px-4 border border-gray rounded-full shadow m-1 ">
              {list.skill4}
            </button>
            <button className=" bg-gray hover:bg-white text-black py-2 px-4 border border-gray rounded-full shadow m-1 ">
              {list.skill5}
            </button>
          </div>
        </div>

          {/* Eğitim sertifikaları */}
        <h3 className="text-l font-bold text-slate-500 mb-3 flex justify-center">
          Eğitim ve Sertifikaları Gör{' '}
        </h3>

        <br />
        <hr className="text-l font-bold" />

        {/* Price */}
        <h3 className="flex justify-center">
          <b>{list.price} </b>
          <span className="text-s text-slate-700 mb-3 flex justify-center px-3">
            (Minumum Tutar)
          </span>
        </h3>

        <button className="bg-green hover:bg-gray text-white py-1 px-7 border border-gray rounded-full shadow m-3 ">
          Hemen Başla
        </button>
      </div>
    </div>
  );
};

export default Card;
