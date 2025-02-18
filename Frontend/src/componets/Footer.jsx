import "./FooterStyles.css";
function Footer()  {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Euphoria</h1>
          <p>Discover your potential</p>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Team</h4>
          <a href="/">Karthik</a>
          <a href="/">Nanditha</a>
          <a href="/">Amulya</a>
          <a href="/">Sanskruthi</a>
          <a href="/">Bharat</a>
          <a href="/">Abhinav</a>
        </div>
        <div className="linkedin">
          <a href="http://www.linkedin.com/in/mvs-karthik-2349aa2aa">
            <i className="fa-brands fa-linkedin" />
          </a>
          <a href="https://www.linkedin.com/in/nanditha-yenugadhati-902055260/">
            <i className="fa-brands fa-linkedin" />
          </a>
          <a href="https://www.linkedin.com/in/amulya-setti-guthi-552a982a4">
            <i className="fa-brands fa-linkedin" />
          </a>
          <a href="http://www.linkedin.com/in/sanskruti-padamatintiwar-06a992298">
            <i className="fa-brands fa-linkedin" />
          </a>
          <a href="http://www.linkedin.com/in/bharat-sashank-reddy-mukkara-b97162256">
            <i className="fa-brands fa-linkedin" />
          </a>
          <a href="http://www.linkedin.com/in/abhinav-surabhi-75499b24b">
            <i className="fa-brands fa-linkedin" />
          </a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="https://github.com/sreedharjinka/Cognitive-RetrainingG113">Github</a>
          <a href="contact">Contact us</a>
          <a href="about">About us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">privacy policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
