import React, { useState } from 'react'
import './Dashboard.css'
import MenuIcon from '@mui/icons-material/Menu';

const Dashboard = () => {

  const [menuValue, setMenuValue] = useState(true)
  

  return (
    <div>
      <div className='header'>
        <div id='humBurger' onClick={()=>{
          setMenuValue(!menuValue)
        }}>
        <MenuIcon className='burger'  />
        </div>
        <input placeholder='Search...' className='search'/>
      </div>
      <div className='main'>
        {menuValue&& <div class='nav' id='navBar'>
            <a href='#' class='solo'><iconify-icon icon="material-symbols:home-outline"></iconify-icon>DASHBOARD</a>
            <a href='#'><iconify-icon icon="material-symbols:person-outline-rounded"></iconify-icon> CHATS</a>
            <a href='#'><iconify-icon icon="bx:file-blank"></iconify-icon>CARDS</a>
            <a href='#'><iconify-icon icon="bx:book-content"></iconify-icon>WIDGITS</a>
            <a href='#'><iconify-icon icon="solar:server-2-outline"></iconify-icon>COMPONENTS</a>
            <a href='#'><iconify-icon icon="ic:round-mail-outline"></iconify-icon>PAGES</a>
        </div>}
       
        <div>
        <div>
          <div className='dashboard'>
            Dashboard
          </div>
          <div className='row pro' style={{width:'100%'}}>
                <div class='col-12 col-sm-6 col-md-6 col-lg-3'>
                  <div className="card card-body">
                  <div className='progress'>
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="90"  style={{width:'95%'}}></div>
                    </div>
                    <h4 style={{textAlign:'center'}}>HTML</h4>
                  </div>
                </div>

                <div class='col-12 col-sm-6 col-md-6 col-lg-3'>
                  <div className="card card-body">
                  <div className='progress'>
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="90"  style={{width:'90%'}}></div>
                    </div>
                    <h4 style={{textAlign:'center'}}>CSS</h4>
                  </div>
                </div>


                <div class='col-12 col-sm-6 col-md-6 col-lg-3'>
                  <div className="card card-body">
                  <div className='progress'>
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="90"  style={{width:'85%'}}></div>
                    </div>
                    <h4 style={{textAlign:'center'}}>Javascript</h4>
                  </div>
                </div>


                <div class='col-12 col-sm-6 col-md-6 col-lg-3'>
                  <div className="card card-body">
                  <div className='progress'>
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="90"  style={{width:'85%'}}></div>
                    </div>
                    <h4 style={{textAlign:'center'}}>ReactJs</h4>
                  </div>
                </div>
            </div>
        </div>
        <div>
        <div class="row car" style={{width:'100%'}}>
  <div class="col-12 col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
<div class="card mt-4 lCar" style={{width:'100%'}}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.</p>
  </div>
</div>
        </div>
      </div>
    </div>
 </div>
  )
}

export default Dashboard