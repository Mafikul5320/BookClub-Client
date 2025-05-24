import React, { useState } from 'react';
import { Edit, Trash2 } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';
import { Link, useLoaderData, useNavigate } from 'react-router';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyGroup = () => {
    const data = useLoaderData();
    const [infoData, setInfoData] = useState(data);
    const navigate = useNavigate();

    const Handelsubmit = (e, id) => {
        e.preventDefault();
        const from = e.target;
        const fromdata = new FormData(from);
        const updateData = Object.fromEntries(fromdata.entries());

        fetch(`https://assignment-10-server-woad-two.vercel.app/create-group/data/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0 || data.acknowledged) {
                    toast.success("Group Update Successful!");
                } else {
                    toast.info("No changes made.");
                }
            })
            .catch(err => {
                console.error(err);
                toast.error("Update failed!");
            });
    };

    const HandelDelete = (id) => {
        fetch(`https://assignment-10-server-woad-two.vercel.app/create-group/data/${id}`, {
            method: "DELETE",
        }).then(res => res.json()).then(data => {
            // console.log(data)
            if (data.deletedCount) {
                const groupData = infoData.filter(data => data._id !== id)
                setInfoData(groupData)
            }
        })
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <ToastContainer position="top-right" autoClose={3000} />
            <Fade triggerOnce>
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2 ">My Book Clubs</h1>
                    <p className="text-gray-600 dark:text-gray-400">Manage the book clubs you've created</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Category</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Location</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Start Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Members</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                {
                                    infoData.map(oneCard => <tr key={oneCard._id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{oneCard.gp_name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{oneCard.book_category}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{oneCard.location}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{oneCard.date}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{oneCard.members}/20</td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 inline-flex text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Active</span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end space-x-2 items-center">
                                                <Link to={`/view-Details/${oneCard._id}`} className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">View</Link>
                                                <button
                                                    onClick={() => document.getElementById('my_modal_3').showModal()}
                                                    className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                                                >
                                                    <Edit className="h-4 w-4" />
                                                </button>
                                                <dialog id="my_modal_3" className="modal">
                                                    <div className="modal-box">
                                                        <form method="dialog">
                                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                        </form>
                                                        <div className='p-9 my-10 rounded-2xl'>
                                                            <h1 className='text-xl pt-4 pb-8 font-semibold'>Create a New Book Club</h1>
                                                            <form onSubmit={(e) => Handelsubmit(e, oneCard._id)}>
                                                                <label>Group Name*</label>
                                                                <input type="text" name='gp_name' placeholder="Enter a descriptive name for your book club" className="input h-11 my-2 w-full" />
                                                                <div className='grid grid-cols-2 gap-4 my-5'>
                                                                    <div>
                                                                        <label>Book Category*</label>
                                                                        <select name='book_category' className="border border-gray-400 rounded h-11 my-2 w-full" defaultValue="">
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
                                                                        <label>Meeting Location*</label>
                                                                        <input type="text" name='location' placeholder="Where will your club meet?" className="input h-11 my-2 w-full" />
                                                                    </div>
                                                                    <div>
                                                                        <label>Maximum Members*</label>
                                                                        <input type="number" defaultValue={10} name='members' className="input h-11 my-2 w-full" />
                                                                    </div>
                                                                    <div>
                                                                        <label>Start Date*</label>
                                                                        <input type="date" name='date' className="input h-11 my-2 w-full" />
                                                                    </div>
                                                                </div>
                                                                <label>Image URL </label>
                                                                <input type="text" name='img_URL' placeholder="https://example.com/image.jpg" className="input h-11 my-2 w-full" />
                                                                <div>
                                                                    <label>Description*</label>
                                                                    <textarea name="description" placeholder="Describe your book club, what you'll read, and what members can expect" className='input w-full h-28 my-2'></textarea>
                                                                </div>
                                                                <div className='grid grid-cols-2 gap-4 my-3'>
                                                                    <div>
                                                                        <label>Your Name</label>
                                                                        <input type="text" readOnly name='displayName' value={oneCard?.displayName} className="input h-11  my-2  w-full font-extrabold cursor-not-allowed" />
                                                                    </div>
                                                                    <div>
                                                                        <label>Your Email</label>
                                                                        <input type="text" readOnly name='email' value={oneCard?.email} className="input h-11  my-2  w-full font-extrabold cursor-not-allowed " />
                                                                    </div>
                                                                </div>
                                                                <div className='flex my-3 justify-center'>
                                                                    <button className='btn btn-primary w-full'>Update Now</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </dialog>
                                                <button onClick={() => HandelDelete(oneCard._id)} className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <button
                        onClick={() => navigate('/create-group')}
                        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
                    >
                        <span>Create New Book Club</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                </div>
            </Fade>
        </div>
    );
};

export default MyGroup;
