import Navbar from './Navbar'; 
import ContForm from './componets/ContForm';
import Footer from './componets/Footer';
import pic from './images/cont.jpg';




const styles = {

  container: {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',    
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: `url(${pic})`, // Replace with your actual image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  content: {
    textAlign: 'center',
  },
  title: {
    fontSize: '6em',
    fontWeight: 800,
    color: '#fff', 
    marginTop:"-200px",
    marginBottom: '10px',
    width:'100%', 
  },
  text: {
    fontSize:'',
    color: '#fff',
  },
  image: {
    maxWidth: '100%', 
    marginTop: '20px', 
  },
  button: {
    marginBottom: "50px",
    color: "black",
    backgroundColor: "#e9ecef",
    borderRadius: '30px',
    transition: 'background-color 0.3s ease', // Add a smooth transition effect
  
    '&:hover': {
      backgroundColor: '#000000',
      color:"#e9ecef  !important", // Change the background color on hover
      cursor: 'pointer', // Change cursor to pointer on hover (optional)
    },
  }
  ,
};

export default function Contact() {
  
  return (
    <>
    <Navbar/>
    <div style={styles.container}>
        <div style = {styles.content}>
            <div style={styles.title}>
                <h>Contact</h>

            </div>

        </div>

    </div>
    <ContForm/>
    <Footer/>
    </>
  );
}


