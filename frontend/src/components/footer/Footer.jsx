import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => (
  <footer className="border-t py-8 bg-gray-900 text-white mr-2 ml-2 rounded-xl">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} label="Facebook" />
        <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
        <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} label="Instagram" />
      </div>
      <p className="text-sm text-gray-400 text-center">
        © 2024 Your Skill-Hub Platform. All rights reserved.
        <br />
        Made by ❤️ with Code-Crafter
      </p>
    </div>
  </footer>
);
 
const SocialLink = ({ href, icon, label }) => (
  <Link to={href} className="text-gray-600 hover:text-gray-900 transition-colors" aria-label={label}>
    {icon}
  </Link>
);

export default Footer;