import './Header.css'

const Header = ({ banner }) => {
  console.log(banner.data)
  return (
    <>
      {banner.data !== undefined ? (
        <div
          id="header"
          style={{
            backgroundImage: `url(${banner.data[0].assets[0].url})`,
          }}
        >
          <div className="header_main">
            <div className="header_content">
              <h2>A beautiful house</h2>
              <h1>Modern</h1>
              <p>
                Your home should be a story of who you are, and be a collection
                of what you love.
              </p>
            </div>
          </div>
        </div>
      ) : (
        'Loading'
      )}
    </>
  )
}

export default Header
