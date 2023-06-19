import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { renderErrorMessage } from "../helpers/formConfig";

function FormCard({ user, onCancel, onSubmitForm }) {
    const { register, unregister, handleSubmit, formState: { errors }, reset } = useForm();
    const [changePass, setChangePass] = useState(false);

    const handleCancelButtonClick = () => {
        if (user) {
            onCancel(null);
            return;
        }
        onCancel(false);
        reset();
    };

    const onCancelChangePass = () => {
        unregister("password");
        setChangePass(false);
    }

    const onSubmit = async (data) => {
        const imgElement = document.createElement("img");

        imgElement.src = data.img;

        //If image is valid, it'll immediately call onSubmitForm
        imgElement.onload = () => {
            onSubmitForm(data);
        };

        //If image is invalid, it'll set a default image and then call onSubmitForm
        imgElement.onerror = () => {
            data.img = "https://www.svgrepo.com/show/231124/user.svg";
            onSubmitForm(data);
        };

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 text-center">
            <div className="flex flex-col items-center pb-10">
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500 dark:text-gray-400">
                            <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <input type="text" defaultValue={(user) ? user.img : ""} id="img" {...register("img", { maxLength: 250 })} className="bg-gray-50 border border-gray-300 outline-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Image URL" />
                </div>
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500 dark:text-gray-400">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <input type="text" defaultValue={(user) ? user.name : ""} id="name" {...register("name", { required: true, maxLength: 150 })} className="bg-gray-50 border border-gray-300 outline-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full name" />
                </div>
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </div>
                    <input type="email" defaultValue={(user) ? user.email : ""} id="email" {...register("email", { required: true, maxLength: 100 })} className="bg-gray-50 border border-gray-300 outline-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autoComplete="email" placeholder="email@example.com" />
                </div>
                {(user) ? (changePass) ? (
                    <div className="relative flex items-center sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500 dark:text-gray-400">
                                <path fillRule="evenodd" d="M15.75 1.5a6.75 6.75 0 00-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 00-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 00.75-.75v-1.5h1.5A.75.75 0 009 19.5V18h1.5a.75.75 0 00.53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1015.75 1.5zm0 3a.75.75 0 000 1.5A2.25 2.25 0 0118 8.25a.75.75 0 001.5 0 3.75 3.75 0 00-3.75-3.75z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <input type="password" id="password" {...register("password", { minLength: 8, required: true, maxLength: 50 })} className="bg-gray-50 border border-gray-300 outline-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autoComplete="current-password" placeholder="Password" />
                        <button onClick={onCancelChangePass} className="text-red-600 dark:text-white pl-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                        </button>
                    </div>
                ) : (
                    <div className="relative">
                        <button onClick={() => { setChangePass(true) }} className="block text-xs font-semibold text-gray-500 my-2 hover:text-blue-500 hover:cursor-pointer">Update password</button>
                    </div>
                ) : (
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500 dark:text-gray-400">
                                <path fillRule="evenodd" d="M15.75 1.5a6.75 6.75 0 00-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 00-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 00.75-.75v-1.5h1.5A.75.75 0 009 19.5V18h1.5a.75.75 0 00.53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1015.75 1.5zm0 3a.75.75 0 000 1.5A2.25 2.25 0 0118 8.25a.75.75 0 001.5 0 3.75 3.75 0 00-3.75-3.75z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <input type="password" id="password" {...register("password", { minLength: 8, required: true, maxLength: 50 })} className="bg-gray-50 border border-gray-300 outline-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autoComplete="current-password" placeholder="Password" />
                    </div>
                )}
            </div>
            {renderErrorMessage(errors)}
            <div className="flex justify-center mt-2 md:mt-2">
                <button
                    className="px-4 mx-2 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    type="submit"
                >
                    Save
                </button>
                <button
                    className="px-4 mx-2 py-2 text-sm font-medium text-center text-red-600 bg-white border border-red-500 rounded-lg hover:bg-red-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                    type="reset"
                    onClick={handleCancelButtonClick}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

FormCard.propTypes = {
    user: PropTypes.object,
    onCancel: PropTypes.func.isRequired,
    onSubmitForm: PropTypes.func.isRequired
}

export default FormCard;