import {FaTwitter} from 'react-icons/fa'

function App() {

  return (
    <>
      <div className="grid place-items-center h-screen bg-slate-900">
        <div className="w-[500px] bg-slate-100 p-6">
          <p className="text-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates exercitationem atque eaque tempore 
            adipisci, pariatur fuga voluptate ex molestiae, qui fugiat quia? Reprehenderit consequuntur ad odit, quam 
            magni dolorem rem?
          </p>
          <p className="text-right text-lg pb-2">Victor Hugo</p>
          <div className="flex justify-between">
            <button className="p-3 rounded-md bg-slate-900">
              <FaTwitter className="text-white" />
            </button>
            <button className="p-2 rounded-md bg-slate-900 text-white">
              New Quote
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App