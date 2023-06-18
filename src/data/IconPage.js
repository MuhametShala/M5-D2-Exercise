import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {faTwitterSquare} from "@fortawesome/free-brands-svg-icons"; // si usa per i loghi di aziende

const IconPage = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faPenNib} />
      <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon={faTwitterSquare} />
    </div>
  );
};

export default IconPage;

//cosi si mette a fianco a dove voglio l'icona 
<i><FontAwesomeIcon icon={faTwitterSquare} /></i>

