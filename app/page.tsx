export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-10 max-w-md w-full text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Final Project</h1>
        <p className="text-lg text-gray-600 mb-6">Group: IT360</p>

        <div className="flex flex-col gap-4">
          {/* GitHub Actions button */}
          <button className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Trigger GitHub :)
          </button>

          {/* Old NFS button */}
          <a 
            href="http://34.68.131.191/nfs/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Open NFS Web Interface (Old)
          </a>

          {/* Cloud Run NFS button */}
          <a 
            href="https://nfs-web-956456382165.us-central1.run.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Open NFS Web Interface (Cloud Run)
          </a>
        </div>
      </div>
    </main>
  );
}

