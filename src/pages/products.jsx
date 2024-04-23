import Button from "../components/Elements/Button"
import CardProduct from "../components/Fragments/CardProduct"
import { useEffect, useState } from "react"

const products = [
    {
        id: 1,
        name: "Kucing",
        price: 3000000,
        image: "/images/cat.jpg",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dicta dolorum animi? Corrupti maxime      labore odio optio eius debitis expedita totam! Itaque provident sapiente reprehenderit, quas neque tempore autem mollitia!`
    },
    {
        id: 2,
        name: "Robot",
        price: 500000,
        image: "/images/animek.jpg",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dicta dolorum animi? Corrupti maxime      labore odio optio eius debitis expedita totam! Itaque provident sapiente reprehenderit, quas neque tempore autem mollitia!`
    },
    {
        id: 3,
        name: "Bintang",
        price: 1000000,
        image: "/images/animek.jpg",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dicta dolorum animi? Corrupti maxime      labore odio optio eius debitis expedita totam! Itaque provident sapiente reprehenderit, quas neque tempore autem mollitia!`
    },
]

const email = localStorage.getItem("email")

const ProductPage = () => {
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || [])
  }, [])
  
  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id)
        return acc + product.price * item.qty
      }, 0)
      setTotalPrice(sum)
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart])

  // useEffect(() => {
  //   if (cart.length > 0) {
  //     const sum = cart.reduce((acc, item) => {
  //       const product = products.find((product) => product.id === item.id)
  //       return acc + product.price * item.qty
  //     },0)
  //     setTotalPrice(sum)
  //     localStorage.setItem("cart", JSON.stringify(cart))
  //   }
  // }, [cart])

  const handleLogout = () => {
    localStorage.removeItem("email")
    localStorage.removeItem("password")
    window.location.href = "/login"
  }

  const handleAddToCart = (id) => {
    if(cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) => item.id === id ? {...item, qty: item.qty + 1} : item)
      )
    } else {
      setCart([...cart, {id, qty: 1}])
    }
  }


  return (
    <>
      <div className="px-5 py-3">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">FAIRUS.</a>
          </div>
          <div className="flex-none gap-2">            
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between my-3">
                    {email}
                  </a>
                </li>
                <li>
                  <Button onClick={handleLogout}>Logout</Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-20">                
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header url={product.image}/>
              <CardProduct.Body title={product.name}>
                  {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
        ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-500">Cart</h1> 

          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>                  
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
              {cart.map((item) => {
                const product = products.find((product) => product.id === item.id)
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>{product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                    <td>{item.qty}</td>
                    <td>{(product.price * item.qty).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                  </tr>
                )
              })}
              <tr>
                <td colSpan={3}><b>Total Price</b></td>
                <td><b>{totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</b></td>
              </tr>
            </tbody>                          
            </table>
          </div>          
        </div>
      </div>

      {/* classles version */}
      {/* <div className="flex justify-center w-100">
        <Counter></Counter>
      </div> */}
    </>
  )
}

export default ProductPage