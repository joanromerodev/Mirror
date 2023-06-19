function renderErrorMessage(errors) {
    if (errors) {
        if (errors.img) {
            if (errors.img.type === "maxLength") {
                return (
                    <div className="mb-10">
                        <span className="text-red-500 text-sm bg-red-100 rounded-lg px-4 py-2 dark:bg-gray-600 dark:text-white dark:font-semibold">
                            Image URL exceeds maximum length
                        </span>
                    </div>
                );
            }
        }
        if (errors.name) {
            if (errors.name.type === "required") {
                return (
                    <div className="mb-10">
                        <span className="text-red-500 text-sm bg-red-100 rounded-lg px-4 py-2 dark:bg-gray-600 dark:text-white dark:font-semibold">
                            Name is required
                        </span>
                    </div>
                );
            }
            if (errors.name.type === "maxLength") {
                return (
                    <div className="mb-10">
                        <span className="text-red-500 text-sm bg-red-100 rounded-lg px-4 py-2 dark:bg-gray-600 dark:text-white dark:font-semibold">
                            Name exceeds maximum length
                        </span>
                    </div>
                );
            }
        }
        if (errors.email) {
            if (errors.email.type === "required") {
                return (
                    <div className="mb-10">
                        <span className="text-red-500 text-sm bg-red-100 rounded-lg px-4 py-2 dark:bg-gray-600 dark:text-white dark:font-semibold">
                            Email is required
                        </span>
                    </div>
                );
            }
            if (errors.email.type === "maxLength") {
                return (
                    <div className="mb-10">
                        <span className="text-red-500 text-sm bg-red-100 rounded-lg px-4 py-2 dark:bg-gray-600 dark:text-white dark:font-semibold">
                            Email exceeds maximum length
                        </span>
                    </div>
                );
            }
        }
        if (errors.password) {
            if (errors.password.type === "required") {
                return (
                    <div className="mb-10">
                        <span className="text-red-500 text-sm bg-red-100 rounded-lg px-4 py-2 dark:bg-gray-600 dark:text-white dark:font-semibold">
                            Password is required
                        </span>
                    </div>
                );
            }
            if (errors.password.type === "minLength") {
                return (
                    <div className="mb-10">
                        <span className="text-red-500 text-sm bg-red-100 rounded-lg px-4 py-2 dark:bg-gray-600 dark:text-white dark:font-semibold">
                            Password must be at least 8 characters
                        </span>
                    </div>
                );
            }
            if (errors.password.type === "maxLength") {
                return (
                    <div className="mb-10">
                        <span className="text-red-500 text-sm bg-red-100 rounded-lg px-4 py-2 dark:bg-gray-600 dark:text-white dark:font-semibold">
                            Password exceeds maximum length
                        </span>
                    </div>
                );
            }
        }
    }
    return null;
}

export { renderErrorMessage };
