import { useEffect, useState } from 'react';
import IssueCard from '../components/IssueCard';
import type { Issue } from '../types';
import { Search, Filter } from 'lucide-react';

const Dashboard = () => {
    const [issues, setIssues] = useState<Issue[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/api/issues')
            .then(res => res.json())
            .then(data => {
                setIssues(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching issues:', err);
                setLoading(false);
                // Fallback data for demo if backend is not running or empty
                if (loading) {
                    setIssues([
                        { id: '1', title: 'Demo Issue', description: 'This is a sample issue description.', tags: ['Java', 'Spring'], status: 'Open', upvotes: 5 },
                        { id: '2', title: 'Frontend Bug', description: 'Fix the glassmorphism blur on Safari.', tags: ['React', 'CSS'], status: 'In Progress', upvotes: 12 }
                    ]);
                }
            });
    }, []);

    return (
        <div className="min-h-screen pt-20 pb-10 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <div>
                    <h1 className="text-4xl font-bold mb-2">Explore Issues</h1>
                    <p className="text-gray-400">Find a project to contribute to.</p>
                </div>

                <div className="mt-6 md:mt-0 flex gap-4 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search issues..."
                            className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-pink-500 text-white placeholder-gray-500"
                        />
                    </div>
                    <button className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-gray-300">
                        <Filter size={20} />
                    </button>
                </div>
            </div>

            {loading ? (
                <div className="text-center py-20">Loading...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {issues.map(issue => (
                        <IssueCard key={issue.id} issue={issue} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dashboard;
