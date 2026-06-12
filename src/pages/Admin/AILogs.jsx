import React, { useState } from 'react';

const AILogs = () => {
  const [isAutoPilot, setIsAutoPilot] = useState(true);

  const logs = [
    { id: 'LOG-441', service: 'Ride-Matching', action: 'Route Optimized', target: 'RD-550', status: 'Success', time: '10:45:12' },
    { id: 'LOG-442', service: 'Fraud-Detection', action: 'Account Flagged', target: 'TX-102', status: 'Alert', time: '10:46:05' },
    { id: 'LOG-443', service: 'Price-Engine', action: 'Surge Applied', target: 'Area-Gulberg', status: 'Neutral', time: '10:48:30' },
  ];

  return (
    <div style={container}>
      {/* 🤖 AI Control Header */}
      <div style={aiHeader}>
        <div style={aiTitle}>
          <span style={pulseDot}></span>
          <span>AI CORE: ACTIVE OPERATIONS</span>
        </div>
        <div style={toggleArea}>
          <span style={{fontSize: '10px', color: '#888'}}>AI AUTOPILOT</span>
          <button onClick={() => setIsAutoPilot(!isAutoPilot)} style={switchBtn(isAutoPilot)}>
            {isAutoPilot ? 'ENABLED' : 'MANUAL'}
          </button>
        </div>
      </div>

      <div style={logGrid}>
        {/* 📟 Live Command Stream */}
        <div style={streamBox}>
          <div style={boxHeader}>SYSTEM DECISION STREAM</div>
          <div style={terminalBody}>
            {logs.map(log => (
              <div key={log.id} style={terminalLine}>
                <span style={timestamp}>[{log.time}]</span>
                <span style={serviceName}>{log.service}:</span>
                <span style={actionText}>{log.action}</span>
                <span style={statusText(log.status)}>{log.status}</span>
              </div>
            ))}
            <div style={typingEffect}>_ Monitoring incoming neural signals...</div>
          </div>
        </div>

        {/* 🧠 Service Health Stats */}
        <div style={statsSide}>
          <div style={healthCard}>
            <div style={cardLabel}>AI ACCURACY</div>
            <div style={cardValue}>99.4%</div>
            <div style={progressBar}><div style={{...progressFill, width: '99%'}}></div></div>
          </div>
          <div style={healthCard}>
            <div style={cardLabel}>AUTO-RESOLVED ISSUES</div>
            <div style={cardValue}>1,420</div>
            <div style={progressBar}><div style={{...progressFill, width: '85%', background: '#D4AF37'}}></div></div>
          </div>
        </div>
      </div>

      {/* 🔐 Data Integrity Hash */}
      <div style={footerSec}>
        <span style={{color: '#444'}}>BLOCK-HASH: 0x77AF...33E1</span>
        <span style={{color: '#D4AF37'}}>SECURE LOGGING ENABLED</span>
      </div>
    </div>
  );
};

// 💅 Cyber-Security Styled Components
const container = { padding: '20px', background: '#000', display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' };
const aiHeader = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#050505', padding: '15px 20px', borderRadius: '15px', border: '1px solid #D4AF3722' };
const aiTitle = { display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', fontSize: '13px', fontWeight: 'bold', letterSpacing: '1px' };
const pulseDot = { height: '8px', width: '8px', background: '#44ff44', borderRadius: '50%', boxShadow: '0 0 10px #44ff44' };
const toggleArea = { display: 'flex', alignItems: 'center', gap: '10px' };
const switchBtn = (active) => ({ background: active ? '#D4AF37' : '#222', border: 'none', color: '#000', padding: '5px 15px', borderRadius: '20px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer' });
const logGrid = { flex: 1, display: 'flex', gap: '20px', overflow: 'hidden' };
const streamBox = { flex: 2, background: '#050505', borderRadius: '20px', border: '1px solid #1a1a1a', display: 'flex', flexDirection: 'column', overflow: 'hidden' };
const boxHeader = { padding: '15px', background: '#0a0a0a', fontSize: '10px', color: '#D4AF37', borderBottom: '1px solid #111' };
const terminalBody = { flex: 1, padding: '20px', fontFamily: "'Courier New', monospace", fontSize: '11px', overflowY: 'auto' };
const terminalLine = { marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'center', borderBottom: '1px solid #080808', paddingBottom: '8px' };
const timestamp = { color: '#444' };
const serviceName = { color: '#D4AF37', fontWeight: 'bold' };
const actionText = { color: '#aaa', flex: 1 };
const statusText = (s) => ({ color: s === 'Alert' ? '#ff4444' : s === 'Success' ? '#44ff44' : '#888', fontWeight: 'bold', fontSize: '9px' });
const typingEffect = { color: '#D4AF37', opacity: 0.5, animation: 'blink 1s infinite' };
const statsSide = { flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' };
const healthCard = { background: '#050505', border: '1px solid #1a1a1a', padding: '20px', borderRadius: '15px' };
const cardLabel = { fontSize: '9px', color: '#555', letterSpacing: '2px', marginBottom: '10px' };
const cardValue = { fontSize: '24px', fontWeight: 'bold', color: '#fff', marginBottom: '10px' };
const progressBar = { height: '3px', background: '#111', borderRadius: '2px' };
const progressFill = { height: '100%', background: '#44ff44', borderRadius: '2px', boxShadow: '0 0 5px currentColor' };
const footerSec = { display: 'flex', justifyContent: 'space-between', padding: '10px', fontSize: '9px', fontFamily: 'monospace' };

export default AILogs;
