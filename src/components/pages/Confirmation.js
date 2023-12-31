import { Button } from "react-bootstrap";
import Stepper1 from "../Stepper1";
import PageNavbar from "../PageNavbar";



function Confirmation(){



    return(
        <div>
             <PageNavbar></PageNavbar>
        
        <div className="text-center">

            <Stepper1 activestep={2}></Stepper1>
            <p>
            </p>
            <h2 className="text-center">
                Your reservation is confirmed. See you then!
            </h2>
            <p></p>
            <Button variant="primary" href="/Project2">
                Go to Home Page
            </Button>

        </div>
        </div>

    );
}

export default Confirmation;