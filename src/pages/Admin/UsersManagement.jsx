import React, { useState } from 'react';

const UsersManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock Data: اصل میں یہ Firebase سے آئے گا
  const users = [
    { id: 'TX-101', name: 'Zubair Khan', role: 'Premium', status: 'Active', risk: 12, lastSeen: '2m ago' },
    { id: 'TX-102', name: 'Alina Sheikh', role: 'Standard', status: 'Blocked', risk: 85, lastSeen: '1h ago' },
    { id: 'TX-103', name: 'Omar Jamil', role: 'Vendor', status: 'Active', risk: 0, lastSeen: 'Now' },
  ];

  return (
    <div style={pageContainer}>
      {/* 🔍 Advanced Search & Filter Bar */}
      <div style={topActions}>
        <input 
          type="text" 
          placeholder="SEARCH BY ID, NAME OR DEVICE..." 
          style={searchInput}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div style={actionGroup}>
          <button style={filterBtn}>FILTER ▽</button>
          <button style={exportBtn}>EXPORT CSV</button>
        </div>
      </div>

      {/* 📊 High-Performance Data Table */}
      <div style={tableWrapper}>
        <table style={tableStyle}>
          <thead>
            <tr style={thRow}>
              <th style={th}>USER IDENTITY</th>
              <th style={th}>ACCESS ROLE</th>
              <th style={th}>RISK SCORE</th>
              <th style={th}>STATUS</th>
              <th style={th}>CONTROL</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} style={trStyle}>
                <td style={td}>
                  <div style={{color: '#fff', fontWeight: 'bold'}}>{user.name}</div>
                  <div style={{fontSize: '10px', color: '#555'}}>{user.id} • {user.lastSeen}</div>
                </td>
                <td style={td}><span style={roleBadge(user.role)}>{user.role}</span></td>
                <td style={td}>
                  <div style={riskMeter(user.risk)}>
                    <div style={riskFill(user.risk)}></div>
                  </div>
                  <span style={{fontSize: '9px', color: user.risk > 50 ? '#ff4444' : '#D4AF37'}}>{user.risk}% RISK</span>
                </td>
                <td style={td}>
                  <span style={{color: user.status === 'Active' ? '#44ff44' : '#ff4444', fontSize: '11px'}}>
                    ● {user.status}
                  </span>
                </td>
                <td style={td}>
                  <button style={manageBtn}>MANAGE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🛡️ Bulk Action Security Strip */}
      <div style={bottomSecurity}>
        <span style={{fontSize: '10px'}}>SELECT MULTIPLE USERS FOR BULK ENCRYPTION OR SUSPENSION</span>
        <button style={bulkLockBtn}>SECURE SELECTION</button>
      </div>
    </div>
  );
};

// 💅 Professional Security Styles
const pageContainer = { padding: '20px', display: 'flex', flexDirection: 'column', height: '100%', background: '#000' };
const topActions = { display: 'flex', justifyContent: 'space-between', marginBottom: '20px', gap: '15px' };
const searchInput = { flex: 1, background: '#050505', border: '1px solid #D4AF3722', padding: '12px', borderRadius: '8px', color: '#D4AF37', fontSize: '12px', outline: 'none' };
const actionGroup = { display: 'flex', gap: '10px' };
const filterBtn = { background: '#111', border: '1px solid #333', color: '#aaa', padding: '0 15px', borderRadius: '8px', cursor: 'pointer', fontSize: '11px' };
const exportBtn = { background: '#D4AF3711', border: '1px solid #D4AF37', color: '#D4AF37', padding: '0 15px', borderRadius: '8px', cursor: 'pointer', fontSize: '11px' };
const tableWrapper = { flex: 1, background: '#050505', borderRadius: '15px', border: '1px solid #D4AF3722', overflow: 'auto' };
const tableStyle = { width: '100%', borderCollapse: 'collapse', textAlign: 'left' };
const thRow = { background: '#0a0a0a', borderBottom: '1px solid #D4AF3722' };
const th = { padding: '15px', color: '#D4AF37', fontSize: '10px', letterSpacing: '1px', fontWeight: 'bold' };
const trStyle = { borderBottom: '1px solid #111', transition: '0.2s' };
const td = { padding: '15px', fontSize: '12px', color: '#aaa' };
const roleBadge = (role) => ({ background: role === 'Premium' ? '#D4AF3722' : '#222', color: role === 'Premium' ? '#D4AF37' : '#888', padding: '3px 8px', borderRadius: '4px', fontSize: '9px', fontWeight: 'bold' });
const riskMeter = (val) => ({ width: '100px', height: '4px', background: '#222', borderRadius: '2px', marginBottom: '4px' });
const riskFill = (val) => ({ width: val + '%', height: '100%', background: val > 50 ? '#ff4444' : '#D4AF37', borderRadius: '2px', boxShadow: '0 0 5px ' + (val > 50 ? '#ff4444' : '#D4AF37') });
const manageBtn = { background: 'none', border: '1px solid #333', color: '#fff', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer', fontSize: '10px' };
const bottomSecurity = { marginTop: '20px', padding: '15px', background: '#0a0a0a', borderRadius: '12px', border: '1px solid #D4AF3722', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#555' };
const bulkLockBtn = { background: '#ff4444', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '6px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer' };

export default UsersManagement;
