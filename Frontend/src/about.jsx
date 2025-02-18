import Navbar from './Navbar'; 
import Abus from './componets/Abus';
import Footer from './componets/Footer';
import p1 from './images/aboutus3.jpg'




const styles = {

  container: {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',    
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: `url(${p1})`, 
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
    backgroundColor: "white",
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

export default function About() {
  
  return (
    <>
    <Navbar/>
    <div style={styles.container}>
        <div style = {styles.content}>
            <div style={styles.title}>
                <h>About Us</h>

            </div>

        </div>

    </div>
    <Abus/>
    <Footer/>
    </>
  );
}


