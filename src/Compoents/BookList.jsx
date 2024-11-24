import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';



export default function BookList() {
    const [formData, setFormData] = useState({ book_name: '', auther: '', price: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await axios.post("https://6742d9d9b7464b1c2a62dd44.mockapi.io/book", formData);
            console.log("response", response.data);
          
            setFormData({ book_name: '', auther: '', price: '' });

            setIsSubmitting(false);

            toast.success("Book added successfully!");
            
        } catch (error) {
            console.error("Error posting data:", error);
        } 
    };

    return (
        <>
            <div className='FormList'>
                <Link className='check-list' to="/books" >Check List</Link>
                <div className='container1'>
                    <h2 className='heading1'>Books Form</h2>
                    <form onSubmit={handleSubmit} className='form1'>
                        <label className='label1'>Book Name:</label>

                        <input type="text" name="book_name" value={formData.book_name} onChange={handleChange} className='input1' required />

                        <label className='label1'>Author:</label>
                        <input type="text" name="auther" value={formData.auther} onChange={handleChange} className='input1' required />

                        <label className='label1'>Price:</label>
                        <input type="text" name="price" value={formData.price} onChange={handleChange} className='input1' required />

                        <button type="submit" className='submitInput1' disabled={isSubmitting}> {isSubmitting ? 'Submitting...' : 'Submit'} </button>
                    </form>
                </div>
            </div>



        </>
    );
}