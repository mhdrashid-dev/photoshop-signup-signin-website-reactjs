import React,{useEffect} from 'react'
import AccountPage from './Pages/AccountPage'
import AdobeWebsitePage from './Pages/AdobeWebsitePage'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'


function App() {

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/*' element={<AccountPage></AccountPage>}></Route>
          <Route path='/home' element={<AdobeWebsitePage></AdobeWebsitePage>}></Route>          
        </Routes>
      </Router>
    </div>
  )
}

export default App
