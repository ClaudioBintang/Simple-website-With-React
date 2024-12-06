import ceana from '../../assets/ceana.jpg'
import green from '../../assets/green cuts.png'
import hmbuild from '../../assets/home build.jpg'

import tech from '../../assets/technology.jpg'
const Header = () => {
    return (
        <>
        <div>
            <div className="w-full bg-white h-fit">
                
                <div className="flex flex-col items-center justify-center h-full py-10 sm:pr-4">
                    <button className="px-4 border border-indigo-400 rounded-full">
                    <p className="py-2 font-medium">Avaible for new project</p>
                    </button>
                    <h1 className="py-6 text-6xl font-semibold text-center sm:justify-center">Your reliable mobile &<br  /> web design partner</h1>
                    <p className="py-6 font-light">specializing in AI, frontend web development, and mobile app development</p>
                </div>
                <div className="flex items-center justify-center pt-3 pb-14">
                    <button className="px-5 py-3 text-sm font-medium text-white transition duration-300 ease-in-out bg-black rounded-full rouinline-block hover:bg-gray-700 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">Schedule a Free Call</button>
                </div>
            </div>
            <div>
                <p className="text-center opacity-60">Trusted by companies & organizations.</p>
                <div className="grid items-center justify-center md:grid-cols-3 lg:grid-cols-4">
                <img src={ceana} alt="ceana tech" className="w-96" />
                <img src={green} alt="green cuts" className="w-96" />
                <img src={hmbuild} alt="home build" className="w-96" />
                <img src={tech} alt="landscape" className="w-96" />
                </div>
            </div>
        </div>
        </>
    )
}
export default Header