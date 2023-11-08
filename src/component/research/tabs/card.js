import { Link } from "react-router-dom"

function Card(props){
    return(
        <div className='card' data-aos="zoom-in-up" >
        <div>
          <img src={`/${props.research.image}`} alt='img card'/>
          <div className="content">
              <Link to={`/research/${props.research.id}`}><i className="fas fa-search" id="search"></i></Link>
          </div>
        </div>
        <h2>{`${props.research.name}`}</h2>
        <p>{`${props.research.department.first} ${props.research.department.second}`}</p>
        </div>
    )
}
export default Card