import '../index.css';
import f from '../pizzas/focaccia.jpg';
function Pizza({el}) {
    return (
        <li className={`pizza ${el.soldOut ? "sold-out" : ""}`}>
            <img src={f} alt="PizzaPhoto" />
            <div className='pizza'>
                <h3>{el.name}</h3>
                <p>{el.ingredients}</p>
            </div>
        </li>
    )
}

export default Pizza
