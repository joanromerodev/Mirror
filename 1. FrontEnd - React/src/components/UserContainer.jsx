//Import the necessary modules
import { Toast } from "../helpers/swalConfig";
import { useState } from "react";

//Import the necessary components
import Header from "./Header"
import Footer from "./Footer"
import CardContainer from "./CardContainer"

function UserContainer() {
    const [refreshKey, setRefreshKey] = useState(0);

    const handleRefresh = (message) => {
        setRefreshKey(refreshKey + 1);
        if (message) {
            renderUserMessage(message);
        }
    };

    const renderUserMessage = (message) => {
        if (message.status !== 200) {
            Toast.fire({
                icon: 'error',
                title: message.message
            });
            return;
        }
        Toast.fire({
            icon: 'success',
            title: message.message
        });
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-800">
            <Header />
            <div className="flex-grow flex items-center mx-4 justify-center my-12">
                <div className="container mx-auto px-4 py-6 bg-white dark:bg-gray-800 border dark:border-gray-500 rounded-lg">
                    <CardContainer key={refreshKey} onFetch={handleRefresh} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default UserContainer;