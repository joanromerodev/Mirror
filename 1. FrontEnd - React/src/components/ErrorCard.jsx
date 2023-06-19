import PropTypes from 'prop-types';

function ErrorCard({ msg }) {
    return (
        <div className="flex flex-col justify-center text-center">
            <div className="py-4 my-2 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-32 text-red-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                </svg>
            </div>
            <div className="p-10 mb-4 text-sm text-red-600 rounded-lg bg-red-50 self-center dark:bg-gray-800 dark:text-red-400" role="alert">
                <span className="font-medium text-red-700">We are sorry!</span> It seems there is an issue with the request.
                <div className="font-medium block mt-4"> Details: <span className="font-normal">{msg}</span></div>
            </div>
        </div>
    );
}

ErrorCard.propTypes = {
    msg: PropTypes.string.isRequired
};

export default ErrorCard;