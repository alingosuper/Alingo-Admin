import React, { useState } from 'react';

const ShopManagement = () => {
  const [activeTab, setActiveTab] = useState('FOOD');

  const products = [
    { id: 'PR-11', name: 'Zinger Burger', shop: 'KFC Drive', stock: 45, price: 'PKR 550', status: 'Available' },
    { id: 'PR-12', name: 'iPhone 15 Pro', shop: 'Apple Store', stock: 0, price: 'PKR 450,000', status: 'Out of Stock' },
    { id: 'PR-13', name: 'Organic Milk', shop: 'Pure Dairy', stock: 12, price: 'PKR 210', status: 'Low Stock' },
  ];

  return (
    <div style={container}>
      {/* 🍱 Category Switcher - Reduces Memory Load */}
      <div style={categoryBar}>
        <button onClick={() => setActiveTab('FOOD')} style={tabBtn(activeTab === 'FOOD')}>🍔 FOOD & RESTAURANTS</button>
        <button onClick={() => setActiveTab('SHOP')} style={tabBtn(activeTab === 'SHOP')}>🛍️ RETAIL & SHOPS</button>
      </div>

      <div style={mainContent}>
        {/* ⚡ Quick Inventory Alerts */}
        <div style={alertSection}>
          <div style={alertCard}>
            <span style={alertIcon}>🚨</span>
            <div>
              <div style={alertTitle}>STOCK CRITICAL</div>
              <div style={alertDesc}>5 Items in "Pure Dairy" are below threshold.</div>
            </div>
          </div>
        </div>

        {/* 📋 Product Grid */}
        <div style={gridArea}>
          <div style={gridHeader}>
            <span>{activeTab} INVENTORY LIST</span>
            <input type="text" placeholder="QUICK SEARCH ITEM..." style={miniSearch} />
          </div>

          <div style={itemGrid}>
            {products.map(item => (
              <div key={item.id} style={productCard}>
                <div style={cardHeader}>
                  <span style={stockBadge(item.status)}>{item.status}</span>
                  <b style={{color: '#D4AF37'}}>{item.price}</b>
                </div>
                <div style={itemName}>{item.name}</div>
                <div style={shopName}>🏪 {item.shop}</div>
                <div style={cardFooter}>
                  <span style={{fontSize: '10px'}}>STOCK: {item.stock}</span>
                  <button style={editBtn}>EDIT</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🛡️ Menu Protection Protocol */}
      <div style={footerSecurity}>
        <span style={{color: '#D4AF37'}}>🛡️ AUTO-LOG:</span> Any price change above 20% triggers a manual security review.
      </div>
    </div>
  );
};

// 💅 High-Efficiency Modular Styles
const container = { padding: '20px', background: '#000', display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' };
const categoryBar = { display: 'flex', gap: '1px', background: '#111', borderRadius: '12px', overflow: 'hidden', border: '1px solid #D4AF3722' };
const tabBtn = (active) => ({ flex: 1, padding: '15px', border: 'none', background: active ? '#D4AF37' : 'transparent', color: active ? '#000' : '#888', cursor: 'pointer', fontWeight: 'bold', fontSize: '11px', transition: '0.3s' });
const mainContent = { flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' };
const alertSection = { background: 'rgba(255, 68, 68, 0.05)', border: '1px solid #ff444422', borderRadius: '12px', padding: '15px' };
const alertCard = { display: 'flex', alignItems: 'center', gap: '15px' };
const alertIcon = { fontSize: '20px', animation: 'pulse 1s infinite' };
const alertTitle = { fontSize: '12px', fontWeight: 'bold', color: '#ff4444' };
const alertDesc = { fontSize: '10px', color: '#aaa' };
const gridArea = { flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' };
const gridHeader = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', color: '#D4AF37', letterSpacing: '1px' };
const miniSearch = { background: '#050505', border: '1px solid #333', padding: '8px 15px', borderRadius: '8px', color: '#fff', fontSize: '10px', width: '200px' };
const itemGrid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '15px' };
const productCard = { background: '#050505', border: '1px solid #1a1a1a', padding: '15px', borderRadius: '15px', display: 'flex', flexDirection: 'column', gap: '10px' };
const cardHeader = { display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const stockBadge = (s) => ({ fontSize: '8px', padding: '2px 6px', borderRadius: '4px', background: s === 'Out of Stock' ? '#ff444422' : '#44ff4422', color: s === 'Out of Stock' ? '#ff4444' : '#44ff44', border: '1px solid currentColor' });
const itemName = { color: '#fff', fontWeight: 'bold', fontSize: '14px' };
const shopName = { fontSize: '10px', color: '#555' };
const cardFooter = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px', borderTop: '1px solid #111', paddingTop: '10px', color: '#888' };
const editBtn = { background: 'none', border: '1px solid #D4AF37', color: '#D4AF37', padding: '4px 12px', borderRadius: '6px', fontSize: '10px', cursor: 'pointer' };
const footerSecurity = { padding: '12px', background: '#050505', borderRadius: '10px', fontSize: '10px', color: '#444', border: '1px solid #111' };

export default ShopManagement;
