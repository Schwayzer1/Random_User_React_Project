import Button from "react-bootstrap/Button";
import axios from "axios";
import Email from "./assets/email.svg";
import Location from "./assets/location.svg";
import Phone from "./assets/phone.svg";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    const url = "https://randomuser.me/api/";
    setLoading(true);
    try {
      const { data } = await axios(url);
      setUser(data.results[0]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleUser = () => {
    getUser();
  };

  console.log(user);
  const { location, name, email, phone, picture, dob, registered } = user;

  return (
    <div className="container d-flex justify-content-center align-items-center flex-column fs-3">
      <div className="card my-5 mx-auto w-75 w-100 ">
        <div className="name d-flex justify-content-between align-items-center mt-4 mx-5">
          <img
            src={picture?.large}
            className="rounded-circle"
            width="100px"
            alt="userImg"
          />
          <p className="fs-2">
            {name?.title}.{name?.first}
            <span className="ms-2">{name?.last}</span>
          </p>
        </div>
        <div className=" d-flex justify-content-between align-items-center mt-3 mx-5">
          <img src={Email} width="50px" alt="" />
          <p>{email}</p>
        </div>
        <div className=" d-flex justify-content-between align-items-center mt-3 mx-5">
          <img src={Phone} width="50px" alt="" />
          <p>+{phone}</p>
        </div>
        <div className=" d-flex justify-content-between align-items-center my-3 mx-5">
          <img src={Location} width="50px" alt="" />
          <p>
            {location?.city},{location?.country}
          </p>
        </div>
        <div className="extra text-center">
          <p>Age : {dob?.age}</p>
          <p>
            Register Date : {new Date(registered?.date).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="text-center">
        <Button disabled={loading} onClick={handleUser} variant="primary mt-4">
          {loading ? "Loading..." : "Random User"}
        </Button>
      </div>
    </div>
  );
}

export default App;

//!  d-flex justify-content-center align-items-center flex-column
