import { useState } from "react";
import { createUser } from "../API";
import { useNavigate } from "react-router-dom";

function UserReg(){
    
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()


    return (
        <section className="addDog" id="addDog">
            <form onSubmit={async (e)=>{
                e.preventDefault()
                await createUser (firstname, lastname, email, password);
                navigate("/")
            }}>
                    <h2 className="heading">Account Creation</h2>
                    <div className="form-constainer">
                    <div className ="form-box">
                        <input onChange={(e) => { setFirstName(e.target.value);}}
                            value={firstname} placeholder=" First Name"/>
                        <input onChange={(e) => { setLastName(e.target.value);}}
                            value={lastname} placeholder="Last Name" />
                    </div>
                    <div className="form-box">
                        <input onChange={(e) => { setEmail(e.target.value);}}
                            value={email} placeholder="Enter Email Address"/>
                        <input onChange={(e) => { setPassword(e.target.value);}}
                            value={password} placeholder="Enter a Password" >
                        </input>
                            
                    </div>
                    <div className="btn">
                        <input type="submit" value="Submit" className="btn" />
                    </div>
                    </div>
                
            </form>
        </section>
    
    );
}

export default UserReg