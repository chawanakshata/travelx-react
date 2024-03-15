import React, {useState} from 'react'
import './ContactForm.css'



const ContactForm = () => {
    const [username,setUsername]=useState();
    const [email,setEmail]=useState();
    const [querries,setQuery]=useState();
    const ContactData=(e)=>{
      e.preventDefault();
      console.log(username);
    }
    const handleData=(e)=>{
      const username=e.target.value;
      console.log('username',username)
      setUsername(username);
      setUsername()
    }

  return (
    <>
    

<h1>Approach Us</h1>
<form onSubmit={ContactData}>
  <div className="username">
    <label htmlFor="username">Name : </label>
    <input type="text" placeholder='Enter your full name' required id='username' name='username' value={username} onChange={handleData} />
  </div>

  <div className="email">
    <label htmlFor="email">Email : </label>
    <input type="text" placeholder='Enter your Email id' required id='email' name='email'  />
  </div>

  <div className="queries">
    <label htmlFor="queries">Write your Querries : </label>
    <input type="text" placeholder='Write down your questions/querries here' required id='querries' name='queries'  />
  </div>

  <button type="submit">Submit</button>
</form>
    </>
  )
}

export default ContactForm
