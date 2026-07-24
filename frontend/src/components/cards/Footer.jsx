import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-slate-950 py-12">

      <div className="container mx-auto px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo */}

          <div className="flex items-center gap-4">

            <img
              src={logo}
              alt="CyberShield"
              className="w-14 h-14"
            />

            <h2 className="text-3xl font-bold text-white">
              CyberShield
            </h2>

          </div>

          {/* Links */}

          <div className="flex flex-col md:flex-row items-center gap-8 text-slate-300">

            <a
              href="https://github.com/charansaibalaji/CyberShield"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/charan-sai-balaji-3076aa296"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:cybershields@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              cybershields@gmail.com
            </a>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-slate-500">

          © 2026 CyberShield. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;