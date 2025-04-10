"use client"
import Link from 'next/link';
function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Kwality Optical is a trusted name in eye care, dedicated to
            providing quality vision solutions since 1978. We offer expert
            guidance, stylish eyewear, and precise eye checkups — nurturing
            clarity and confidence in every customer.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              {/* <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a> */}
            </li>
            <li>
              <Link
                href="/courses"
                className="hover:text-white transition-colors duration-300"
              >
            All frames
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </Link>
            <Link
              href="https://www.instagram.com/qwality._.optical?igsh=MTcwMDNmNmp1OTI4YQ=="
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Udhana Road No. 7, Mahavir Palace, First Floor</p>
          <p>Surat, Gujarat 395002</p>
          <p>Email: pathant018@gmail.com</p>
          <p>Phone: +91 89809 63599</p>{" "}
          {/* Replace with your actual contact number if different */}
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Qwality optical . All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
