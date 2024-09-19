import Header from './header'
import Footer from './footer'

export default function Cardgame() {
  return (
    <div>
      <Header></Header>
      <div className="md:container md:mx-auto py-5">
        <h1 className="text-3xl font-bold underline text-orange-500">
          このかるた、一体なんのことわざ？
        </h1>
      </div>
      <div className="md:container md:mx-auto py-5">
        <div className="md:flex md:flex-wrap">
          <div className="w-64 box-content p-4 border-4">item 1</div>
          <div className="w-64 box-content p-4 border-4">item 1</div>
          <div className="w-64 box-content p-4 border-4">item 1</div>
          <div className="w-64 box-content p-4 border-4">item 1</div>
          <div className="w-64 box-content p-4 border-4">item 1</div>
          <div className="w-64 box-content p-4 border-4">item 1</div>
          <div className="w-64 box-content p-4 border-4">item 1</div>
          <div className="w-64 box-content p-4 border-4">item 1</div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}