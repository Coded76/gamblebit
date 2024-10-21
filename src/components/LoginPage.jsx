import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle, FaApple } from 'react-icons/fa';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    // Form validation and handling
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error('Please enter both email and password', {
                position: 'top-right',
            });
        } else {
            toast.success('Login Successful!', {
                position: 'top-right',
            });
            router.push('/overview');
        }
    };

    return (
        <div className="flex flex-col md:overflow-y-hidden overflow-y-scroll md:flex-row h-screen">
            {/* Left Section */}
            <div className="md:w-1/2 w-full bg-gray-900 relative flex flex-col overflow-hidden justify-center text-white p-6">
                <div className="mb-6"><img src="/logo.svg" alt="" /></div>
                <div>
                    <h2 className="text-2xl md:text-3xl mt-5">
                        Unlock Real-Time Insights
                    </h2>
                    <p className="mt-5 text-base md:text-lg">
                        Transform data into powerful insights with a comprehensive
                        view to optimize operations and boost profitability.
                    </p>
                </div>

                <img src="/login.svg" className="w-3/4 md:w-full -translate-x-12 translate-y-20" alt="" />
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-6">
                <div className="w-full max-w-md">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Welcome Back!</h2>
                    <p className="mb-6 text-center">Please enter your details</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-white px-2 text-gray-500">Or sign in with</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <FaGoogle className="mr-2" />
                                Google
                            </button>

                            <button
                                type="button"
                                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <FaApple className="mr-2" />
                                Apple
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
}
