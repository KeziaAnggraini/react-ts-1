import './App.css'
import avatar from './assets/avatar.jpeg'

function App() {
  return (
  <>
  <div className="homepage">
    <header className="header">
      <img src={avatar} alt="Avatar" className="avatar" />
      <div className="menu-icon">
        <div></div>
        <div></div>
        <div></div>
        </div>
        </header>
        </div>
        
        <main className="main-content">
          <h1 className="title">Find Me</h1>
          <div className="search-bar">
            <span className="material-icons icon">search</span>
            <input type="text" placeholder="Search" />
            <span className="material-icons icon">mic</span>
            </div>
            </main>
            
            <div className="quick-links">
              <div className="link-item">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <img src="/youtube.png" alt="YouTube" />
                </a>
                <p>YouTube</p>
                </div>
                
                <div className="link-item">
                  <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                  <img src="/pinterest.png" alt="Pinterest" />
                  </a>
                  <p>Pinterest</p>
                  </div>
                  <div className="link-item">
                    <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                    <img src="/x.png" alt="X" />
                    </a>
                    <p>X</p>
                    </div>
                    </div>
                    </>
                    )
                  }

export default App