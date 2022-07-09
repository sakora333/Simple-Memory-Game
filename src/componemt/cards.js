import { useState } from 'react';
import Card from './card';
function Cards() {
    const [items, setItems] = useState([
        { id: 1, img: '.././img/1.jpg', state: "" },
        { id: 2, img: '.././img/2.jpg', state: "" },
        { id: 3, img: '.././img/3.jpg', state: "" },
        { id: 4, img: '.././img/4.jpg', state: "" },
        { id: 5, img: '.././img/5.jpg', state: "" },
        { id: 6, img: '.././img/6.jpg', state: "" },
        { id: 7, img: '.././img/7.jpg', state: "" },
        { id: 8, img: '.././img/8.jpg', state: "" },
        { id: 1, img: '.././img/1.jpg', state: "" },
        { id: 2, img: '.././img/2.jpg', state: "" },
        { id: 3, img: '.././img/3.jpg', state: "" },
        { id: 4, img: '.././img/4.jpg', state: "" },
        { id: 5, img: '.././img/5.jpg', state: "" },
        { id: 6, img: '.././img/6.jpg', state: "" },
        { id: 7, img: '.././img/7.jpg', state: "" },
        { id: 8, img: '.././img/8.jpg', state: "" }
    ].sort(() => Math.random() - 0.5))
    const [prev, setPrev] = useState(-1)
    function check(current) {
        if ((items[current].id === items[prev].id) && (current !== prev)) {
            items[current].state = items[current].state + '  correct'
            items[prev].state = items[current].state + '  correct'
            setItems([...items])
            console.log(items)
            setPrev(-1)
        } else {
            items[current].state = items[current].state + '  wrong'
            items[prev].state = items[prev].state + '  wrong'
            setItems([...items])

            setTimeout(() => {
                items[current].state = ''
                items[prev].state = ''
                setItems([...items])
                setPrev(-1)

            }, 1000);
        }
    }
    function handleClick(index) {
        items[index].state = '  active'
        setItems([...items])
        console.log(items)
        if (prev === -1) {
            setPrev(index)
        } else {
            check(index)
        }
    }


    return (
        <div className='container'>
            {items.map((item, index) => {
                return (
                    <Card item={item} key={index} index={index} handleClick={handleClick} />
                )

            })}

        </div>
    )
}
export default Cards;