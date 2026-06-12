import React, { useState } from 'react';

const ProfileAccount = () => {
  const [mfaEnabled, setMfaEnabled] = useState(true);

  const adminActivity = [
    { action: 'Updated System Settings', time: '2h ago', device: 'Termux-Linux', status: 'Verified' },
    { action: 'Authorized Vendor VN-88', time: '5h ago', device: 'Termux-Linux', status: 'Verified' },
    { action: 'Login Attempt', time: 'Yesterday', device: 'Unknown-IP', status: 'Blocked' },
  ];

  return (
    <div style={container}>
      <div style={profileGrid}>
        {/* 👤 Admin Identity Card */}
        <div style={infoCard}>
          <div style={avatarSection}>
            <div style={avatarGlow}>
              <div style={avatar}>AD</div>
            </div>
            <div style={{marginTop: '15px'}}>
              <div style={adminName}>SUPER ADMIN <span style={goldText}>ELITE</span></div>
              <div style={adminEmail}>admin@AlinGo.com</div>
            </div>
          </div>
          <div style={badgeArea}>
            <span style={roleBadge}>LEVEL 7 ACCESS</span>
            <span style={roleBadge}>ROOT ENCRYPTION</span>
          </div>
        </div>

        {/* 🔐 Security & MFA Control */}
        <div style={securityCard}>
          <div style={cardHeader}>SECURITY GATEKEEPER</div>
          <div style={settingRow}>
            <div>
              <div style={rowTitle}>TWO-FACTOR AUTHENTICATION</div>
              <div style={rowDesc}>Extra layer of protection via Authenticator App</div>
            </div>
            <button onClick={() => setMfaEnabled(!mfaEnabled)} style={mfaBtn(mfaEnabled)}>
              {mfaEnabled ? 'ACTIVE' : 'INACTIVE'}
            </button>
          </div>
          <div style={settingRow}>
            <div>
              <div style={rowTitle}>PASSWORD ENCRYPTION</div>
              <div style={rowDesc}>Last changed: 12 days ago</div>
            </div>
            <button style={actionBtn}>CHANGE</button>
          </div>
        </div>
      </div>

      {/* 📜 Personal Audit Trail (Lightweight List) */}
      <div style={auditSection}>
        <div style={cardHeader}>PERSONAL ACTIVITY LOG (ENCRYPTED)</div>
        <div style={logList}>
          {adminActivity.map((log, i) => (
            <div key={i} style={logItem}>
              <div style={{display:'flex', gap:'15px', alignItems:'center'}}>
                <span style={statusDot(log.status)}></span>
                <div>
                  <div style={{fontSize: '12px', color: '#fff'}}>{log.action}</div>
                  <div style={{fontSize: '10px', color: '#444'}}>{log.device} • {log.time}</div>
                </div>
              </div>
              <span style={statusTag(log.status)}>{log.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 🚪 Secure Exit Area */}
      <div style={exitArea}>
        <span style={{fontSize: '10px', color: '#333'}}>* CLEARING SESSION DATA ON LOGOUT IS MANDATORY.</span>
        <button style={logoutBtn}>TERMINATE SESSION</button>
      </div>
    </div>
  );
};

// 💅 Elite Identity Styles
const container = { padding: '20px', background: '#000', display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' };
const profileGrid = { display: 'flex', gap: '20px', flexWrap: 'wrap' };
const infoCard = { flex: 1, minWidth: '300px', background: '#050505', border: '1px solid #D4AF3722', borderRadius: '20px', padding: '30px', textAlign: 'center' };
const avatarGlow = { width: '100px', height: '100px', borderRadius: '50%', background: 'linear-gradient(45deg, #D4AF37, #000)', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 20px rgba(212,175,55,0.2)' };
const avatar = { width: '90px', height: '90px', borderRadius: '50%', background: '#000', color: '#D4AF37', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '24px', fontWeight: 'bold', border: '1px solid #D4AF3744' };
const adminName = { fontSize: '18px', fontWeight: 'bold', letterSpacing: '1px', color: '#fff' };
const goldText = { color: '#D4AF37', fontSize: '12px' };
const adminEmail = { fontSize: '11px', color: '#555', marginTop: '5px' };
const badgeArea = { display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' };
const roleBadge = { fontSize: '8px', color: '#D4AF37', border: '1px solid #D4AF3744', padding: '4px 10px', borderRadius: '20px' };
const securityCard = { flex: 1, minWidth: '300px', background: '#050505', border: '1px solid #1a1a1a', borderRadius: '20px', padding: '25px' };
const cardHeader = { fontSize: '11px', color: '#D4AF37', letterSpacing: '2px', fontWeight: 'bold', marginBottom: '20px' };
const settingRow = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', borderBottom: '1px solid #080808' };
const rowTitle = { fontSize: '12px', color: '#fff' };
const rowDesc = { fontSize: '10px', color: '#444' };
const mfaBtn = (active) => ({ background: active ? '#44ff4422' : '#ff444422', color: active ? '#44ff44' : '#ff4444', border: '1px solid currentColor', padding: '5px 15px', borderRadius: '6px', fontSize: '10px', cursor: 'pointer' });
const actionBtn = { background: '#111', border: '1px solid #333', color: '#fff', padding: '5px 15px', borderRadius: '6px', fontSize: '10px', cursor: 'pointer' };
const auditSection = { background: '#050505', borderRadius: '20px', border: '1px solid #1a1a1a', padding: '25px' };
const logList = { display: 'flex', flexDirection: 'column', gap: '10px' };
const logItem = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: '#0a0a0a', borderRadius: '10px' };
const statusDot = (s) => ({ height: '6px', width: '6px', borderRadius: '50%', background: s === 'Blocked' ? '#ff4444' : '#44ff44' });
const statusTag = (s) => ({ fontSize: '9px', color: s === 'Blocked' ? '#ff4444' : '#44ff44' });
const exitArea = { marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', borderTop: '1px solid #111' };
const logoutBtn = { background: '#ff4444', color: '#fff', border: 'none', padding: '10px 25px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '11px' };

export default ProfileAccount;
