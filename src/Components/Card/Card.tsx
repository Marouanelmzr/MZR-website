import "./Card.css";
function Card({title,price}:any) {
  return (
      <section className="Card-container">
        <section className="Card-image">
        </section>
        <section className="Card-information">
            <span className="Title">{title}</span>
            <span className="Price">{price}</span>
        </section>
      </section>
  )
}
export default Card