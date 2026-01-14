
import { Link } from 'react-router-dom';
import { Code, HelpCircle } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primeBlob rounded-full blur-[100px] opacity-70"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secBlob rounded-full blur-[100px] opacity-70"></div>

            <div className="z-10 text-center max-w-4xl mx-auto px-4">
                <h1 className="text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                    Resolv
                </h1>
                <p className="text-xl text-gray-300 mb-16">
                    Connect technical challenges with student innovators.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    <Link to="/post" className="group">
                        <div className="glass-card p-8 rounded-2xl md:h-64 flex flex-col items-center justify-center card-hover cursor-pointer border-l-4 border-pink-500 bg-opacity-20 hover:bg-opacity-30">
                            <HelpCircle className="w-16 h-16 text-pink-500 mb-4 group-hover:scale-110 transition-transform" />
                            <h2 className="text-2xl font-bold mb-2">Facing a Problem?</h2>
                            <p className="text-gray-400">Post your technical issue and let students solve it.</p>
                        </div>
                    </Link>

                    <Link to="/dashboard" className="group">
                        <div className="glass-card p-8 rounded-2xl md:h-64 flex flex-col items-center justify-center card-hover cursor-pointer border-l-4 border-purple-500 bg-opacity-20 hover:bg-opacity-30">
                            <Code className="w-16 h-16 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
                            <h2 className="text-2xl font-bold mb-2">Need a Problem?</h2>
                            <p className="text-gray-400">Explore issues and build your portfolio.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
