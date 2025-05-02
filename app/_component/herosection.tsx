"use client"
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Home, User, Briefcase, FolderGit2, Youtube, Bold } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useActiveSection } from '../_hooks/useActiveSection';


export default function Herosection() {
  const activeSection = useActiveSection();
  const [mounted, setMounted] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const baseLayout = (
    <div className="fixed left-0 top-0 h-screen w-[300px] bg-[#0a192f] px-8 py-12 hidden lg:block" data-no-edit="true">
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className={`text-[#64ffda] text-2xl flex items-center gap-3 `}>
            <span className="text-2xl">🚀</span>
            <span>Kenny's Interface</span>
          </div>
        </div>
        {mounted && (
          <>
            <nav className="flex-1 my-16">
              <ul className="space-y-6">
                {navItems.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className={`group text-lg font-mono transition-all duration-300
                        ${activeSection === href.slice(1) 
                          ? 'text-[#64ffda]' 
                          : 'text-[#8892b0] hover:text-[#64ffda]'
                        }`}
                    >
                      <span className={`transition-all duration-300 
                        ${activeSection === href.slice(1) ? 'pl-4' : 'pl-0 group-hover:pl-4'}`}>
                        {label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <div className="flex space-x-6 items-center justify-center text-[#8892b0]">
                <Link href="mailto:your@email.com" className="hover:text-[#64ffda] transition-colors">
                  <Mail size={20} />
                </Link>
                <Link href="https://github.com" className="hover:text-[#64ffda] transition-colors">
                  <Github size={20} />
                </Link>
                <Link href="https://linkedin.com" className="hover:text-[#64ffda] transition-colors">
                  <Linkedin size={20} />
                </Link>
                <Link href="https://app.bag.work/niyonshuti_kenny558/" className="hover:text-[#64ffda] transition-colors">
                  <Bold size={20} />
                </Link>
                <Link href="https://twitter.com" className="hover:text-[#64ffda] transition-colors">
                  <Youtube size={20} />
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );

  return baseLayout;
}
