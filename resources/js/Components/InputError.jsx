export default function InputError({ message, className = "" }) {
    return message ? (
        <p className={"text-sm text-red-600 italic px-2 " + className}>
            {message}
        </p>
    ) : null;
}
