const Header = ({ toggleMenu, darkMode, searchQuery, setSearchQuery }) => {
    return (
      <nav className="navbar navbar">
        
         <div className=  { ("container-fluid" ,  "navbar-dark bg-dark" , "navbar-light bg-light")}></div>

        <a className="navbar-brand" href="#">
            
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="navbarColor"
            
          >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="navbar-item">
                <a className="navbar-link" href="#">
                  
                </a>
              </li>
              <li className="navbar-item">
                <a className="navbar-link" href="#">
                  
                </a>
              </li>
            </ul>
             <div className="d-flex justify-content-center align-items-center flex-grow-1">
              <form className="form-inline my-2 my-lg-0 mr-2">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
              <button
                className="btn btn-outline-danger m-2 my-sm-0"
                type="submit"
              >
    
              </button>
            </div>
            <div className="form-check form-switch">
              <label
                className={`form-check-label ${darkMode ? "text-white" : null}`}
            
              >
                
                {darkMode ? "Dark Mode" : "Light Mode"}
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                id="lightSwitch"
                onClick={toggleMenu}
                defaultChecked={darkMode ? true : false}
              />
            </div>
          </div>
          </nav>
    ) 

    }   

  export default Header;