export const DeleteModal = ({ isOpen, onClose, onDelete }) => {
    return isOpen ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <p className="text-gray-800 dark:text-white text-lg font-semibold mb-4">
                    Are you sure you want to delete this item?
                </p>
                <div className="flex justify-end">
                    <button
                        className="mr-2 px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg"
                        onClick={onDelete}
                    >
                        Delete
                    </button>
                    <button
                        className="px-4 py-2 text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-lg"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    ) : null;
};