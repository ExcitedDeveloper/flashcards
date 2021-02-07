/* eslint-disable jsx-a11y/anchor-is-valid */
import './Menu.css'

const Menu = () => {
  const toggleMenu = () => {
    const navToggle = document.getElementsByClassName('toggle')
    for (let i = 0; i < navToggle.length; i += 1) {
      navToggle?.item(i)?.classList.toggle('hidden')
    }
  }

  const toggleSubMenu = (subMenuId: string) => {
    console.log(`toggle ${subMenuId}`)
    // First close any open submenus
    const submenus = document.getElementsByClassName('submenu')

    if (submenus) {
      Array.from(submenus).forEach(submenu =>
        submenu.setAttribute('display', 'none')
      )
    }

    // Now toggle the desired menu
    const menu = document.getElementById(subMenuId)

    console.log(`toggle 1`)
    if (!menu) return

    const { display } = menu.style
    console.log(`toggle 2 display = ${display}`)

    if (display === 'none' || !display) {
      console.log(`toggle 3`)
      menu.style.display = 'flex'
    } else {
      console.log(`toggle 4`)
      menu.style.display = 'none'
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
        <div className="dropdown inline-block relative">
          <button
            type="button"
            className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
          >
            <span className="mr-1">Dropdown</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
            </svg>
          </button>
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
            <li className="">
              <a
                className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                One
              </a>
            </li>
            <li className="">
              <a
                className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Two
              </a>
            </li>
            <li className="">
              <a
                className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
              >
                Three is the magic number
              </a>
            </li>
          </ul>
        </div>
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

/*

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
          onClick={() => toggleSubMenu('fileMenu')}
        >
          File
        </a>
        <div id="fileMenu" className="hidden flex-col">
          <div>Save</div>
          <div>Save As</div>
        </div>
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

*/

/*

<nav
      aria-label="primary"
      className="relative z-20 flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row"
    >
      <div className="relative group">
        <button
          type="button"
          className="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat"
        >
          <span>First Dropdown</span>
        </button>
        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
          <div className="px-2 pt-2 pb-4 bg-white bg-gray-200 shadow-lg">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <p>dropdown content here</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative group">
        <button
          type="button"
          className="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat"
        >
          <span>Second Dropdown</span>
        </button>
        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
          <div className="px-2 pt-2 pb-4 bg-white bg-gray-200 shadow-lg">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <p>dropdown content here</p>
            </div>
          </div>
        </div>
      </div>
    </nav>

*/

export default Menu
