import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [authusertoken, setauthusertoken] = useState(localStorage.getItem("authusertoken") || null);
  console.log(authusertoken);
  const [countrylist, setCountrylist] = useState([]);

    useEffect(() => {
      const isLogin = localStorage.getItem("authusertoken") || null;
      console.log(isLogin);
      if (isLogin) {
          console.log('enter in');
          axios.get("https://restcountries.com/v2/all")
          .then((response) => setCountrylist(response.data))
          .catch((error) => console.log(error));
      }
  }, []);
  console.log(countrylist);

    if (!authusertoken) {
      return <Navigate replace to="/" />;
    } else {
    return (
      <>
        <div className="dashboard-box">
          <div className="page-heading"><h1>Welcome to your Dashboard</h1></div>
            <div className='container'>
            <div className="form-group has-search">
              <span className="fa fa-search form-control-feedback"></span>
              <input type="text" className="form-control" placeholder="Search" />
            </div>
  
              <div className="row">
                <table id="users" className="table table-hover col-md-12">
                  <thead>
                  <tr>
                      <th>Name</th>
                      <th>Capital</th>
                  </tr>
                  </thead>
                  <tbody>
                  {countrylist.map((country, i) => (
                      <tr key={i}>
                      <td>{country.name}</td>
                      <td>{country.capital}</td>
                      </tr>
                  ))}
                  </tbody>
                </table>
            </div>
          </div>
        </div>
      </>
    );
    }
};
export default Dashboard;