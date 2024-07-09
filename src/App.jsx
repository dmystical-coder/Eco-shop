import { useState, useEffect } from 'react'


function App() {
  const [results, setResults] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setResults(data);
      })
  }, [])
  return (
    <>
      <div className='grid-container'>
        {results.map(d => (
          <div key={d.id} className="product-card">
            <div className="product-card__image">
              <img src="./src/assets/alber-ring.png" alt="" />
            </div>
            <div className="product-card__content">
              <div className="product-card__content-top">
                <h4 className="product-card__content-title">{d.title}</h4>
                <div className="rating">
                  <span>4.5</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M10.2957 2.58313L11.6155 5.24466C11.7955 5.61515 12.2755 5.97052 12.6805 6.03857L15.0727 6.43931C16.6025 6.6964 16.9625 7.81545 15.8601 8.91937L14.0003 10.7945C13.6853 11.1121 13.5129 11.7245 13.6103 12.1631L14.1428 14.4844C14.5627 16.3217 13.5953 17.0325 11.983 16.0722L9.74077 14.7339C9.33585 14.4919 8.66842 14.4919 8.25592 14.7339L6.0137 16.0722C4.40887 17.0325 3.43399 16.3141 3.85394 14.4844L4.38638 12.1631C4.48387 11.7245 4.31139 11.1121 3.99642 10.7945L2.13663 8.91937C1.04175 7.81545 1.39421 6.6964 2.92404 6.43931L5.31628 6.03857C5.71373 5.97052 6.19368 5.61515 6.37366 5.24466L7.6935 2.58313C8.41342 1.13896 9.58327 1.13896 10.2957 2.58313Z"
                      fill="#EBB651"
                      stroke="#EBB651"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="product-card__content-bottom">
                <p className="product-card__content-price">$500,000</p>
                <a className="cart" href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                    <path
                      d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6"
                      stroke="#141B34"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5"
                      stroke="#141B34"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5"
                      stroke="#141B34"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 22C11.3284 22 12 21.3284 12 20.5C12 19.6716 11.3284 19 10.5 19C9.67157 19 9 19.6716 9 20.5C9 21.3284 9.67157 22 10.5 22Z"
                      stroke="#141B34"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M17.5 22C18.3284 22 19 21.3284 19 20.5C19 19.6716 18.3284 19 17.5 19C16.6716 19 16 19.6716 16 20.5C16 21.3284 16.6716 22 17.5 22Z"
                      stroke="#141B34"
                      strokeWidth="1.5"
                    /></svg
                  ></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
