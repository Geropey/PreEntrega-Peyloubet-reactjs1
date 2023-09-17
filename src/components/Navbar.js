import CartWidget from "./CartWidget/cartwidget"

const Navbar = () => {
    return(
        <nav>
            <h3>Kasnya</h3>
            <div>
                <button>polleras</button>
                <button>tops</button>
                <button>gorros</button>
            </div>
            <CartWidget />
        </nav>
    )
}


export default Navbar