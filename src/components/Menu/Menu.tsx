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
        <div className="dropdown xs:inline-block lg:flex relative items-center">
          <button
            type="button"
            className="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
          >
            <span className="mr-1">File</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
            </svg>
          </button>
          <ul className="dropdown-menu absolute hidden text-gray-700 p-0 divide-y divide-gray-700">
            <li className="">
              <ul>
                <li>
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    New
                  </a>
                </li>
                <li>
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Open
                  </a>
                </li>
              </ul>
            </li>
            <li className="">
              <ul>
                <li>
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Save
                  </a>
                </li>
                <li>
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Save As
                  </a>
                </li>
              </ul>
            </li>
            <li className="">
              <ul>
                <li>
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Import
                  </a>
                </li>
                <li>
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Export
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a
          href="#"
          className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none font-semibold"
        >
          Options
        </a>
        <a
          href="#"
          className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none font-semibold"
        >
          Help
        </a>
      </div>
      <p className="text-blue-900 pr-3 font-semibold">Card List</p>
    </nav>
  )
}

export default Menu
