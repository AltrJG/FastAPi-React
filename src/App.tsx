import React, { useState, useEffect } from 'react';
import { Users, Database, Cpu } from 'lucide-react';

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8000/users");
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black cyber-grid">
      <nav className="bg-black/50 backdrop-blur-md border-b border-neon-pink/30 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold neon-text flex items-center gap-2">
            <Database className="w-8 h-8 text-neon-pink" />
            CyberCore Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <button className="cyber-border px-4 py-2 rounded flex items-center gap-2 hover:bg-neon-pink/10 transition-colors">
              <Cpu className="w-4 h-4" />
              System Status
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="cyber-border p-6 rounded-lg backdrop-blur-md bg-black/30">
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-6 h-6 text-neon-pink" />
            <h2 className="text-xl font-semibold">User Database</h2>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-pink"></div>
            </div>
          ) : (
            <div className="grid gap-4">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="cyber-border p-4 rounded bg-black/20 hover:bg-black/40 transition-colors"
                >
                  <p className="text-lg">{user.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
