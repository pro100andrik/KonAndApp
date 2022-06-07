const Header = props => {
  const handleClick = whatToShow => {
    props.handleSwitchShowPage(whatToShow)
  }

    return (
      <div className='navbar'>
        <ul className="navbar-menu">
          <li key="works"
          className={props.showPage === 'myWork' ? "item menu-active-item" : "item"}
          onClick={() => handleClick('myWork')}> My Work </li>

          <li key="about"
          className={props.showPage === 'aboutMe' ? "item menu-active-item" : "item"}
          onClick={() => handleClick('aboutMe')}> About Me </li>
        </ul>
      </div>
    )
}



export default Header;
