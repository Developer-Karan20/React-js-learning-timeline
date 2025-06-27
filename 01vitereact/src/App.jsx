
import Chai from "./Chai"


function App() {
  username = "chai aur bakchodi"

  return (
    <>
    <Chai/>
    <h1>chai aur react {username}</h1> {/*same js jaise curly brace laga diya to variable treat hoga. isko kehte hai evaluated expression ya sirf expression ye javascript ka final outcome jo evaluate ho chuka hai*/}
    <p>test para</p>
    </>
  )
}

export default App
