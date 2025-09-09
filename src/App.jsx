import { Mail } from "lucide-react";
import Navbar from "./components/navbar";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center bg-white md:min-h-[75vh] px-4">
        <div className="w-full md:max-w-2/3 bg-gradient-to-b from-white to-gray-50 rounded-2xl text-center">
          {/* Heading */}
          <h1 className="font-nunito font-bold mt-12 text-3xl sm:text-4xl md:text-[64px] leading-tight">
            Built for Naija by Naija
          </h1>
          <p className="font-pacifico font-normal mt-6 text-xl sm:text-2xl md:text-[36px] leading-tight">
            Built by Singles for Singles
          </p>

          {/* Join Waitlist */}
          <div className="bg-gradient-to-b from-gray-100/70 to-transparent rounded-t-2xl mt-10 px-4">
            <h2 className="font-nunito mt-10 text-2xl md:text-[34px] text-gray-900 mb-2">
              Join our waitlist!
            </h2>
            <p className="font-nunito text-base md:text-[24px] text-gray-600 mb-6">
              Sign up for our newsletter to receive the latest <br className="hidden md:block" />
              updates and insights straight to your inbox
            </p>

            {/* Input + Button */}
            <form className="flex flex-col md:flex-row items-center gap-4 md:gap-[36px] mb-6 w-full justify-center">
              <div className="flex items-center border border-yellow-400 rounded-full px-4 py-2 w-full max-w-md">
                <Mail className="w-5 h-5 text-gray-500 shrink-0" />
                <input
                  type="email"
                  placeholder="Enter email to join"
                  className="flex-1 outline-none bg-transparent text-sm text-gray-800 px-3 py-2"
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 font-medium rounded-full border-none"
              >
                Join waitlist
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 text-gray-700 mb-10">
              <a href="#" className="hover:text-gray-900">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-900">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-900">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-900">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <img
        src="/waitlist.png"
        alt="Logo"
        className="w-full h-auto object-cover mt-20 md:mt-56"
      />
    </div>
  );
}
