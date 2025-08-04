import TopsellersCard from "../cards/TopsellersCard"

const TopSellers = () => {
  return (
    <section className='top-sellers-section'>
      <TopsellersCard
        topSellerName="John Doe"
        topSellerRole="ScriptWritter"
        topSellerNoProduct="Product(9)"
      />
      <TopsellersCard
        topSellerName="John Doe"
        topSellerRole="ScriptWritter"
        topSellerNoProduct="Product(9)"
      />
      <TopsellersCard
        topSellerName="John Doe"
        topSellerRole="ScriptWritter"
        topSellerNoProduct="Product(9)"
      />
    </section>
  )
}

export default TopSellers
