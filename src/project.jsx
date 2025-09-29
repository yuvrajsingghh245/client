import React from 'react';

const projects = [
  {
    id: 1,
    title: 'NewsSphere Web App',
    description: 'A Flask + Bootstrap news platform where users can personalize categories, bookmark, like, and comment on articles.',
    role: 'Full Stack Developer',
    outcome: 'Built an interactive news app with user authentication, dark mode, notifications, and DeepSeek-powered chatbot integration.',
  },
  {
    id: 2,
    title: 'Samba File Sharing Project',
    description: 'A group project using VirtualBox to set up FTP/SMB file sharing between Linux and Windows systems.',
    role: 'Team Lead & System Administrator',
    outcome: 'Configured Samba server with user/group permissions, quotas, ACLs, recycle bin setup, and bidirectional file transfer.',
  },
  {
    id: 3,
    title: 'SQL E-commerce Database',
    description: 'Designed and implemented a relational database system for an online store with multiple business requirements.',
    role: 'Database Designer',
    outcome: 'Created normalized schema, added constraints, inserted sample data, and wrote 10+ SQL queries to fulfill business needs.',
  },
];

export default function Projects() {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.id}
            className="bg-white shadow-md rounded-2xl p-6 text-center"
          >
            <br/>
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600 mb-2">{p.description}</p>
            <p className="text-gray-800">
              <span className="font-semibold">Role:</span> {p.role}
            </p>
            <p className="text-gray-800">
              <span className="font-semibold">Outcome:</span> {p.outcome}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

