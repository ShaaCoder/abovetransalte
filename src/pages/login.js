import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    if (email === 'universityinsights@gmail.com' && password === 'Team@UI@12345') {
      // Dummy validation (you can replace it with actual API call)
      const token = '9dfc49c9d47d74a9ebfcb935fd1db3a8888fcd3f9184aab4f30cece43a243013'; // Generate or fetch a JWT token
      document.cookie = `authToken=${token}; path=/`; // Save JWT in cookies
      router.push('/translator'); // Redirect to translator page
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-blue-600">Login</h1>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        
        <div className="mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full text-black px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full text-black px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full mt-6 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
      </div>
    </div>
  );
}
