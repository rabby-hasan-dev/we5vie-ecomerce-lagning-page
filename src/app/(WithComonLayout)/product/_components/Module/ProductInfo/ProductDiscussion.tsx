import { TDiscussion } from "@/types";


const ProductDiscussion = ({ discussions }: { discussions: TDiscussion[] }) => {
    return (
        <div className="p-6 border-t border-gray-200 space-y-6">
            <h2 className="text-lg font-semibold text-gray-800">Product Discussions</h2>
            <div className="space-y-4">
                {discussions.map((discussion, index) => (
                    <div key={index} className="p-4 border border-gray-300 rounded-lg bg-gray-50">
                        {/* User Info */}
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-gray-900">{discussion.username}</h3>
                            <p className="text-xs text-gray-500">{new Date(discussion.date).toLocaleDateString()}</p>
                        </div>
                        {/* Question */}
                        <div className="mt-2">
                            <p className="text-sm text-gray-700 font-medium">Q: {discussion.question}</p>
                        </div>
                        {/* Answer */}
                        {discussion.answer ? (
                            <div className="mt-2 border-l-2 border-blue-500 pl-4">
                                <p className="text-sm text-gray-600">
                                    <span className="font-medium text-gray-800">A:</span> {discussion.answer}
                                </p>
                            </div>
                        ) : (
                            <p className="mt-2 text-sm text-gray-500">Awaiting response...</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductDiscussion;
