import Card from '../Card';
import cardList from '../data';

function spor () {
  return (
    <main className="container mx-auto py-36 px-8">
        <h3 className="text-3xl font-bold text-slate-500 mb-6 flex justify-center">
          Spor Eğitmenleri{' '}
        </h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {cardList.map((list) => (
          <Card key={list.id} list={list} />
        ))}
      </div>
    </main>
  );
}

export default spor