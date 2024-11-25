import React, { useEffect, useState } from 'react'
import Header from '../Compoents/Header'
import Footer from '../Compoents/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Books() {
  const [loading, setLoading] = useState(true);
  const [delloading, setdelLoading] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate()



  const API = async () => {
    try {
      const response = await axios.get("https://6742d9d9b7464b1c2a62dd44.mockapi.io/book");
      setLoading(false);
      setData(response?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const deleteBookDetails = async (id) => {
    try {
      setdelLoading(id);
      const response = await axios.delete(`https://6742d9d9b7464b1c2a62dd44.mockapi.io/book/${id}`);
       setdelLoading(null);
       API();
       toast.success("Item deleted Successfully.");
      } catch (error) {
        console.error("Error deleting book details:", error);
        setdelLoading(null);
        toast.error("Failed to deleting book details.");
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
              <th>Edit / Delete</th>

            </tr>
          </thead>
          <tbody>
            {data?.length ? (
              <>
              {data?.map((item, index) => {
                return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.book_name}</td>
                  <td>{item.auther}</td>
                  <td>{item.price}</td>
                  <td>
                    <button className='check-list1' onClick={() => navigate(`/books/edit/${item.id}`)}>Edit</button>
                    <button className='check-list1 check-list2' disabled={delloading == item.id} onClick={() => deleteBookDetails(item.id)}>{delloading === item.id ? 'Deleting...' : 'Delete'}</button>
                  </td>
                </tr>
              );
            })}
            </>
          ): <h1 className='no-data'>No Data Found</h1>}
          </tbody>
        </table>
      )}
      <Footer />
    </>
  );
}
