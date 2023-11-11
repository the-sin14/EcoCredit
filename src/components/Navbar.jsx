import './Navbar.css'

export const Navbar = () => {
  return (
    <>
        <nav class="navbar">
            <div className="logo">
              <a href="">Logo Here</a>
            </div>
            <div className="left-nav">
              <div className="link">
                <a href='#'>Trends</a>
                <a href='#'>Sustainability</a>
              </div>
              <a href='#'><img src="./src/assets/icons8-user-50.png" alt="" /></a>
            </div>
        </nav>
    </>
  )
}
