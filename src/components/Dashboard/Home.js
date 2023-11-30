import Navb from "./Essentials/Navbar";
import BrandLogo from "../../assets/images/logo12.png";

function Home() {
  return (
    <>
      <Navb />
      <div className="home-container text-center p-5">
        <div className="header-section my-5">
          <h1>
            Welcome to{" "}
            <strong>
              {" "}
              <img
                src={BrandLogo}
                alt="Food Harvest App Logo"
                className="logo-img"
              />{" "}
              Food Harvest App
            </strong>
          </h1>
        </div>
        <div className="home-content">
          <p className="text-center mb-4">
            Food Harvest App is a web application that aims to reduce food
            wastage by connecting hotels and restaurants with composters and
            farmers.
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1661349604444-3c8416308121?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBraXRjaGVufGVufDB8fDB8fHww"
                alt="hotel"
                className="img-fluid rounded image-height"
              />
              <h4 className="mt-4"><strong>Hotel</strong></h4>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <img
                src="https://images.unsplash.com/photo-1617878227827-8360231f7f03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JwaGFuYWdlfGVufDB8fDB8fHww"
                alt="ngo"
                className="img-fluid rounded image-height"
              />
              <h4 className="mt-4"><strong>NGO</strong></h4>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1679260900300-88b80c98c089?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fE5HT3xlbnwwfHwwfHx8MA%3D%3D"
                alt="composter"
                className="img-fluid rounded image-height"
              />
              <h4 className="mt-4"><strong>Composter</strong></h4>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <img
                src="https://images.unsplash.com/photo-1615829254885-d4bfd5ce700e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxpbmRpYW4lMjBmYXJtZXJ8ZW58MHx8MHx8fDA%3D"
                alt="farmer"
                className="img-fluid rounded image-height"
              />
              <h4 className="mt-4"><strong>Farmer</strong></h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
