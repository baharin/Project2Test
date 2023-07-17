import { Button } from "react-bootstrap";
import PageNavbar from "../PageNavbar";

function PageNotFound(){

    return(
        <div>
            <PageNavbar/>
        
        <div className="text-center">
            <h1>Page not found.</h1>
            <p>We're sorry, but we've looked everywhere (even under the couch cushions), but the URL you entered is not valid. Please reconsider your choices.</p>
            <Button href="/Project2">ET, go home.</Button>
        </div>
        </div>
    );
}

export default PageNotFound;