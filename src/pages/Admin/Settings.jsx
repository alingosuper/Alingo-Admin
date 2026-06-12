import React, { useState } from 'react';

const Settings = () => {
  const [modules, setModules] = useState({
    ride: true,
    food: true,
    shop: false,
    ai: true
  });

  const toggleModule = (mod) => {
    setModules(prev => ({ ...prev, [mod]: !prev[mod] }));
  };

  return (
    <div style={container}>
      {/* ⚙️ Global Module Toggles - The "Kill Switches" */}
      <div style={sectionCard}>
        <div style={sectionHeader}>CORE MODULE CONTROL</div>
        <div style={toggleGrid}>
          {Object.keys(modules).map(mod => (
            <div key={mod} style={toggleItem}>
              <div style={{textTransform: 'uppercase', fontSize: '11px', color: '#fff'}}>{mod} SERVICE</div>
              <button 
                onClick={() => toggleModule(mod)} 
                style={switchBtn(modules[mod])}
              >
                {modules[mod] ? 'OPERATIONAL' : 'OFFLINE'}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div style={dualGrid}>
        {/* 🎨 UI & Theme Customization */}
        <div style={subCard}>
          <div style={sectionHeader}>VISUAL INTERFACE</div>
          <div style={inputGroup}>
            <label style={label}>PRIMARY THEME</label>
            <select style={selectInput}>
              <option>ELITE GOLD & BLACK</option>
              <option>HIGH CONTRAST (ACCESSIBILITY)</option>
              <option>NIGHT STEALTH</option>
            </select>
          </div>
          <div style={inputGroup}>
            <label style={label}>SYSTEM LANGUAGE</label>
            <select style={selectInput}>
              <option>ENGLISH (GLOBAL)</option>
              <option>URDU (LOCAL)</option>
            </select>
          </div>
        </div>

        {/* 🔌 API & Connectivity Gateways */}
        <div style={subCard}>
          <div style={sectionHeader}>API GATEWAYS</div>
          <div style={apiRow}>
            <span>FIREBASE CORE</span>
            <span style={statusTag('#44ff44')}>CONNECTED</span>
          </div>
          <div style={apiRow}>
            <span>MAPS ENGINE</span>
            <span style={statusTag('#D4AF37')}>OPTIMIZED</span>
          </div>
          <div style={apiRow}>
            <span>SMS GATEWAY</span>
            <span style={statusTag('#ff4444')}>OFFLINE</span>
          </div>
          <button style={refreshBtn}>RE-SYNC ALL NODES</button>
        </div>
      </div>

      {/* 💾 Permanent Save Unit */}
      <div style={saveArea}>
        <div style={{fontSize: '10px', color: '#555'}}>* CHANGES TAKE EFFECT INSTANTLY ACROSS ALL ADMIN TERMINALS.</div>
        <button style={finalSave}>COMMIT ALL CHANGES</button>
      </div>
    </div>
  );
};

// 💅 Master Precision Styles
const container = { padding: '20px', background: '#000', display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' };
const sectionCard = { background: '#050505', border: '1px solid #D4AF3722', borderRadius: '20px', padding: '25px' };
const sectionHeader = { fontSize: '12px', color: '#D4AF37', letterSpacing: '2px', fontWeight: 'bold', marginBottom: '20px', borderBottom: '1px solid #111', paddingBottom: '10px' };
const toggleGrid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' };
const toggleItem = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0a0a0a', padding: '15px', borderRadius: '12px', border: '1px solid #111' };
const switchBtn = (active) => ({ background: active ? '#D4AF37' : '#222', border: 'none', color: '#000', padding: '6px 15px', borderRadius: '20px', fontSize: '9px', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' });
const dualGrid = { display: 'flex', gap: '20px', flexWrap: 'wrap' };
const subCard = { flex: 1, minWidth: '300px', background: '#050505', border: '1px solid #1a1a1a', padding: '25px', borderRadius: '20px' };
const inputGroup = { marginBottom: '15px' };
const label = { display: 'block', fontSize: '9px', color: '#555', marginBottom: '8px', letterSpacing: '1px' };
const selectInput = { width: '100%', background: '#0a0a0a', border: '1px solid #333', color: '#D4AF37', padding: '10px', borderRadius: '8px', outline: 'none', fontSize: '11px' };
const apiRow = { display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #080808', fontSize: '11px', color: '#aaa' };
const statusTag = (col) => ({ fontSize: '8px', color: col, border: '1px solid ' + col + '44', padding: '2px 8px', borderRadius: '4px' });
const refreshBtn = { width: '100%', marginTop: '15px', background: 'none', border: '1px solid #333', color: '#888', padding: '10px', borderRadius: '8px', cursor: 'pointer', fontSize: '10px' };
const saveArea = { marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', background: '#050505', borderRadius: '15px', border: '1px solid #D4AF3722' };
const finalSave = { background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)', color: '#000', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '11px' };

export default Settings;
