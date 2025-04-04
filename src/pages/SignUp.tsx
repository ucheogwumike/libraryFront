import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/Logo-resize.png";


const Signup: React.FC = () => {
 
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    auth?.login(email);
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-green-900 text-white flex flex-col justify-center items-center p-10">
        <img src={logo} alt="NALTF Logo" className="w-24 h-24 mb-4" />
        <h1 className="text-3xl font-bold">NALTF</h1>
        <p className="text-center text-lg  mt-2">
          The National Assembly Library Trust Fund stands as a bastion of knowledge, committed to fostering a culture of enlightenment, research, and informed decision-making.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <h2 className="text-2xl font-semibold text-gray-800">Get Started</h2>
        <p className="text-sm text-gray-500 mb-5">Sign in and continue or Sign up to get started</p>

        <form onSubmit={handleSignup} className="w-80">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-900 text-white py-3 rounded-lg hover:bg-green-800 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-green-900 font-semibold">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
