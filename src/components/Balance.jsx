export const Balance = ({ value }) => {
    return (
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md shadow-sm">
            <span className="font-bold text-lg">Your balance:</span>
            <span className="font-semibold ml-2 text-lg text-green-700">Rs {value}</span>
        </div>
    );
};
