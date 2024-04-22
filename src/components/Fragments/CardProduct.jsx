import Button from "../Elements/Button"

const CardProduct = (props) => {
  const { children } = props
  return (
    <div className="card max-w-sm glass ms-5 mx-3 my-3">
      {children}
    </div>
  )
}
const Header = (props) => {
  const { url } = props
  return (
    <figure>
      <a href="#">
        <img src={url} alt="product" />
      </a>
    </figure>    
  )
}
const Body = (props) => {
  const { name, children } = props
    return (
      <div className="card-body">
        <a href="">
          <h2 className="card-title font-semibold text-white tracking-tight text-3xl">{name}</h2>
          <p>
            {children}
          </p>
        </a>                
      </div>
    )
}

const Footer = (props) => {
  const { price, handleAddToCart, id } = props
    return (
      <div className="flex items-center pb-5 px-8 justify-between">
        <span className="text-xl font-bold text-white">
          {price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
        </span>
        <Button className="btn btn-secondary" onClick={() => handleAddToCart(id)}>
          Add to cart
        </Button>
      </div>
    )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct