import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-8">
      <main className="flex flex-col w-full max-w-3xl items-center sm:items-start p-10 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800">
        
        {/* Header Section */}
        <div className="flex flex-col items-center sm:items-start gap-2 mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
            Muhammad Farhan Fahraby
          </h1>
          <p className="text-xl font-medium text-blue-600 dark:text-blue-400">
            NIM: 2341720188
          </p>
        </div>

        {/* Tech Interests Section */}
        <div className="flex flex-col gap-4 w-full mb-10">
          <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">
            Tech Interests
          </h2>
          <div className="flex flex-wrap gap-2">
            {["Full-stack Web (React/Next.js)", "Mobile Development (Flutter)", "Internet of Things (IoT)"].map((interest) => (
              <span 
                key={interest} 
                className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm font-medium border border-zinc-200 dark:border-zinc-700"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="flex flex-col gap-4 w-full mb-10">
          <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">
            Featured Projects
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
              <h3 className="font-bold text-black dark:text-white">Rukun App</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Village marketplace & community mobile app.</p>
            </li>
            <li className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg">
              <h3 className="font-bold text-black dark:text-white">SkyWatch Analytics</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Smart Air Quality Monitoring System (IoT & Big Data).</p>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 w-full sm:flex-row mt-4">
          <a
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-black text-white px-8 text-sm font-bold transition-transform hover:scale-105 dark:bg-white dark:text-black"
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
          <a
            className="flex h-12 items-center justify-center rounded-full border border-zinc-300 px-8 text-sm font-bold transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 dark:text-white"
            href="mailto:your-email@example.com"
          >
            Contact Me
          </a>
        </div>

      </main>
      
      <footer className="mt-8 text-zinc-500 text-xs">
        Built with Next.js & Docker CI/CD Pipeline
      </footer>
    </div>
  );
}