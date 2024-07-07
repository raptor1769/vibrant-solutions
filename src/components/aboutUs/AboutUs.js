import { forwardRef } from 'react';
import { useState } from 'react';
import './aboutUs.css';
import CardDetail from '../common/CardDetail/CardDetail';
import Picture from '../../assets/images/Laptop.svg'; 

export const AboutUs = forwardRef((props, ref) => {
  const data = 'Vibrant IT Solutions is a dynamic and forward-thinking IT service company. Established in 2023 we have consistently delivered high-quality IT Solutions to our clients, earning us a reputation for reliability and excellence.';
  const mission = 'At Vibrant IT Solutions, our mission is to empower businesses through strategic and innovative IT solutions. We are dedicated to delivering unparalleled consulting services, leveraging cutting-edge technology to drive efficiency, enhance security, and foster growth. We strive to understand the unique challenges of each client, offering strategic insights, expert advice, and seamless implementation to optimize their IT infrastructure.';
  const vision = 'Our vision is to be the leading provider of IT Rentals and Sales, redefining the way businesses harness the power of technology to propel their success.';

  const [formData, setFormData] = useState({
    name: '',
    phno: '',
    email: '',
    message: '',
    agree:'off',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [msg, setMsg] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    debugger;
    if(name=='agree'){
      formData.agree=='on'? setFormData({
        ...formData,
        [name]: 'off'
      }):setFormData({
        ...formData,
        [name]: 'on'
      })
    }else{
    setFormData({
      ...formData,
      [name]: value
    });
  }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      setMsg(result.message);
    } catch (error) {
      console.error('Error:', error);
      setMsg('Failed to send email');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div>
        <CardDetail
          title={"About Us"}
          header={"About US"}
          img={''}
          mission={mission}
          vision={vision}
          description={data}
          series={''}
          KeyFeatures={''}
          CustomizationOptions={''}
          Extras={''}
          color={''}
          Future={''}
        />
        <div className="contact-container">
          <div className="contact">
            <h2>Get in Touch!</h2>
            <form onSubmit={handleSubmit} className='form'>
              <div className='form-item'>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>
              <div className='form-item'>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-item'>
                <label htmlFor="PhNo">Phone Number:</label>
                <input
                  type="tel"
                  id="phno"
                  name="phno"
                  placeholder="Contact Number"
                  value={formData.phno}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-item'>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  cols="57"
                />
              </div>
              <div className='form-item radioButton'>
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="agree" className='privacy-terms'>
                  I agree to the <span className="bold">Privacy Policy</span> and <span className="bold">Terms of Use</span>
                </label>
              </div>
              {formData.agree=='on' &&
              <div className='card-button-1'>
                <button type="submit" value="Send">Contact With Us Now</button>
              </div>
              }   
              {msg && <p>{msg}</p>}
            </form>
          </div>
          <div className="picture">
            <img src={Picture} alt="Contact Us" />
          </div>
        </div>
      </div>
    </>
  );
});
