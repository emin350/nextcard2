import Card from './Card';
import cardList from './data';

const page = () => {
  return (
    <main className="container mx-auto py-36 px-8">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {cardList.map((list) => (
          <Card key={list.id} list={list} />
        ))}
      </div>
    </main>
  );
};
export default page;

// import cardList from './data';

// export default function Home() {
//   return (
//     <main className="container mx-auto py-36 px-8">

//       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">

//         {cardList.map((card) => (
//           <div className='shadow-lg rounded-lg grid justify-items-center '>
//             <img className=' rounded-full  w-36 h-36 object-cover flex justify-center ' src={card.img} alt="" />
//             <div className='p-5'>
//               <div className='flex justify-center text-xl font-bold text-slate-700 mb-3 '>
//               <p>{card.stars}</p>
//               <p>{card.stars}</p>
//               <p>{card.stars}</p>
//               <p>{card.stars}</p>
//               <p>{card.stars}</p>
//             </div>
//             <h9 className='text-xl font-bold text-slate-700 mb-3 flex justify-center'>{card.name}</h9>
//             <p className='text-lg font-normal text-gray-600'>{card.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }
