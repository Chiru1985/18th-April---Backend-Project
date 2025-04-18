import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import WrestlerList from './components/WrestlerList';
import WrestlerForm from './components/WrestlerForm';
import Login from './components/Login';
import {
  getWrestlers,
  createWrestler,
  updateWrestler,
  deleteWrestler
} from './api/api';

function App() {
  const [wrestlers, setWrestlers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState(localStorage.getItem('loggedIn') === 'true');
  const [formError, setFormError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const fetchData = async () => {
    try {
      const res = await getWrestlers();
      setWrestlers(res.data);
    } catch (err) {
      console.error("Failed to fetch wrestlers:", err);
    }
  };

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  const showSuccess = (message) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleSubmit = async (wrestler) => {
    try {
      if (selected) {
        await updateWrestler(selected._id, wrestler);
        showSuccess('✅ WWE Star updated successfully!');
      } else {
        await createWrestler(wrestler);
        showSuccess('✅ WWE Star added successfully!');
      }
      fetchData();
      setSelected(null);
      setShowForm(false);
      setFormError(null);
    } catch (err) {
      console.error("Submission error:", err);
      const backendMessage = err.response?.data?.error;
      setFormError(backendMessage || "Something went wrong. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteWrestler(id);
      fetchData();
      showSuccess('🗑️ WWE Star deleted successfully!');
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setUser(false);
  };

  if (!user) {
    return (
      <Login
        onLogin={() => {
          localStorage.setItem('loggedIn', 'true');
          setUser(true);
        }}
      />
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar toggleForm={() => setShowForm(!showForm)} handleLogout={handleLogout} />

      {successMessage && (
        <div
          style={{
            backgroundColor: '#4caf50',
            color: 'white',
            padding: '1rem',
            textAlign: 'center',
            borderRadius: '4px',
            margin: '1rem auto',
            maxWidth: '600px'
          }}
        >
          {successMessage}
        </div>
      )}

      {showForm && (
        <WrestlerForm
          onSubmit={handleSubmit}
          selected={selected}
          clearSelection={() => {
            setSelected(null);
            setShowForm(false);
            setFormError(null);
          }}
          error={formError}
        />
      )}

      <main className="p-6">
        <WrestlerList
          wrestlers={wrestlers}
          onEdit={(wrestler) => {
            setSelected(wrestler);
            setShowForm(true);
            setFormError(null);
          }}
          onDelete={handleDelete}
        />
      </main>
    </div>
  );
}

export default App;
