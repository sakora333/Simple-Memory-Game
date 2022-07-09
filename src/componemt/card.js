function Card({ item, index, handleClick }) {

    return (
        <div className={'card ' + item.state} onClick={() => handleClick(index)}>
            <img src={item.img} alt='' />
        </div>
    )
}
export default Card;