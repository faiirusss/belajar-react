import CardProduct from "../components/Fragments/CardProduct"

const products = [
    {
        id: 1,
        name: "Kucing",
        price: "3.000.000",
        image: "/images/cat.jpg",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dicta dolorum animi? Corrupti maxime      labore odio optio eius debitis expedita totam! Itaque provident sapiente reprehenderit, quas neque tempore autem mollitia!`
    },
    {
        id: 2,
        name: "Robot",
        price: "1.000.000",
        image: "/images/animek.jpg",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dicta dolorum animi? Corrupti maxime      labore odio optio eius debitis expedita totam! Itaque provident sapiente reprehenderit, quas neque tempore autem mollitia!`
    },
]
const ProductPage = () => {
    return (
        <div className="flex justify-center py-20"> 
               
        {products.map((product) => (
            <CardProduct key={product.id}>
                <CardProduct.Header url={product.image}/>
                <CardProduct.Body title={product.name}>
                    {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price}/>
            </CardProduct>
        ))}
            
        </div>
    )
}

export default ProductPage