import { Key, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../reducers/cart';
import { catalougeInterface } from '../reducers/catalouge';

interface cartElementProps {
    detail: String,
    key: Key
}

export default function CartElement(props: cartElementProps) {
    const catalouge = useSelector((s: any )=>s.catalouge)
    const [prod, setProd] = useState(catalouge.filter((x:catalougeInterface)=>x.id==props.detail)[0]);
    const [isHover, setIsHover] = useState(false);
    const dispatcher = useDispatch();

  return (
    <div
        onMouseEnter={()=>setIsHover(true)}
        onMouseLeave={()=>setIsHover(false)}
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10
        }}
    >
        <div>
            <div>{prod.desc}</div>
            <span
                style={{
                    fontSize: "0.8rem",
                    fontStyle: 'italic',
                    color: "#bbbbbb"
                }}
            >ID:{prod.id}</span>
        </div>
        <div
            style={{
                fontSize: "1.4rem",
                borderRadius: "50%",
                background: isHover?"#f38686":"inherit",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: 10,
                paddingRight: 10,
                fontWeight: 'bold',
                cursor: 'pointer',
            }}
            onClick={()=>dispatcher(removeFromCart(prod.id))}
        >
            {isHover? "X":`₹${prod.price}`}
        </div>
    </div>
  )
}
