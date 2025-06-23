import pic from '../assets/135442863.png';
import styles from './card.module.css';
function Card(){
  const cardText = {
    fontFamily: "Arial, sans-serif",
    color:"hsl(0, 0%, 30%)",
    fontSize: "16px",
  }
  return (
    <div className="card">
      {/* this one is ext css from index.css */}
      <img className="cardImage" src={pic} alt="Placeholder Image" width="200" height="200"/>
      {/* this one is modlue css , made folder bcoz of this and card.moudles.css have stuff */}
      <h2 className={styles.cardTitle}>Ashish Nagmoti</h2>
      <p style={cardText}>Backend developr with vibe coding frontend skills, also do cloud and ml in free time</p>  
    </div>
  );
}
export default Card;
