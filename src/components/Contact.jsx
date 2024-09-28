// import '../styles/Contact.css';
// function Contact() {
//   return (
  //     <section id='contact'>
  //         <div className="wrapper">
  //             <h3>Contact me</h3>
  //         </div>
  //         <div className="contact-form-container">
  //         <form className="contact-form">
  //           <label htmlFor="name">Name</label>
  //           <input type="text" id="name" name="name" required  placeholder='Your name'/>

  //           <label htmlFor="email">Email</label>
  //           <input type="email" id="email" name="email" required placeholder='example@example.com'/>

  //           <label htmlFor="message">Message</label>
  //           <textarea id="message" name="message" required placeholder='Message'></textarea>

  //           <button type="submit"><b>Send</b></button>
  //         </form>
  //     </div>
  //     </section>
//   )
// }

// export default Contact

import '../styles/Contact.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        // <div>
        //     <h1>Data from MySQL Database</h1>
        //     <ul>
        //         {data.map(item => (
        //             <li key={item.id}>{item.nama_kolom}</li>
        //         ))}
        //     </ul>
        // </div>
        <section id='contact'>
           <div className="wrapper">
               <h3>Contact me</h3>
           </div>
           <div className="contact-form-container">
           <form className="contact-form">
             <label htmlFor="name">Name</label>
             <input type="text" id="name" name="name" required  placeholder='Your name'/>

             <label htmlFor="email">Email</label>
             <input type="email" id="email" name="email" required placeholder='example@example.com'/>

             <label htmlFor="message">Message</label>
             <textarea id="message" name="message" required placeholder='Message'></textarea>

             <button type="submit"><b>Send</b></button>
           </form>
       </div>
       </section>
    );
};

export default App;
