import React from 'react'
import AccountPage from './Pages/AccountPage'
import AdobeWebsitePage from './Pages/AdobeWebsitePage'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
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
