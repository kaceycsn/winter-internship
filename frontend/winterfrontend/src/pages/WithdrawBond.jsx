import WithdrawBondForm from '../components/bonds/WithdrawBondForm';
import { useNavigate } from "react-router-dom";

function WithdrawBondPage(){
    const navigate=useNavigate();
    function withdrawBondHandler(withdrawBondData){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(withdrawBondData);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:10051/htlc/bond/withdraw", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
        .then(() => {
            navigate("/", {replace: true});
        });
    }


    return(
        <section>
            <h1>Withdraw Bond</h1>
            <WithdrawBondForm onWithdrawBond={withdrawBondHandler} />
        </section>
    );

}

export default WithdrawBondPage;