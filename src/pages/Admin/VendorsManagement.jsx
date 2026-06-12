import React, { useState } from 'react';

const VendorsManagement = () => {
  const vendors = [
    { id: 'VN-88', name: 'Elite Mart', category: 'Grocery', rating: 4.8, status: 'Active', balance: 'PKR 45,000' },
    { id: 'VN-92', name: 'Fast Wheels', category: 'Transport', rating: 3.2, status: 'Under Review', balance: 'PKR 12,200' },
    { id: 'VN-45', name: 'Tech Zone', category: 'Electronics', rating: 4.9, status: 'Active', balance: 'PKR 890,000' },
  ];

  return (
    <div style={container}>
      {/* 🚀 Vendor Insight Cards (Lightweight Grid) */}
      <div style={insightGrid}>
        <div style={card}>
          <div style={cardLabel}>TOTAL VENDORS</div>
          <div style={cardValue}>1,240</div>
        </div>
        <div style={card}>
          <div style={cardLabel}>PENDING APPROVALS</div>
          <div style={{...cardValue, color: '#D4AF37'}}>14</div>
        </div>
        <div style={card}>
          <div style={cardLabel}>SYSTEM REVENUE</div>
          <div style={cardValue}>PKR 2.4M</div>
        </div>
      </div>

      {/* 📑 Vendor Directory */}
      <div style={tableArea}>
        <div style={tableHeader}>
          <span style={{color: '#D4AF37'}}>VENDOR DIRECTORY</span>
          <button style={addBtn}>+ REGISTER NEW VENDOR</button>
        </div>
        
        <table style={table}>
          <thead>
            <tr style={thRow}>
              <th style={th}>PARTNER INFO</th>
              <th style={th}>CATEGORY</th>
              <th style={th}>PERFORMANCE</th>
              <th style={th}>WALLET BALANCE</th>
              <th style={th}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map(v => (
              <tr key={v.id} style={tr}>
                <td style={td}>
                  <div style={{color: '#fff'}}>{v.name}</div>
                  <div style={{fontSize: '10px', color: '#555'}}>{v.id}</div>
                </td>
                <td style={td}>{v.category}</td>
                <td style={td}>
                  <div style={starContainer}>
                    <span style={{color: v.rating < 4 ? '#ff4444' : '#D4AF37'}}>★ {v.rating}</span>
                    <div style={ratingBar(v.rating)}></div>
                  </div>
                </td>
                <td style={td}><span style={{color: '#44ff44'}}>{v.balance}</span></td>
                <td style={td}>
                  <div style={{display:'flex', gap:'5px'}}>
                    <button style={iconBtn}>👁️</button>
                    <button style={{...iconBtn, color: '#ff4444'}}>🛑</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🛡️ Automated Shield Note */}
      <div style={securityNote}>
        <span style={shieldIcon}>🛡️</span>
        AI-AUTO-BOT: Monitoring vendor ratings. Vendors below 3.0 stars are flagged for automatic suspension.
      </div>
    </div>
  );
};

// 💅 High-End Modular Styles
const container = { padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px', background: '#000', minHeight: '100%' };
const insightGrid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' };
const card = { background: '#050505', border: '1px solid #D4AF3722', padding: '20px', borderRadius: '15px', textAlign: 'center' };
const cardLabel = { fontSize: '10px', color: '#555', letterSpacing: '2px', marginBottom: '10px' };
const cardValue = { fontSize: '20px', fontWeight: 'bold', color: '#fff' };
const tableArea = { background: '#050505', borderRadius: '20px', border: '1px solid #D4AF3722', overflow: 'hidden' };
const tableHeader = { padding: '20px', borderBottom: '1px solid #D4AF3722', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', fontWeight: 'bold' };
const addBtn = { background: '#D4AF37', color: '#000', border: 'none', padding: '8px 15px', borderRadius: '8px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer' };
const table = { width: '100%', borderCollapse: 'collapse', textAlign: 'left' };
const thRow = { background: '#0a0a0a' };
const th = { padding: '15px', fontSize: '10px', color: '#D4AF37', letterSpacing: '1px' };
const tr = { borderBottom: '1px solid #111' };
const td = { padding: '15px', fontSize: '12px', color: '#aaa' };
const starContainer = { display: 'flex', flexDirection: 'column', gap: '5px' };
const ratingBar = (r) => ({ height: '3px', width: (r*20) + '%', background: r < 4 ? '#ff4444' : '#D4AF37', borderRadius: '2px' });
const iconBtn = { background: '#111', border: '1px solid #333', color: '#D4AF37', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' };
const securityNote = { padding: '15px', background: 'rgba(212,175,55,0.05)', border: '1px dashed #D4AF3744', borderRadius: '12px', fontSize: '10px', color: '#888', display: 'flex', alignItems: 'center', gap: '10px' };
const shieldIcon = { fontSize: '16px' };

export default VendorsManagement;
