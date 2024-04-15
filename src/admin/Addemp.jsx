import React,{useState} from "react";

const Addemp = () =>{
    const [message,setMessage] = useState("");
    const adduser = () =>{
        setMessage("Added");
    
};

return(

    <div>
    <form action="POST">
    <label className="label">Firstname:</label>
         <input type="text" name="firstname" className="inputfield"/>
         <label className="label">Lastname:</label>
         <input type="text" name="lastname" className="inputfield"/>
         <label className="label">Username:</label>
         <input type="text" name="Username" className="inputfield"/>
         <label className="label">Email:</label>
         <input type="email" name="email"className="inputfield"/>
         <label className="label">Role:</label>
         <input type="text" name="role" className="inputfield"/>
         <label className="label" >Mobile number:</label>
         <input type="number" name="mobilenumber" className="inputfield"/>
         <label className="label">Experience:</label>
         <input type="number" name="experience" className="inputfield"/>
         <button onClick={adduser}>Submit</button>
    </form>
    </div>
    );
};

export default Addemp;