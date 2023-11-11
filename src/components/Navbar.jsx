import './Navbar.css'

export const Navbar = () => {
  return (
    <>
        <nav class="navbar">
            <div className="logo">
              <a href="">Logo Here</a>
            </div>
            <div className="left-nav">
              <div className="badges">
                <button>Badge 1</button>
                <button>Badge 2</button>
                <button>Badge 3</button>
              </div>
              <button class="hamburger-menu"><img src="./src/assets/icons8-menu-50.png" alt="" /></button>
            </div>
        </nav>
    </>
  )
}
