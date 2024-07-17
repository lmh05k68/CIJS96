/* eslint-disable react/prop-types */
import './Card.css'
import '../../assets/cards/Cards_data'
function Card (props) {
    const { Data, onClick, handleSelected } = props


  return <>
    <div className="cardcard" onClick={() => {
      handleSelected(Data)
      onClick()
    }}>
      <img src={Data.image} alt="" />
      <p className="namename">{Data.name}</p>
      <p className='contentcontent'>{Data.content}</p>
    </div>
  </>
}
export default Card