import './Intro.css'

const Intro = ({ banner }) => {
  return (
    <>
      {banner.data !== undefined ? (
        <div className="intro_container">
          <div className="intro">
            <div className="intro_left">
              <h1>Modern Furnture</h1>
              <h2>Contemporary Pieces for Houses, Apartments & Lofts</h2>
              <p>
                Mingling timeless beauty with avant garde twists, contemporary
                furniture gives your space a fresh, edgy look that's all you.
              </p>
              <div className="intro_btn">
                <a href="#product_grid">Learn More</a>
              </div>
            </div>
            <div
              className="intro_right"
              style={{
                backgroundImage: `url(${banner.data[0].assets[1].url})`,
              }}
            ></div>
          </div>
        </div>
      ) : (
        'Loading'
      )}
    </>
  )
}

export default Intro
