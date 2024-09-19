export default function Header() {
  return (
    <header>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">生成AIかるた</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
              </svg>
            </button>
            <ul tabIndex={0} className="p-2 w-52 shadow dropdown-content menu bg-base-100 rounded-box">
              <li><a href="#">遊び方</a></li>
              <li><a href="#">お問い合わせ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}