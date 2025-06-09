const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Newsletter submission logic would go here
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#070054] via-slate-900 to-slate-800 text-white pt-16 pb-6 px-6 z-10 overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-amber-500 z-10"></div>

      <div className="max-w-6xl mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-12 mb-8">
          {/* Main Section */}
          <div className="animate-[fadeInUp_0.8s_ease-out]">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 mr-4 rounded-xl flex items-center justify-center text-white text-xl shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-110 hover:rotate-[5deg] hover:shadow-blue-500/50">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-br from-white to-slate-300 bg-clip-text text-transparent">
                TechLearn Solutions
              </h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Empowering students and professionals with the skills and knowledge needed to excel in the technology industry through expert-led training programs.
            </p>
            <div className="flex gap-4 mb-8">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-black/30 hover:bg-[#1877f2]"
                title="Follow us on Facebook"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <i className="fab fa-facebook-f relative z-10"></i>
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-black/30 hover:bg-[#1da1f2]"
                title="Follow us on Twitter"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <i className="fab fa-twitter relative z-10"></i>
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-black/30 hover:bg-gradient-to-r hover:from-[#f09433] hover:via-[#e6683c] hover:via-[#dc2743] hover:via-[#cc2366] hover:to-[#bc1888]"
                title="Follow us on Instagram"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <i className="fab fa-instagram relative z-10"></i>
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-black/30 hover:bg-[#0077b5]"
                title="Connect on LinkedIn"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <i className="fab fa-linkedin-in relative z-10"></i>
              </a>
            </div>

            {/* Newsletter Section */}
            <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h4 className="text-lg font-semibold mb-2 text-white">Stay Updated</h4>
              <p className="text-sm text-white/70 mb-4">Get the latest updates on courses and tech trends</p>
              <form className="flex gap-2" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-white/20 rounded-lg bg-white/10 text-white text-sm transition-all duration-300 placeholder:text-white/50 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.2)]"
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-gradient-to-br from-blue-500 to-purple-600 border-none rounded-lg text-white cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/40"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="animate-[fadeInUp_0.8s_ease-out] [animation-delay:0.2s] [animation-fill-mode:both]">
            <h4 className="font-bold text-xl mb-4 text-white relative">Quick Links</h4>
            <div className="w-10 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-sm mb-5 animate-[expandWidth_0.8s_ease-out_0.5s_both]"></div>
            <ul className="list-none flex flex-col gap-3.5">
              <li>
                <a
                  href="#home"
                  className="text-white/80 no-underline transition-all duration-300 flex items-center gap-3 py-2 rounded-lg relative hover:text-white hover:translate-x-2 hover:pl-3"
                >
                  <i className="fas fa-home w-4 text-sm text-blue-500 transition-all duration-300 hover:text-blue-400 hover:scale-125"></i>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#techprep"
                  className="text-white/80 no-underline transition-all duration-300 flex items-center gap-3 py-2 rounded-lg relative hover:text-white hover:translate-x-2 hover:pl-3"
                >
                  <i className="fas fa-code w-4 text-sm text-blue-500 transition-all duration-300 hover:text-blue-400 hover:scale-125"></i>
                  TechPrep
                </a>
              </li>
              <li>
                <a
                  href="#designlab"
                  className="text-white/80 no-underline transition-all duration-300 flex items-center gap-3 py-2 rounded-lg relative hover:text-white hover:translate-x-2 hover:pl-3"
                >
                  <i className="fas fa-palette w-4 text-sm text-blue-500 transition-all duration-300 hover:text-blue-400 hover:scale-125"></i>
                  DesignLab
                </a>
              </li>
              <li>
                <a
                  href="#summer-intern"
                  className="text-white/80 no-underline transition-all duration-300 flex items-center gap-3 py-2 rounded-lg relative hover:text-white hover:translate-x-2 hover:pl-3"
                >
                  <i className="fas fa-briefcase w-4 text-sm text-blue-500 transition-all duration-300 hover:text-blue-400 hover:scale-125"></i>
                  Summer Internship
                </a>
              </li>
              <li>
                <a
                  href="#mini-projects"
                  className="text-white/80 no-underline transition-all duration-300 flex items-center gap-3 py-2 rounded-lg relative hover:text-white hover:translate-x-2 hover:pl-3"
                >
                  <i className="fas fa-project-diagram w-4 text-sm text-blue-500 transition-all duration-300 hover:text-blue-400 hover:scale-125"></i>
                  Mini Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="animate-[fadeInUp_0.8s_ease-out] [animation-delay:0.2s] [animation-fill-mode:both]">
            <h4 className="font-bold text-xl mb-4 text-white relative">Contact Us</h4>
            <div className="w-10 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-sm mb-5 animate-[expandWidth_0.8s_ease-out_0.5s_both]"></div>
            <ul className="list-none flex flex-col gap-3.5">
              <li>
                <a
                  href="mailto:techlearnsolutions@gmail.com"
                  className="text-white/80 no-underline transition-all duration-300 flex items-center gap-3 py-2 rounded-lg relative hover:text-white hover:translate-x-2 hover:pl-3"
                >
                  <i className="fas fa-envelope w-4 text-sm text-blue-500 transition-all duration-300 hover:text-blue-400 hover:scale-125"></i>
                  <span className="text-sm">techlearnsolutions@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="text-white/80 no-underline transition-all duration-300 flex items-center gap-3 py-2 rounded-lg relative hover:text-white hover:translate-x-2 hover:pl-3"
                >
                  <i className="fas fa-phone w-4 text-sm text-blue-500 transition-all duration-300 hover:text-blue-400 hover:scale-125"></i>
                  <span className="text-sm">+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="text-white/80 no-underline transition-all duration-300 flex items-center gap-3 py-2 rounded-lg relative hover:text-white hover:translate-x-2 hover:pl-3"
                >
                  <i className="fas fa-map-marker-alt w-4 text-sm text-blue-500 transition-all duration-300 hover:text-blue-400 hover:scale-125"></i>
                  <span className="text-sm">TechLearn Campus, Bangalore, India - 560001</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-white/10 flex justify-between items-center flex-wrap gap-4">
          <p className="text-white/70 text-sm">© 2024 TechLearn Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/70 no-underline text-sm transition-colors duration-200 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 no-underline text-sm transition-colors duration-200 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-white/70 no-underline text-sm transition-colors duration-200 hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 border-none rounded-full text-white cursor-pointer transition-all duration-300 flex items-center justify-center shadow-lg shadow-blue-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-110 z-50"
        onClick={handleBackToTop}
        title="Back to Top"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </footer>
  );
};

export default Footer;
