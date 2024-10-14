export default function Page() {
  return (
    <>
      <div className="p-5 bg-gradient-to-r from-slate-400 to-slate-100">
        <div className="pb-5">
          <div className="navbar bg-base-100 bg-white shadow shadow-2xl rounded-lg">
            <div className="md:hidden flex-none">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10000] mt-3 w-52 p-2 shadow">
                  <li><a>A</a></li>
                  <li><a>B</a></li>
                  <li><a>C</a></li>
                </ul>
              </div>
            </div>
            <div className="flex-1">
              <a className="btn btn-ghost text-xl">Web Site</a>
            </div>
            <div className="flex-none invisible md:visible">
              <ul className="menu menu-horizontal px-1">
                <li><a>A</a></li>
                <li><a>B</a></li>
                <li><a>C</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="z-auto">
          <div className="container max-w-full shadow shadow-2xl pb-5 z-auto">
            {/* Hero Container */}
            <div className="hero bg-white min-h-64 shadow shadow-2xl rounded-lg opacity-95">
              <div className="hero-content text-center">
                <div className="">
                  <div className="flex">
                    <div className="flex flex-col mx-5">

                      <div>
                        <p className="py-6 text-3xl font-bold text-violet-600">
                          Page Title
                        </p>

                      </div>
                      <div className="mt-auto mb-5">
                        Anything Content
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}