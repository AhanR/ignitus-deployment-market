import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/product';
import Cart from '../components/cart';
import { Link } from 'react-router-dom';
import { catalougeInterface } from '../reducers/catalouge';

export default function Home() {

    const catalouge = useSelector((store:any) => store.catalouge);
    const [cartOpen, setCartOpen] = useState(true);

  return (
    <div>
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 10,
                marginTop: 10,
                padding: 10
            }}
        >
            <h2
                style={{
                    margin: 0,
                }}
            >Online Cart</h2>
            <div
                style={{
                    display: 'flex',
                    gap: 10
                }}
            >
                <button
                    style={{
                        paddingLeft: 20,
                        paddingRight: 20,
                        borderRadius: 20,
                        background: "none",
                        border: "2px solid white",
                        color: 'white',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                    onClick={()=>setCartOpen(s=>!s)}
                >
                    Cart
                </button>
                <Link
                    style={{
                        borderRadius: 20,
                        color: 'white',
                        border: "none",
                        background: "#3d85c1",
                        textDecoration: "none",
                        textAlign: 'center',
                        paddingLeft: 20,
                        paddingRight: 20,
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    to={"/checkout"}
                >
                    Check out
                </Link>
            </div>
        </nav>
        <div 
            className=' w-screen ' 
            style={{
                boxSizing: "border-box",
                width: "100%",
                display: "flex",
                flexWrap: 'wrap',
                gap: "30px",
                padding: 10
            }}
        > 
            {catalouge.map((prod:catalougeInterface) => <Product details={prod} key={prod.id} />)}
        </div>
        {cartOpen?<Cart opener={setCartOpen} />:""}
    </div>
  )
}