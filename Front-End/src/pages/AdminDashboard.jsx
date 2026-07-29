import React from 'react';

const AdminDashboard = () => {
  const name = localStorage.getItem('name') || 'Admin';

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Welcome back, {name}!</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-slate-100 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-2">Total Classes</h2>
          <p className="text-3xl text-blue-600 font-extrabold">12</p>
        </div>
        <div className="p-6 bg-slate-100 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-2">Blog Posts</h2>
          <p className="text-3xl text-green-600 font-extrabold">5</p>
        </div>
        <div className="p-6 bg-slate-100 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-2">Active Users</h2>
          <p className="text-3xl text-purple-600 font-extrabold">24</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;