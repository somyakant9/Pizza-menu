import '../index.css';
import Pizza from './Pizza';
import data from '../data.js';
function Menu() {
    // console.log(data);
    return (
        <main className='menu'>
            <h2>our menu</h2>
           <ul className='pizzas'>
            {data.map((el)=>(
                <Pizza key={el.name} el={el}/>
                ))}
            </ul> 
            
        </main>
    )
}

export default Menu
