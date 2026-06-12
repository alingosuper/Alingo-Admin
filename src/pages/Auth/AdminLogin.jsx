import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [adminId, setAdminId] = useState('');
  const [passkey, setPasskey] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // 🛡️ عارضی ماسٹر کیز (آپ انہیں بدل سکتے ہیں)
    const MASTER_ID = "AlinGo_Chief";
    const MASTER_KEY = "9900"; 

    if (adminId === MASTER_ID && passkey === MASTER_KEY) {
      console.log("✅ Access Granted");
      navigate('/admin/dashboard');
    } else {
      alert("❌ SECURITY ALERT: Invalid Credentials");
    }
  };

  return (
    <div style={{
      background: 'radial-gradient(circle, #1a1a1a 0%, #000 100%)',
      height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',
      color: '#D4AF37', fontFamily: 'sans-serif'
    }}>
      <div style={{
        width: '320px', padding: '40px', borderRadius: '25px',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(212, 175, 55, 0.15)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.7)', textAlign: 'center'
      }}>
        <div style={{fontSize: '45px', marginBottom: '10px', filter: 'drop-shadow(0 0 10px #D4AF37)'}}>⚜️</div>
        <h2 style={{letterSpacing: '4px', fontWeight: '300', marginBottom: '5px', textTransform: 'uppercase'}}>AlinGo Admin</h2>
        <p style={{color: '#555', fontSize: '11px', marginBottom: '30px', letterSpacing: '1px'}}>ENCRYPTED GATEWAY</p>
        
        <input 
          type="text" 
          placeholder="Admin ID" 
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
          style={inputStyle} 
        />
        <input 
          type="password" 
          placeholder="Secure Key" 
          value={passkey}
          onChange={(e) => setPasskey(e.target.value)}
          style={inputStyle} 
        />
        
        <button 
          onClick={handleLogin}
          style={goldenButtonStyle}>
          ENTER SYSTEM
        </button>

        <div style={{marginTop: '20px', fontSize: '10px', color: '#333'}}>
          SECURED BY TEZRO MOUNTAIN CORE v3.0
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%', padding: '14px', marginBottom: '15px',
  background: 'rgba(255,255,255,0.03)', border: '1px solid #222',
  borderRadius: '10px', color: '#fff', outline: 'none', boxSizing: 'border-box',
  fontSize: '14px', transition: '0.3s'
};

const goldenButtonStyle = {
  width: '100%', padding: '14px', 
  background: 'linear-gradient(45deg, #D4AF37 0%, #F5D76E 100%)', 
  color: '#000', border: 'none', borderRadius: '10px', 
  fontWeight: 'bold', cursor: 'pointer', marginTop: '10px',
  boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
  letterSpacing: '1px'
};

export default AdminLogin;
