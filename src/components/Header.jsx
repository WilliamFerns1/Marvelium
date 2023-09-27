

export default function Header() {
  return (
    <header>
      <h1><span>Marvel</span>ium.</h1>
      <div className="search-bar">
        <input placeholder="search a superhero" className="search-bar-input" type="text" />
        <i className='bx bx-search-alt-2'></i>
      </div>
    </header>
  )
}