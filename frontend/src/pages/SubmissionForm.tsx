import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send } from 'lucide-react';

const SubmissionForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        tags: '',
        status: 'Open',
        upvotes: 0
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);

        const payload = {
            ...formData,
            tags: tagsArray
        };

        fetch('http://localhost:8080/api/issues', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                if (res.ok) {
                    navigate('/dashboard');
                } else {
                    console.error('Failed to submit issue');
                }
            })
            .catch(err => console.error('Error submitting:', err))
            .finally(() => setLoading(false));
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 flex items-center justify-center">
            <div className="glass-card p-8 rounded-2xl w-full max-w-2xl border-l-4 border-pink-500">
                <h1 className="text-3xl font-bold mb-6 text-white text-center">Post an Issue</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="title">
                            Issue Title
                        </label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            required
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
                            placeholder="e.g., Fix Navigation Bug on Mobile"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            required
                            rows={5}
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
                            placeholder="Describe the technical problem in detail..."
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="tags">
                            Tags (comma separated)
                        </label>
                        <input
                            id="tags"
                            name="tags"
                            type="text"
                            value={formData.tags}
                            onChange={handleChange}
                            className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
                            placeholder="React, Java, CSS"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transform active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Posting...' : (
                            <>
                                <Send size={20} />
                                Post Issue
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SubmissionForm;
