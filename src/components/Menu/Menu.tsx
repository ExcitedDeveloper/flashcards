/* eslint-disable jsx-a11y/anchor-is-valid */

const Menu = () => {
  const toggleMenu = () => {
    const navToggle = document.getElementsByClassName('toggle')
    for (let i = 0; i < navToggle.length; i += 1) {
      navToggle?.item(i)?.classList.toggle('hidden')
    }
  }

  return (
    <nav className="flex flex-wrap items-center justify-between bg-blue-200">
      <div className="flex md:hidden">
        <button id="hamburger" type="button" onClick={toggleMenu}>
          <img
            className="toggle block"
            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
            width="40"
            height="40"
            alt="toggle show"
          />
          <img
            className="toggle hidden"
            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
            width="40"
            height="40"
            alt="toggle hide"
          />
        </button>
      </div>
      <div className="toggle hidden md:flex w-full md:w-auto text-right text-bold md:mt-0 border-t-2 border-blue-900 md:border-none">
        <a
          href="#"
          className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
        >
          File
        </a>
        <a
          href="#"
          className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
        >
          Options
        </a>
        <a
          href="#"
          className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
        >
          Help
        </a>
      </div>
      <p className="text-blue-900 pr-3">Card List</p>
    </nav>
  )
}

export default Menu
