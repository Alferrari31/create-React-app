import "./Contact.css"

function Contact(props) {
    const status = true;
    
  return (
      <div className= "Contact">
      <img className="avatar" src={props.image} alt= "img"/>
      <div className="containerText">
        <h4 className= "name">{props.name}</h4>
        <p className="white">Votre ville est {props.city}</p>
      <div>
          { status ?
              <div className="status">
                <div className= "status-online"></div>
            <p className="status-text">Online</p>
              </div> :
              <div className="status">
                    <div className= "status-offline"></div>
                    <p className="status-text">Offline</p>
              </div> 
            }    
        </div>
      </div>
    </div>                
  );
  }

  export default Contact

