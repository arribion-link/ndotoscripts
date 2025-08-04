type TopsellersCardProps = {
    topSellerName: string,
    topSellerRole: String,
    topSellerNoProduct: String,
}

const TopsellersCard =
    ({ topSellerName, topSellerRole, topSellerNoProduct}:TopsellersCardProps) => {
  return (
      <>
          <div>
              <img
                  src=""
                  alt="Author's cover image"
                  className="top-Seller-cover-image"
              />
              <div>
                  <div>
                      <img
                          src=""
                          alt={topSellerName}
                          className="top-Seller-Profile-Picture"
                      />
                  </div>
                  <div className="top-seller-stars">
                      
                  </div>
                  <h2>{topSellerName}</h2>
                  <h3>{ topSellerRole }</h3>
                  <p>{ topSellerNoProduct }</p>
              </div>
          </div>
      </>
  )
}

export default TopsellersCard
