import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-campus-primary">
              Campus Flow
            </h1>
          </div>
          <Button
            onClick={handleLoginClick}
            variant="outline"
            className="border-campus-primary text-campus-primary hover:bg-campus-primary hover:text-white"
          >
            Login
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-campus-light to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h1 className="text-4xl font-bold text-campus-primary sm:text-5xl md:text-6xl">
                Welcome to Campus Flow
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl">
                A modern campus management system designed to streamline
                academic and administrative processes.
              </p>
              <div className="mt-5 sm:flex sm:justify-start md:mt-8">
                <Button
                  onClick={handleLoginClick}
                  className="bg-campus-primary text-white hover:bg-campus-primary/90"
                >
                  Get Started
                </Button>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <img
                src="https://www.svitvasad.ac.in/img/Nursing/Infrastructure/IMG_0115.JPG"
                alt="Student using laptop"
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-campus-primary">
              Campus Facilities
            </h2>
            <p className="mt-2 text-gray-600">
              Explore our state-of-the-art facilities designed for an optimal
              learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200">
                <img
                  src="https://svitvasad.ac.in/img/lbraary3.jpg"
                  alt="Modern Library"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-campus-dark">
                  Digital Library
                </h3>
                <p className="mt-2 text-gray-600">
                  Access to over 50,000 digital resources, study spaces, and
                  research assistance.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200">
                <img
                  src="https://images.shiksha.com/mediadata/images/1480653411phpSSk29M.png"
                  alt="Science Laboratory"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-campus-dark">
                  Advanced Labs
                </h3>
                <p className="mt-2 text-gray-600">
                  Cutting-edge equipment for research and practical learning
                  experiences.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200">
                <img
                  src="https://i.ytimg.com/vi/yT4H0BZ5Rho/sddefault.jpg"
                  alt="Campus Grounds"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-campus-dark">
                  Recreation Centers
                </h3>
                <p className="mt-2 text-gray-600">
                  Sports facilities, fitness centers, and outdoor areas for a
                  balanced student life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life Section - New Section with Photos */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-campus-primary">
              Campus Life
            </h2>
            <p className="mt-2 text-gray-600">
              Experience the vibrant and enriching life on our campus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200">
                <img
                  src="https://admin.svitvasad.ac.in/DataImages/638288677785772283.jpeg"
                  alt="Student studying"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-campus-dark">
                Academic Excellence
              </h3>
              <p className="mt-4 text-gray-600">
                Our campus provides an environment that fosters academic
                excellence and intellectual growth. With dedicated faculty and
                modern learning tools, students are empowered to achieve their
                highest potential.
              </p>
            </div>

            <div className="flex flex-col justify-center order-4 md:order-3">
              <h3 className="text-2xl font-semibold text-campus-dark">
                Student Community
              </h3>
              <p className="mt-4 text-gray-600">
                Join a diverse and inclusive community where students from
                various backgrounds come together to learn, share ideas, and
                create lasting connections.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md order-3 md:order-4">
              <div className="h-64 bg-gray-200">
                <img
                  src=".../student-community.jpg"
                  alt="Student community"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Map Section - New Section with Map */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-campus-primary">
              Campus Map
            </h2>
            <p className="mt-2 text-gray-600">
              Find your way around our beautiful campus.
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.9332687608353!2d73.07379517475412!3d22.469141836755288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fb55277d1e457%3A0xaf7e43a3d29561b!2sSardar%20Vallabhbhai%20Patel%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1750708630409!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[400px] object-cover"
              title="Campus Map"
            ></iframe>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-campus-dark">
                Our Campus
              </h3>
              <p className="mt-2 text-gray-600">
                "Visit us where knowledge meets opportunity—our campus awaits
                you!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Branding Section */}
            <div>
              <h2 className="text-xl font-bold">Campus Flow</h2>
              <p className="mt-2 text-gray-400">
                Revolutionizing campus management with modern technology.
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                Contact Us
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <span className="text-gray-400">Email: </span>
                  <a
                    href="mailto:support@campusflow.com"
                    className="text-gray-400 hover:text-white"
                  >
                    support@campusflow.com
                  </a>
                </li>
                <li>
                  <span className="text-gray-400">Phone: </span>
                  <a
                    href="tel:+123456789"
                    className="text-gray-400 hover:text-white"
                  >
                    +1 234 567 89
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-400">
              &copy; 2025 Campus Flow. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
