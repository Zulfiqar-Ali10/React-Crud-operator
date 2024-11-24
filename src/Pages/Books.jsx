import React, { useEffect, useState } from 'react'
import Header from '../Compoents/Header'
import Footer from '../Compoents/Footer'
import axios from 'axios'
import { toast } from 'react-toastify';

export default function Books() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 

  const API = async () => {
    try {
      const response = await axios.get("https://6742d9d9b7464b1c2a62dd44.mockapi.io/book");
      setLoading(false); 
      setData(response.data);
      console.log("response", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(true); 
    } 
  };

  useEffect(() => {
    API();
 
  }, []);

  return (
    <>
      <Header />
      {loading ? ( 
        <div className="loader">Loading...</div>
      ) : (
        <table border="">
          <thead>
            <tr>
              <th>Id</th>
              <th>Book Name</th>
              <th>Auther</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.book_name}</td>
                  <td>{item.auther}</td>
                  <td>{item.price}</td>
                  <td><button>edit</button>
                  <button>delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <Footer />
    </>
  );
}
