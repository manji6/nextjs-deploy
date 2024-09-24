"use client";
import Header from './header'
import Footer from './footer'


export default function Cardgame() {

  const showAnswer = () => {
    console.log("hoge");
  };

  const createDummyItem = (num: number) => {
    const items = [];
    const parts = <div className="box-content p-4">
      <div className="card bg-base-100 w-96 shadow-xl">
        <label className="swap">
          <input type="checkbox" />
          <div className="swap-off">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
          </div>
          <div className="swap-on">
            <figure>
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgc4C_pMB4Q-ul5WcUWlw2PPyW2Ve7F63-6v5_91USANAetMF6zUPh7LeXxFzCZhMKSl34lBvuHqRj2DUNqLa10YyDfpUrwqZ4_a8Yr85JnUaUK9Q2cX0JgT8C2PuL7tP8_27OCHNhJCl9y/s400/amabie_omairi_hatsumoude.png"
                alt="Shoes" />
            </figure>
          </div>
        </label>
        <div className="card-body">
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={showAnswer}>答えはこちら</button>
          </div>
        </div>
      </div>
    </div>;

    for (let i = 0; i < num; i++) {
      items.push(parts)
    }
    return items;
  };

  return (
    <div>
      <Header></Header>
      <div className="md:container md:mx-auto py-5">
        <h1 className="text-3xl font-bold text-primary">
          このかるた、一体なんのことわざ？
        </h1>
      </div>
      <div className="md:container md:mx-auto py-5">
        <div className="md:flex md:flex-wrap">
          {createDummyItem(8)}
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}