import React from 'react'
import ImageButton from './ImageButton'

function Main() {
  return (
          <div style={{ 
                    backgroundImage: `url("https://images.unsplash.com/photo-1638913660106-73b4bac0db09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80")` 
                  , height:"100vh", alignItems:"center" }}>

          <div className='row'>
                    <div className='col sm-1'>
                    <ImageButton img_url="https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png" img_label="Your Profile"/>
                    <ImageButton img_url="https://www.iconpacks.net/icons/1/free-settings-icon-778-thumb.png" img_label="Settings"/>
                    <ImageButton img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png" img_label="Social media"/>
                    </div>
                    <div className='col sm-1' style={{marginTop:"70px"}}>
                              <h1 style={{color:"blue"}}>OUR SERVICES</h1>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie consectetur sapien. Vestibulum accumsan lorem velit, ac sodales tortor mattis at. Sed efficitur, ipsum ornare laoreet congue, diam est aliquet erat, vel pulvinar nibh nibh ac enim. Praesent maximus condimentum mauris quis maximus. Nullam feugiat nulla lacinia velit dignissim auctor. Suspendisse viverra sagittis ultrices. Aliquam erat volutpat.

Nullam porta sagittis arcu. Cras rutrum metus sit amet augue mollis, molestie bibendum est rhoncus. Praesent sem turpis, pretium a viverra eu, imperdiet non turpis. Maecenas cursus tincidunt lectus at ultrices. Integer pharetra, neque eget ultrices rhoncus, magna tortor convallis justo, nec facilisis est ex vel lorem. Aenean convallis porta viverra. In iaculis mi turpis, in posuere est dapibus vitae. Curabitur id enim nec diam maximus euismod. Cras consequat neque nec consequat ultricies.</p>


                    </div>
                    <div className='col sm-1'>
                    <ImageButton img_url="https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png" img_label="Your Profile"/>
                    <ImageButton img_url="https://www.iconpacks.net/icons/1/free-settings-icon-778-thumb.png" img_label="Settings"/>
                    <ImageButton img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png" img_label="Social media"/>
                    </div>
          </div>               
    </div>
  )
}

export default Main