import React from "react";

const Footer = () => (
  <footer className="w-full py-8 bg-black-100 text-white text-lg mt-8 flex flex-col">
    <div className="flex gap-4 justify-end mb-2 w-full pr-8">
      <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
        {/* LinkedIn Icon */}
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
        LinkedIn
      </a>
      <a href="mailto:your@email.com" className="hover:underline flex items-center gap-1">
        {/* Email Icon */}
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.99-7.065v14h23.98v-14l-11.99 7.065zm11.99-9.065h-23.98l11.99 7.065 11.99-7.065z"/></svg>
        Email
      </a>
      <a href="https://drive.google.com/your-drive-link" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
        {/* Google Drive Icon */}
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M7.71 3.23l-7.71 13.37 4.62 8.01h15.38l4.62-8.01-7.71-13.37zm8.58 15.77h-8.58l-2.31-4h13.2zm-10.89-6l3.29-5.71 3.29 5.71zm13.2 0l-3.29-5.71-3.29 5.71z"/></svg>
        Google Drive
      </a>
    </div>
    <div className="w-full text-center">
      © {new Date().getFullYear()} Janish. All rights reserved.
    </div>
  </footer>
);

export default Footer;
