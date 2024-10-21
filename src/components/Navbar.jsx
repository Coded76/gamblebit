import { FaSearch, FaBell, FaBars } from 'react-icons/fa';
import { TbChevronDown } from 'react-icons/tb';

const Navbar = ({ setIsSidebarOpen }) => {
    return (
        <nav className="w-full h-16 bg-[#FFFFFF] sticky top-0 z-30 flex items-center justify-between px-6 shadow-md">
            <div className="flex items-center space-x-2">
                <button
                    className="lg:hidden text-2xl"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <FaBars />
                </button>

                <div className="relative md:block hidden">
                    <input
                        type="text"
                        placeholder="Try searching “insights”"
                        className="pl-10 pr-4 py-2 w-[250px] md:w-[400px] bg-[#F6F6F6] text-[#666666] rounded-3xl border border-[#F6F6F6] focus:outline-none"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]" />
                </div>
            </div>

            <div className="flex items-center space-x-6">
                <div className="relative">
                    <FaBell className="text-black bg-[#F6F6F6] p-2 rounded-full" size={30} />
                    <span className="absolute top-0 right-0 bg-green-600 h-2 w-2 rounded-full"></span>
                </div>
                <div className="bg-[#F6F6F6] h-8 w-8 text-[10px] flex items-center justify-center text-black font-bold rounded-full">
                    MW
                </div>
                <div className="text-black py-2 px-8 flex gap-4 items-center rounded-3xl bg-[#F6F6F6]">
                    Micheal Ward
                    <TbChevronDown size={20} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
