import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function BookList() {
    const [formData, setFormData] = useState({ book_name: '', auther: '', price: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    console.log(formData , 'formData')
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData , [name]: value })
    };

    const fetchBookDetails = async () => {
        try {
            const response = await axios.get(`https://6742d9d9b7464b1c2a62dd44.mockapi.io/book/${id}`);
            setFormData(response.data); 
        } catch (error) {
            console.error("Error fetching book details:", error);
            toast.error("Failed to fetch book details.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            if (id) {
                await axios.put(`https://6742d9d9b7464b1c2a62dd44.mockapi.io/book/${id}`, formData);
                toast.success("Book updated successfully!");
            } else {
                await axios.post("https://6742d9d9b7464b1c2a62dd44.mockapi.io/book", formData);
                toast.success("Book added successfully!");
            }
            setFormData({ book_name: '', auther: '', price: '' });
            navigate("/books");
        } catch (error) {
            console.error("Error submitting data:", error);
            toast.error("Failed to submit data.");
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchBookDetails();
        }
    }, [id]);

    return (
        <>
            <div className='FormList'>
                <div className='container1'>
                    <Link className='check-list' to="/books" >Check List</Link>
                    <h2 className='heading1'>Books Form</h2>
                    <form onSubmit={handleSubmit} className='form1'>
                        <label className='label1'>Book Name:</label>

                        <input type="text" name="book_name" value={formData.book_name} onChange={handleChange} className='input1' required />

                        <label className='label1'>Author:</label>
                        <input type="text" name="auther" value={formData.auther} onChange={handleChange} className='input1' required />

                        <label className='label1'>Price:</label>
                        <input type="text" name="price" value={formData.price} onChange={handleChange} className='input1' required />

                        <button type="submit" className='submitInput1' disabled={isSubmitting}>
                            {isSubmitting ? 'loading...' : id ? 'Update' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>



        </>
    );
}