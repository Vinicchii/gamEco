import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-8 py-6 flex flex-col items-center justify-center text-center">
      <p className="italic text-sm text-gray-700 mb-3">
        Desenvolvido por Vinicius Maximiano
      </p>

      <a
        href="https://github.com/vinicchii"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 text-gray-800 hover:text-gray-900 transition-colors"
        aria-label="GitHub - Vinicchii"
      >
        {/* GitHub SVG logo (simple, compact) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-gray-800"
        >
          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56 0-.27-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.52.11-3.18 0 0 .97-.31 3.18 1.19a11.07 11.07 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.5 3.17-1.19 3.17-1.19.63 1.66.23 2.88.11 3.18.74.81 1.19 1.84 1.19 3.1 0 4.45-2.71 5.42-5.29 5.71.41.35.78 1.04.78 2.1 0 1.52-.01 2.75-.01 3.12 0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
        </svg>

        <span className="text-sm font-semibold">Github - Vinicchii</span>
      </a>
    </footer>
  );
};

export default Footer;
