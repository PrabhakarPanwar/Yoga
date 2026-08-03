import React, { useEffect, useState } from 'react';
import api from '../api/axios';

const AdminDashboard = () => {
  const name = localStorage.getItem('name') || 'Admin';
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('/users')
      .then((res) => {
        if (res.data.success) setUsers(res.data.users);
      })
      .catch((err) => setError(err.response?.data?.message || 'Failed to load users.'))
      .finally(() => setLoadingUsers(false));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Welcome back, {name}!</h1>
        <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold">
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 bg-slate-100 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-2">Total Classes</h2>
          <p className="text-3xl text-blue-600 font-extrabold">12</p>
        </div>
        <div className="p-6 bg-slate-100 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-2">Blog Posts</h2>
          <p className="text-3xl text-green-600 font-extrabold">5</p>
        </div>
        <div className="p-6 bg-slate-100 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-2">Registered Users</h2>
          <p className="text-3xl text-purple-600 font-extrabold">{users.length}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <h2 className="text-xl font-bold p-6 pb-4">Registered Users</h2>

        {loadingUsers && <p className="px-6 pb-6 text-slate-500">Loading users...</p>}
        {error && <p className="px-6 pb-6 text-red-600">{error}</p>}

        {!loadingUsers && !error && (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-200 text-sm text-slate-500">
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Verified</th>
                <th className="p-4">Joined</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr><td colSpan={4} className="p-6 text-center text-slate-400">No users have registered yet.</td></tr>
              ) : (
                users.map((u) => (
                  <tr key={u._id || u.email} className="border-b border-slate-100">
                    <td className="p-4">{u.name}</td>
                    <td className="p-4">{u.email}</td>
                    <td className="p-4">
                      {u.isVerified
                        ? <span className="text-green-600 font-semibold">Verified</span>
                        : <span className="text-amber-600 font-semibold">Not verified</span>}
                    </td>
                    <td className="p-4 text-sm text-slate-500">
                      {new Date(u.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;