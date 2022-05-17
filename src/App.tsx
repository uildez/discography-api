import { Content } from './component/Content/Content'
import { Navbar } from './component/Navbar/Navbar'
import './style/App.scss'

import { AlbumContextProvider } from './contexts/AlbumContext'

function App() {
  return (
    <div className="App">
      <div className="content">
        <Navbar />
        <AlbumContextProvider>
          <Content />
        </AlbumContextProvider>
      </div>
    </div>
  )
}

export default App