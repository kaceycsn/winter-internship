import { Link } from "react-router-dom";
function Homepage(){
    return(
 
        <div>      
                
            <ul>
                <li>
                    <Link to="/all-bonds"><h3>My Bonds</h3></Link>
                </li>
                <li>
                    <Link to="/new-bond"><h3>Create Bond</h3></Link>
                </li>
                <li>
                    <Link to="/transfer-bond"><h3>Transfer Bond</h3></Link>
                </li>
                <li>
                    <Link to="/withdraw-bond"><h3>Withdraw Bond</h3></Link>
                </li>
                <li>
                    <Link to="/bond-htlc"><h3>Create Bond Htlc</h3></Link>
                </li>
            </ul>
                
        </div>  
    );
}

export default Homepage;