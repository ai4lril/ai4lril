export default function TextBox() {
    return (
        <div className="flex flex-col items-center w-full h-full justify-center gap-4">
            <form className="w-full h-full max-w-md">
                <textarea
                    className="w-full h-full p-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:outline-2 hover:outline-blue-400"
                    placeholder="Type your question here..."
                    rows={4}
                ></textarea>
            </form>
        </div>
    );
}