export default function FlashMessage({ className, message = "", type }) {
    let theme =
        type == "success" ? "green" : type == "warning" ? "yellow" : "red";
    return (
        <div
            className={`w-full p-4 my-2 bg-green-200 border-2 border-green-800 ${className}`}
        >
            <span className={`font-bold text-green-800`}>{message}</span>
        </div>
    );
}
