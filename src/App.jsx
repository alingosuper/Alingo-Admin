import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// 🚀 Lazy Loading for Optimal Server Performance
const WarRoom = lazy(() => import('./pages/Admin/WarRoom'));
const Users = lazy(() => import('./pages/Admin/UsersManagement'));
const Vendors = lazy(() => import('./pages/Admin/VendorsManagement'));
const Orders = lazy(() => import('./pages/Admin/OrdersManagement'));
const Wallet = lazy(() => import('./pages/Admin/WalletManagement'));
const Fleet = lazy(() => import('./pages/Admin/FleetManagement'));
const AILogs = lazy(() => import('./pages/Admin/AILogs'));
const Security = lazy(() => import('./pages/Admin/SecurityControl'));
const Analytics = lazy(() => import('./pages/Admin/ReportsAnalytics'));
const Settings = lazy(() => import('./pages/Admin/Settings'));
const Profile = lazy(() => import('./pages/Admin/ProfileAccount'));

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <div style={layout}>
        {/* 📟 Elite Sidebar Integration */}
        <aside style={sidebarStyle(isSidebarOpen)}>
          <div style={logoSection}>
            <div style={logoIcon}>⚜️</div>
            <div style={logoText}>TEZRO <span style={{color:'#D4AF37'}}>ELITE</span></div>
          </div>
          
          <nav style={navContainer}>
            <Link to="/" style={navItem}>🏯 WAR ROOM</Link>
            <Link to="/users" style={navItem}>👥 USERS</Link>
            <Link to="/vendors" style={navItem}>🏪 VENDORS</Link>
            <Link to="/orders" style={navItem}>📦 ORDERS</Link>
            <Link to="/wallet" style={navItem}>💳 WALLET</Link>
            <Link to="/fleet" style={navItem}>🏎️ FLEET</Link>
            <Link to="/ai-logs" style={navItem}>🧠 AI LOGS</Link>
            <Link to="/security" style={navItem}>🛡️ SECURITY</Link>
            <Link to="/analytics" style={navItem}>📊 ANALYTICS</Link>
            <Link to="/settings" style={navItem}>⚙️ SETTINGS</Link>
            <Link to="/profile" style={navItem}>👤 PROFILE</Link>
          </nav>

          <div style={versionTag}>v1.0.2-SECURE</div>
        </aside>

        {/* 🖥️ Main Viewport */}
        <main style={mainViewport}>
          <Suspense fallback={<div style={loaderStyle}>SYNCHRONIZING SECURE NODE...</div>}>
            <Routes>
              <Route path="/" element={<WarRoom />} />
              <Route path="/users" element={<Users />} />
              <Route path="/vendors" element={<Vendors />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/fleet" element={<Fleet />} />
              <Route path="/ai-logs" element={<AILogs />} />
              <Route path="/security" element={<Security />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

// 💅 Master High-Performance Styles
const layout = { display: 'flex', height: '100vh', background: '#000', overflow: 'hidden', fontFamily: 'sans-serif' };
const sidebarStyle = (open) => ({ width: open ? '260px' : '0', background: '#050505', borderRight: '1px solid #D4AF3722', display: 'flex', flexDirection: 'column', transition: '0.3s' });
const logoSection = { padding: '30px 20px', textAlign: 'center', borderBottom: '1px solid #111' };
const logoIcon = { fontSize: '30px', filter: 'drop-shadow(0 0 5px #D4AF37)' };
const logoText = { fontSize: '18px', fontWeight: 'bold', color: '#fff', letterSpacing: '2px', marginTop: '10px' };
const navContainer = { flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' };
const navItem = { color: '#888', textDecoration: 'none', fontSize: '11px', padding: '12px', borderRadius: '10px', border: '1px solid transparent', transition: '0.2s' };
const mainViewport = { flex: 1, overflowY: 'auto', position: 'relative', background: '#000' };
const loaderStyle = { height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#D4AF37', fontSize: '10px', letterSpacing: '4px' };
const versionTag = { padding: '20px', fontSize: '9px', color: '#333', textAlign: 'center' };

export default App;
