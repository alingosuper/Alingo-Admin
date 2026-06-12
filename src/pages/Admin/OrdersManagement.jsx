import React, { useState } from 'react';

const OrdersManagement = () => {
  const [activeTab, setActiveTab] = useState('ALL');

  const orders = [
    { id: 'ORD-7721', user: 'Asim Azhar', type: 'RIDE', amount: 'PKR 450', status: 'Completed', fraudRisk: 'Low' },
    { id: 'ORD-7722', user: 'Kamran Akmal', type: 'FOOD', amount: 'PKR 2,800', status: 'Pending', fraudRisk: 'High' },
    { id: 'ORD-7723', user: 'Sana Javed', type: 'SHOP', amount: 'PKR 12,500', status: 'Processing', fraudRisk: 'Mid' },
  ];

  return (
    <div style={container}>
      {/* 📑 Multi-Service Tabs (Filter at Source) */}
      <div style={tabBar}>
        {['ALL', 'RIDE', 'FOOD', 'SHOP', 'SERVICES'].map(tab => (
          <button 
            key={tab} 
            onClick={() => setActiveTab(tab)}
            style={tabBtn(activeTab === tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ⚡ Live Transaction Stream */}
      <div style={tableContainer}>
        <div style={tableHeader}>
          <span style={{color: '#D4AF37'}}>REAL-TIME ORDER STREAM</span>
          <div style={searchBox}>
            <input type="text" placeholder="TRACK ORDER ID..." style={miniSearch} />
          </div>
        </div>

        <table style={table}>
          <thead>
            <tr style={thRow}>
              <th style={th}>ORDER ID</th>
              <th style={th}>USER / CLIENT</th>
              <th style={th}>CATEGORY</th>
              <th style={th}>AMOUNT</th>
              <th style={th}>FRAUD CHECK</th>
              <th style={th}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} style={tr}>
                <td style={td}><b style={{color: '#D4AF37'}}>{order.id}</b></td>
                <td style={td}>{order.user}</td>
                <td style={td}><span style={typeBadge}>{order.type}</span></td>
                <td style={td}><b style={{color: '#fff'}}>{order.amount}</b></td>
                <td style={td}>
                  <span style={riskLevel(order.fraudRisk)}>{order.fraudRisk} RISK</span>
                </td>
                <td style={td}>
                  <div style={statusDot(order.status)}>{order.status}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🚨 Fraud Alert Banner (Sticky Bottom) */}
      <div style={fraudAlert}>
        <span style={{fontSize: '14px'}}>🛡️</span>
        <marquee scrollamount="3" style={{width: '100%'}}>
           SYSTEM ALERT: High-value transaction (ORD-7723) detected from unverified IP. Verification Required.
        </marquee>
      </div>
    </div>
  );
};

// 💅 Advanced Order Management Styles
const container = { padding: '20px', background: '#000', display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' };
const tabBar = { display: 'flex', gap: '10px', background: '#050505', padding: '10px', borderRadius: '15px', border: '1px solid #D4AF3722' };
const tabBtn = (active) => ({ background: active ? '#D4AF37' : 'transparent', color: active ? '#000' : '#888', border: 'none', padding: '8px 20px', borderRadius: '10px', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold', transition: '0.3s' });
const tableContainer = { background: '#050505', borderRadius: '20px', border: '1px solid #D4AF3722', overflow: 'hidden', flex: 1 };
const tableHeader = { padding: '15px 20px', borderBottom: '1px solid #D4AF3722', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', fontWeight: 'bold' };
const searchBox = { background: '#111', borderRadius: '8px', padding: '5px 10px', border: '1px solid #333' };
const miniSearch = { background: 'none', border: 'none', color: '#D4AF37', fontSize: '10px', outline: 'none', width: '150px' };
const table = { width: '100%', borderCollapse: 'collapse', textAlign: 'left' };
const thRow = { background: '#0a0a0a' };
const th = { padding: '15px', fontSize: '10px', color: '#888', letterSpacing: '1px' };
const tr = { borderBottom: '1px solid #111', transition: '0.2s hover' };
const td = { padding: '15px', fontSize: '12px', color: '#aaa' };
const typeBadge = { background: '#111', padding: '3px 8px', borderRadius: '5px', fontSize: '9px', border: '1px solid #333' };
const riskLevel = (risk) => ({ color: risk === 'High' ? '#ff4444' : risk === 'Mid' ? '#ffaa00' : '#44ff44', fontSize: '10px', fontWeight: 'bold' });
const statusDot = (status) => ({ display: 'flex', alignItems: 'center', gap: '5px', color: status === 'Completed' ? '#44ff44' : '#ffaa00' });
const fraudAlert = { background: 'rgba(255, 68, 68, 0.1)', border: '1px solid #ff444444', color: '#ff4444', padding: '10px 20px', borderRadius: '12px', display: 'flex', gap: '15px', alignItems: 'center', fontSize: '10px', fontWeight: 'bold' };

export default OrdersManagement;
