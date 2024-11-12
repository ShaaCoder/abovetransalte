import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import TranslatorApp from './translator'; // Import TranslatorApp component
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HomePage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is authenticated (this is just an example, adjust as needed)
  useEffect(() => {
    const cookies = document.cookie.split(';').find(cookie => cookie.includes('authToken'));
    if (cookies) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      router.push('/login'); // Redirect to login page if not authenticated
    }
  }, [router]);

  return (
    <>
      <Navbar />
      <div>
        {isAuthenticated ? (
          <TranslatorApp /> // Render the TranslatorApp component if authenticated
        ) : (
          <p>Loading...</p> // Show loading message until authentication is checked
        )}
      </div>
      <Footer />
    </>
  );
}
