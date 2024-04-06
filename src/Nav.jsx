import React, { useState } from "react";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewListIcon from '@mui/icons-material/ViewList';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import logo from "../public/logo/rk-keep-high-resolution-logo-transparent (1).png"

const Nav=(props)=>{
  const[ico,setIco]=useState(false)
  const changeico=()=>{
    setIco(!ico)
  }
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <button className="btn mr-2"><DensityMediumIcon className="nav3line"/></button>
        <a className="navbar-brand" href="#"><img src={logo} alt="logo" className="logo"/></a>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
          <form className="form-inline">
            <input className="form-control pr-5 ml-5 long" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          </ul>
          <span className="navbar-text">
            <ul className="navbar-nav mr-auto">
              <a className="nav-link navicon" href="#" > <RefreshIcon/><span className="sr-only">(current)</span></a>
              <span onClick={changeico}><a className="nav-link navicon" onClick={()=>{props.changeAlign()}}>{ico ? <DashboardIcon/> : <ViewListIcon/> }</a></span>
              <a className="nav-link navicon" href="#"><SettingsIcon/></a>
            </ul>
          </span>
        </div>
      </nav>
    </>
  )
}

export default Nav;