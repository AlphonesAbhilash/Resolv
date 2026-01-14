import { ThumbsUp, GitBranch } from 'lucide-react';
import type { Issue } from '../types';

interface IssueCardProps {
    issue: Issue;
}

const statusColors: Record<string, string> = {
    'Open': 'bg-green-500/20 text-green-400 border-green-500/50',
    'In Progress': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
    'Solved': 'bg-purple-500/20 text-purple-400 border-purple-500/50',
};

const IssueCard = ({ issue }: IssueCardProps) => {
    return (
        <div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[issue.status] || statusColors['Open']}`}>
                    {issue.status}
                </span>
                <button className="flex items-center space-x-1 text-gray-400 hover:text-pink-500 transition-colors">
                    <ThumbsUp size={16} />
                    <span>{issue.upvotes}</span>
                </button>
            </div>

            <h3 className="text-xl font-bold mb-2 text-white">{issue.title}</h3>
            <p className="text-gray-400 mb-4 line-clamp-3 text-sm">{issue.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
                {issue.tags && issue.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 rounded-md bg-white/10 text-xs text-gray-300">
                        #{tag}
                    </span>
                ))}
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <button className="text-sm text-pink-400 hover:text-pink-300 font-medium flex items-center">
                    View Details
                </button>

                {/* Placeholder for Claim/Github Link action */}
                {issue.status === 'Open' ? (
                    <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Claim Issue
                    </button>
                ) : (
                    <a href={issue.githubUrl || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                        <GitBranch size={16} />
                        <span className="text-sm">View Solution</span>
                    </a>
                )}
            </div>
        </div>
    );
};

export default IssueCard;
