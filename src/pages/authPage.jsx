import React, { useState } from 'react';
import Modal from '../components/Modal';
import { Mail, Lock, User, ArrowRight, Loader2 } from 'lucide-react';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from '../config/firebase';

const AuthForm = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    //   modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    // client or freelancer
    const [userType, setUserType] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const userTypeHandler = (type) => {
        setUserType(type);
        if (type === 'freelancer') {
            console.log('Freelancer selected');
            setIsModalOpen(false);
        }
        else if (type === 'client') {
            console.log('Client selected');
            setIsModalOpen(false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (isSignUp) {
                const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
                console.log("User registered:", userCredential.user);
                setIsModalOpen(true);
            } else {
                const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
                console.log("User signed in:", userCredential.user);
                setIsModalOpen(true);
            }
        } catch (error) {
            console.error("Auth Error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log("Google User signed in:", result.user);
            setIsModalOpen(true);
        } catch (error) {
            console.error("Google Auth Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-[#0a0b0d] px-4 sm:px-6 relative overflow-hidden font-sans">

                {/* Cybernetic Hive Ambient Background */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/[0.06] rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

                {/* Main Glassmorphic Wrapper - Grid Layout for Landscape Orientation */}
                <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 bg-[#121318]/90 backdrop-blur-xl rounded-2xl border border-zinc-800/60 shadow-2xl overflow-hidden transition-all duration-300 hover:border-zinc-700/40">

                    {/* Left Side Column: Brand Header (Spans 5 Columns on Desktop) */}
                    <div className="md:col-span-5 flex flex-col items-center justify-center text-center p-8 bg-[#161820]/40 border-b md:border-b-0 md:border-r border-zinc-800/60 min-h-[180px] md:min-h-0">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-black font-bold mb-4 shadow-xl shadow-yellow-500/10">
                            🐝
                        </div>
                        <h2 className="text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                            {isSignUp ? 'Join the Hive' : 'Worker Bees'}
                        </h2>
                        <p className="mt-2 text-xs text-zinc-400 font-medium tracking-wide uppercase max-w-[200px] mx-auto">
                            {isSignUp ? 'Create your worker profile' : 'Welcome back, industrious bee!'}
                        </p>
                    </div>

                    {/* Right Side Column: Form Fields & Interactive Actions (Spans 7 Columns) */}
                    <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-center space-y-5">
                        <form className="space-y-3.5" onSubmit={handleSubmit}>

                            {isSignUp && (
                                <InputField
                                    label="Full Name"
                                    name="name"
                                    type="text"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    Icon={User}
                                />
                            )}

                            <InputField
                                label="Email Address"
                                name="email"
                                type="email"
                                placeholder="bee@workerhive.com"
                                value={formData.email}
                                onChange={handleChange}
                                Icon={Mail}
                            />

                            <InputField
                                label="Password"
                                name="password"
                                type="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                Icon={Lock}
                            />

                            {/* Core Action Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full mt-2 group relative flex justify-center items-center py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-black text-black bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 disabled:opacity-50 transition-all duration-200 cursor-pointer active:scale-[0.98] shadow-lg shadow-yellow-500/10"
                            >
                                {loading ? (
                                    <Loader2 className="w-5 h-5 animate-spin text-black" />
                                ) : (
                                    <>
                                        {isSignUp ? 'Get Started' : 'Enter the Hive'}
                                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Visual Divider Segment */}
                        <div className="relative flex py-0.5 items-center">
                            <div className="flex-grow border-t border-zinc-800/80"></div>
                            <span className="flex-shrink mx-4 text-[10px] uppercase font-bold tracking-widest text-zinc-500">Or continue with</span>
                            <div className="flex-grow border-t border-zinc-800/80"></div>
                        </div>

                        {/* Google Authentication Button Layout */}
                        <button
                            type="button"
                            onClick={handleGoogleSignIn}
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider font-bold text-white bg-[#171922] border border-zinc-800 hover:border-zinc-700/80 hover:bg-[#1c1e29] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 cursor-pointer shadow-md"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Google Workspace
                        </button>

                        {/* Dynamic Footer Switcher */}
                        <div className="text-center pt-1 border-t border-zinc-800/40">
                            <p className="text-xs text-zinc-500">
                                {isSignUp ? 'Already a member?' : "New to the collective?"}
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsSignUp(!isSignUp);
                                        setFormData({ name: '', email: '', password: '' });
                                    }}
                                    className="text-yellow-500 hover:text-yellow-400 font-semibold cursor-pointer ml-1.5 transition-colors"
                                >
                                    {isSignUp ? 'Sign In' : 'Create account'}
                                </button>
                            </p>
                        </div>

                    </div>

                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="p-8 md:p-10 text-center flex flex-col items-center justify-center min-h-[320px]">

                    {/* Header */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-extrabold text-white tracking-tight drop-shadow-md">
                            {isSignUp ? 'Choose Your Designation' : 'Select Workplace'}
                        </h3>
                        <p className="text-xs text-zinc-400 font-medium tracking-wide uppercase mt-1.5">
                            Define your role in the collective matrix
                        </p>
                    </div>

                    {/* Selection Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mb-2">

                        {/* Freelancer Card */}
                        <button
                            type="button"
                            onClick={() => userTypeHandler('freelancer')}
                            className="group relative flex flex-col items-center justify-center p-6 bg-[#171922]/60 hover:bg-[#1c1e29]/80 border border-zinc-800/80 hover:border-yellow-500/50 rounded-xl transition-all duration-200 cursor-pointer text-center active:scale-[0.98] shadow-md"
                        >
                            <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800 text-xl mb-3 group-hover:bg-gradient-to-br group-hover:from-yellow-400 group-hover:to-amber-500 group-hover:text-black transition-all duration-200">
                                ⚡
                            </div>
                            <span className="text-sm font-bold text-zinc-200 uppercase tracking-wider group-hover:text-white">
                                Freelancer
                            </span>
                            <span className="text-[11px] text-zinc-500 mt-1 block group-hover:text-zinc-400 max-w-[140px]">
                                Build interfaces & secure remote work
                            </span>
                        </button>

                        {/* Client Card */}
                        <button
                            type="button"
                            onClick={() => userTypeHandler('client')}
                            className="group relative flex flex-col items-center justify-center p-6 bg-[#171922]/60 hover:bg-[#1c1e29]/80 border border-zinc-800/80 hover:border-yellow-500/50 rounded-xl transition-all duration-200 cursor-pointer text-center active:scale-[0.98] shadow-md"
                        >
                            <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800 text-xl mb-3 group-hover:bg-gradient-to-br group-hover:from-yellow-400 group-hover:to-amber-500 group-hover:text-black transition-all duration-200">
                                💼
                            </div>
                            <span className="text-sm font-bold text-zinc-200 uppercase tracking-wider group-hover:text-white">
                                Client
                            </span>
                            <span className="text-[11px] text-zinc-500 mt-1 block group-hover:text-zinc-400 max-w-[140px]">
                                Hire talent & orchestrate deployments
                            </span>
                        </button>

                    </div>

                </div>
            </Modal>
        </>
    );
};

const InputField = ({ label, name, type, placeholder, value, onChange, Icon }) => (
    <div className="space-y-1">
        <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block ml-0.5">{label}</label>
        <div className="relative group">
            <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 w-4 h-4 transition-colors duration-200" />
            <input
                name={name}
                type={type}
                required
                value={value}
                onChange={onChange}
                className="w-full bg-[#171922] border border-zinc-800/80 focus:border-yellow-500/80 focus:ring-1 focus:ring-yellow-500/20 text-white rounded-xl pl-11 pr-4 py-2.5 text-xs transition-all outline-none duration-200"
                placeholder={placeholder}
            />
        </div>
    </div>

);

export default AuthForm;