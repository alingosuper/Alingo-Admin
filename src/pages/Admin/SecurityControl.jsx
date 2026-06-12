import React, { useState } from 'react';

const SecurityControl = () => {
  const activeSessions = [
    { id: 'SES-99', user: 'Super_Admin', device: 'Linux-Termux', ip: '182.164.x.x', status: 'Secure' },
    { id: 'SES-102', user: 'Mod_Zubair', device: 'Windows-PC', ip: '39.44.x.x', status: 'Verified' },
  ];

  return (
    <div style={container}>
      {/* 🛡️ Firewall Status & Global Kill-Switch */}
      <div style={firewallHeader}>
        <div style={securityStatus}>
          <div style={shieldGlow}>🛡️</div>
          <div>
            <div style={{fontSize: '14px', fontWeight: 'bold'}}>FIREWALL: ACTIVE</div>
            <div style={{fontSize: '9px', color: '#44ff44'}}>THREAT LEVEL: ZERO</div>
          </div>
        </div>
        <button style={killSwitch}>EMERGENCY LOCKDOWN</button>
      </div>

      <div style={securityGrid}>
        {/* 🔑 Access Control & IP Whitelist */}
        <div style={controlBox}>
          <div style={boxTitle}>APPROVED ACCESS NODES</div>
          <div style={ipList}>
            <div style={ipItem}><span>192.168.1.1 (Home Office)</span> <span style={tag}>STATIC</span></div>
            <div style={ipItem}><span>110.39.x.x (Data Center)</span> <span style={tag}>ENCRYPTED</span></div>
          </div>
          <button style={addNodeBtn}>+ AUTHORIZE NEW IP</button>
        </div>

        {/* 📱 Live Session Monitor */}
        <div style={sessionBox}>
          <div style={boxTitle}>ACTIVE SESSIONS (REAL-TIME)</div>
          <div style={sessionList}>
            {activeSessions.map(session => (
              <div key={session.id} style={sessionCard}>
                <div style={sessionInfo}>
                  <b style={{color: '#fff'}}>{session.user}</b>
                  <span style={{fontSize: '10px', color: '#555'}}>{session.device} | {session.ip}</span>
                </div>
                <button style={terminateBtn}>REVOKE</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ⚠️ Intrusion Prevention Note */}
      <div style={warningStrip}>
        <span style={alertPulse}></span>
        NOTICE: Multi-Factor Authentication (MFA) is mandatory for all administrative changes.
      </div>
    </div>
  );
};

// 💅 High-Security Interface Styles
const container = { padding: '20px', background: '#000', display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' };
const firewallHeader = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#080808', padding: '20px', borderRadius: '15px', border: '1px solid #ff444433' };
const securityStatus = { display: 'flex', alignItems: 'center', gap: '15px' };
const shieldGlow = { fontSize: '24px', textShadow: '0 0 15px #D4AF37' };
const killSwitch = { background: '#ff4444', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 0 20px rgba(255,68,68,0.2)' };
const securityGrid = { flex: 1, display: 'flex', gap: '20px' };
const controlBox = { flex: 1, background: '#050505', border: '1px solid #1a1a1a', borderRadius: '20px', padding: '20px', display: 'flex', flexDirection: 'column' };
const boxTitle = { fontSize: '11px', color: '#D4AF37', letterSpacing: '2px', marginBottom: '20px', fontWeight: 'bold' };
const ipList = { flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' };
const ipItem = { background: '#0a0a0a', padding: '12px', borderRadius: '8px', border: '1px solid #111', display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#aaa' };
const tag = { fontSize: '8px', color: '#D4AF37', border: '1px solid #D4AF3744', padding: '2px 6px', borderRadius: '4px' };
const addNodeBtn = { marginTop: '15px', background: 'none', border: '1px dashed #333', color: '#888', padding: '10px', borderRadius: '8px', cursor: 'pointer', fontSize: '10px' };
const sessionBox = { flex: 1, background: '#050505', border: '1px solid #1a1a1a', borderRadius: '20px', padding: '20px' };
const sessionList = { display: 'flex', flexDirection: 'column', gap: '15px' };
const sessionCard = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0a0a0a', padding: '15px', borderRadius: '12px', border: '1px solid #111' };
const sessionInfo = { display: 'flex', flexDirection: 'column', gap: '4px' };
const terminateBtn = { background: 'none', border: '1px solid #ff444444', color: '#ff4444', padding: '5px 10px', borderRadius: '5px', fontSize: '9px', cursor: 'pointer' };
const warningStrip = { padding: '12px', background: '#110000', border: '1px solid #ff444422', borderRadius: '10px', fontSize: '10px', color: '#ff4444', display: 'flex', alignItems: 'center', gap: '10px' };
const alertPulse = { height: '8px', width: '8px', background: '#ff4444', borderRadius: '50%', animation: 'pulse 1s infinite' };

export default SecurityControl;
