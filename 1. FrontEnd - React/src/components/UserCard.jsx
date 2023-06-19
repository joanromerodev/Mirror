//Import the necessary modules
import PropTypes from "prop-types";
import { useState } from "react";
import Swal from "sweetalert2";
import { DeleteSwal } from "../helpers/swalConfig";

//Import the necessary components
import api from '../api';
import FormCard from "./FormCard";
import AddUserForm from "./AddUserForm";

function UserCard({ users, onUserLoading, onUserResponse }) {
    const [selectedUser, setSelectedUser] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const { data } = users;


    const handleDeleteUser = (id, name) => {
        Swal.fire(DeleteSwal(name))
            .then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        onUserLoading(true);
                        const response = await api.users.deleteUser(id);
                        onUserResponse(response);
                        onUserLoading(false);
                    } catch (error) {
                        onUserResponse(error);
                    }
                }
            })
    }

    const handleUserUpdate = async (formData) => {
        try {
            onUserLoading(true);
            const response = await api.users.updateUser(selectedUser, formData);
            onUserResponse(response);
            onUserLoading(false);
        } catch (error) {
            onUserResponse(error);
        }
    }

    const handleAddUser = async (formData) => {
        try {
            onUserLoading(true);
            const response = await api.users.createUser(formData);
            onUserResponse(response);
            onUserLoading(false);
        } catch (error) {
            onUserResponse(error);
        }
    }

    if (data.users.length === 0) {
        return (
            <div className="w-full flex justify-center">
                <div className="bg-white lg:w-1/3 dark:bg-gray-800 border dark:border-gray-500 rounded-lg shadow-lg p-6 flex justify-center items-center text-center">
                    {(showAddForm) ? (<FormCard onCancel={setShowAddForm} onSubmitForm={handleAddUser} />) :
                        (
                            <div className="flex items-center justify-center">
                                <button onClick={() => { setShowAddForm(true) }} className="flex items-center hover:scale-110 hover:ease-in-out duration-200 outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-purple-600 dark:text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    <span className="text-sm px-2 font-semibold text-purple-600 dark:text-white">Add new user</span>
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-cols-min gap-4 items-center">
                {data.users.map((user) => (
                    <div key={user._id}>
                        <div className="bg-white border rounded-lg shadow-lg p-6 text-center dark:bg-gray-800 dark:border-gray-500 ">
                            {selectedUser === user._id ?
                                (
                                    <FormCard user={user} onCancel={setSelectedUser} onSubmitForm={handleUserUpdate} />
                                ) : (
                                    <div className="flex flex-col items-center pb-10">
                                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user.img} alt="User image" />
                                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name}</h5>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">{(user.role === "ADMIN_ROLE") ? "Administrador" : "Usuario"}</span>
                                        <div className="py-6 flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-gray-300">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                            <span className="text-sm px-3 text-gray-600 dark:text-gray-400">
                                                {user.email}
                                            </span>
                                        </div>
                                        <div className="flex mt-4 space-x-3 md:mt-6">
                                            <button onClick={() => { setSelectedUser(user._id) }} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Update</button>
                                            <button onClick={() => { handleDeleteUser(user._id, user.name) }} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-red-600 bg-white border border-red-500 rounded-lg hover:bg-red-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Delete</button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                ))}
            </div>
            <div className="fixed right-2 bottom-20 lg:right-6 lg: md:right-6 group">
                <button onClick={() => { setShowAddForm(true), setSelectedUser(null) }} type="button" aria-expanded="false" className="flex items-center justify-center text-white bg-purple-700 rounded-full w-14 h-14 hover:bg-purple-800 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none">
                    <svg aria-hidden="true" className="w-7 h-7 transition-transform group-hover:scale-125" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                    <span className="sr-only">Add user button</span>
                </button>
            </div>
            {showAddForm && <AddUserForm onCancel={setShowAddForm} onSubmitForm={handleAddUser} />}
        </div>
    );
}

UserCard.propTypes = {
    users: PropTypes.object.isRequired,
    onUserLoading: PropTypes.func.isRequired,
    onUserResponse: PropTypes.func.isRequired,
}

export default UserCard;