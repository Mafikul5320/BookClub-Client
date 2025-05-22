import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';

const CreateGroup = () => {
    const { user } = use(AuthContext)
    const Handelsubmit = (e) => {
        e.preventDefault()
        const from = e.target;
        const fromData = new FormData(from);
        const createData = Object.fromEntries(fromData.entries())
        console.log(createData)
        fetch("http://localhost:3000/create-group", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(createData),
        }).then(res => res.json()).then(data => {
            if (data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Group Create SuccessFull",
                    showConfirmButton: false,
                    timer: 1600
                });
            }
        })
    }
    return (
        <div className='max-w-2xl mx-auto shadow-2xl p-9 my-10 rounded-2xl'>
            <h1 className='text-xl pt-4 pb-8 font-semibold'>Create a New Book Club</h1>
            <form onSubmit={Handelsubmit}>
                <label className=''>Group Name*</label>
                <input type="text" name='gp_name' placeholder="Enter a descriptive name for your book club" className="input h-11  my-2  w-full" required />
                <div className='grid grid-cols-2 gap-4 my-5'>
                    <div>
                        <label className=''>Book Category*</label>
                        <select type="text" name='book_category' placeholder="Enter Group Name" className=" border-1 border-gray-400 rounded h-11  my-2  w-full" defaultValue="" required >
                            <option value="" disabled>Select a category</option>
                            <option>Fiction</option>
                            <option>Mystery</option>
                            <option>Science Fiction</option>
                            <option>Historical Fiction</option>
                            <option>Biography</option>
                            <option>Self-Help</option>
                            <option>Poetry</option>
                            <option>Travel</option>
                            <option>Philosophy</option>
                            <option>Classics</option>
                        </select>
                    </div>
                    <div>
                        <label className=''>Meeting Location*</label>
                        <input type="text" name='location' placeholder="Where will your club meet?" className="input h-11  my-2  w-full" required />
                    </div>
                    <div>
                        <label className=''>Maximum Members*</label>
                        <input type="number" defaultValue={10} name='members' className="input h-11  my-2  w-full" required />
                    </div>
                    <div>
                        <label className=''>Start Date*</label>
                        <input type="date" name='date' className="input h-11  my-2  w-full" required />
                    </div>
                    <div>
                        <label className=''>Available Time*</label>
                        <select type="text" required name='available_time' placeholder="Enter Group Name" className=" border-1 border-gray-400 rounded h-11  my-2  w-full" defaultValue=""  >
                            <option value="" disabled>Select Time</option>
                            <option>Daily</option>
                            <option>Weekly</option>
                            <option>Monthly</option>
                            
                        </select>
                    </div>
                </div>
                <label className=''>Image URL </label>
                <input type="text" name='photoURL' placeholder="https://example.com/image.jpg" className="input h-11  my-2  w-full" required />
                <div className=''>
                    <label className=''>Description*</label>
                    <textarea name="description" required placeholder="Describe your book club, what you'll read, and what members can expect" className='input w-full h-28 my-2'></textarea>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <label className=''>Your Name</label>
                        <input type="text" readOnly name='displayName' value={user?.displayName} className="input h-11  my-2  w-full font-extrabold cursor-not-allowed"  />
                    </div>
                    <div>
                        <label className=''>Your Email</label>
                        <input type="text" readOnly name='email' value={user?.email} className="input h-11  my-2  w-full font-extrabold cursor-not-allowed " />
                    </div>
                </div>
                <div className='flex space-x-4 my-3 justify-end'>
                    <button className='btn btn-info'>Cancel</button>
                    <button className='btn btn-primary'>Create Book Club</button>
                </div>
            </form>
        </div>
    );
};

export default CreateGroup;