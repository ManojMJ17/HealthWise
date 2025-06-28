import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../api/AppPath";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password || !age || !gender || !country) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          age,
          gender,
          country,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setUsername("");
        setEmail("");
        setPassword("");
        setAge("");
        setGender("");
        setCountry("");
        toast.success("Registration successfull");
        navigate("/login");
      } else {
        setError(data.message || "Registration Failed");
      }
    } catch (error) {
      console.error("Registration Failed", error);
      setError("An error occurred during registration");
    }
  };

  if (error) return <p>{error}</p>;

  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <div className="w-full my-5 flex justify-center items-center flex-col">
        <h1 className="text-2xl font-semibold">Create Your Account</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center my-6 gap-4 w-[50%]"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className=" text-white  rounded-md px-4 py-2 border-1 w-100"
              placeholder="Enter your Username"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" text-white  rounded-md px-4 py-2 border-1 w-100"
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" text-white  rounded-md px-4 py-2 border-1 w-100"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className=" text-white  rounded-md px-4 py-2 border-1 w-100"
              placeholder="Enter your age"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="text-white rounded-md px-4 py-2 border-1 w-100"
              required
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className=" text-white  rounded-md px-4 py-2 border-1 w-100"
              placeholder="Enter your country"
            />
          </div>
          <div className="mt-4 flex justify-center text-white bg-[#789CBA] px-3 py-2 rounded-4xl cursor-pointer w-[50%]">
            <button type="submit" className="text-black">
              Register
            </button>
          </div>
          <div>
            <p className="opacity-40">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
