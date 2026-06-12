import React, { useState } from 'react';

const FleetManagement = () => {
  const activeRides = [
    { id: 'RD-550', driver: 'Zahid Ahmed', user: 'Bilal', route: 'Gulberg ➔ DHA', status: 'In-Progress', speed: '45 km/h' },
    { id: 'RD-551', driver: 'Sajid Ali', user: 'Maira', route: 'Johar Town ➔ Airport', status: 'Arrived', speed: '0 km/h' },
    { id: 'RD-552', driver: 'Noman Khan', user: 'Usman', route: 'Model Town ➔ Liberty', status: 'Delayed', speed: '12 km/h' },
  ];

  return (
    <div style={container}>
      {/* 🏎️ Fleet Status Bar - Instant Overview */}
      <div style={fleetHeader}>
        <div style={statusItem}>LIVE TAXIS: <span style={goldText}>84</span></div>
        <div style={statusItem}>BIKES: <span style={goldText}>156</span></div>
        <div style={statusItem}>EMERGENCY ALERTS: <span style={{color: '#ff4444'}}>02</span></div>
      </div>

      <div style={contentGrid}>
        {/* 📋 Active Trips List (Scrollable & Lightweight) */}
        <div style={listSide}>
          <div style={listHeader}>ACTIVE EXPEDITIONS</div>
          <div style={scrollList}>
            {activeRides.map(ride => (
              <div key={ride.id} style={rideCard(ride.status)}>
                <div style={cardTop}>
                  <b style={{color: '#fff'}}>{ride.driver}</b>
                  <span style={statusTag(ride.status)}>{ride.status}</span>
                </div>
                <div style={routeText}>{ride.route}</div>
                <div style={cardBottom}>
                  <span>ID: {ride.id}</span>
                  <span style={{color: '#D4AF37'}}>{ride.speed}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🗺️ Precision Tracking Map (Placeholder for Performance) */}
        <div style={mapSide}>
          <div style={mapOverlay}>
            <div style={overlayText}>ENCRYPTED GPS FEED ACTIVE</div>
            <div style={signalDot}></div>
          </div>
          {/* یہاں میپ لوڈ ہوگا لیکن صرف منتخب رائیڈ کے لیے */}
          <div style={mapPlaceholder}>
            SELECT A RIDER TO INITIATE LIVE SATELLITE TRACKING
          </div>
        </div>
      </div>

      {/* ⚠️ Driver Safety Protocol */}
      <div style={safetyStrip}>
        <span style={{color: '#D4AF37'}}>🛡️ SAFETY PROTOCOL:</span> 
        SOS signals are routed directly to the nearest security node.
      </div>
    </div>
  );
};

// 💅 High-Velocity Transport Styles
const container = { padding: '20px', background: '#000', display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' };
const fleetHeader = { display: 'flex', gap: '30px', background: '#050505', padding: '15px 25px', borderRadius: '15px', border: '1px solid #D4AF3722' };
const statusItem = { fontSize: '10px', color: '#888', letterSpacing: '1px', fontWeight: 'bold' };
const goldText = { color: '#D4AF37', marginLeft: '5px' };
const contentGrid = { flex: 1, display: 'flex', gap: '20px', overflow: 'hidden' };
const listSide = { width: '300px', display: 'flex', flexDirection: 'column', gap: '10px' };
const listHeader = { fontSize: '11px', color: '#D4AF37', letterSpacing: '2px', padding: '5px' };
const scrollList = { flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' };
const rideCard = (status) => ({ background: '#080808', borderLeft: '3px solid ' + (status === 'Delayed' ? '#ff4444' : '#D4AF37'), padding: '15px', borderRadius: '8px', cursor: 'pointer' });
const cardTop = { display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '12px' };
const statusTag = (s) => ({ fontSize: '9px', padding: '2px 6px', borderRadius: '4px', background: s === 'Delayed' ? '#ff444422' : '#D4AF3722', color: s === 'Delayed' ? '#ff4444' : '#D4AF37' });
const routeText = { fontSize: '11px', color: '#666', marginBottom: '8px' };
const cardBottom = { display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#444' };
const mapSide = { flex: 1, background: '#050505', borderRadius: '20px', border: '1px solid #333', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' };
const mapPlaceholder = { color: '#333', fontSize: '10px', letterSpacing: '2px', textAlign: 'center', maxWidth: '200px' };
const mapOverlay = { position: 'absolute', top: '20px', right: '20px', display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(0,0,0,0.7)', padding: '5px 15px', borderRadius: '20px', border: '1px solid #D4AF3744' };
const overlayText = { fontSize: '9px', color: '#D4AF37' };
const signalDot = { height: '6px', width: '6px', background: '#44ff44', borderRadius: '50%', animation: 'pulse 1.5s infinite' };
const safetyStrip = { padding: '12px', background: '#050505', borderRadius: '10px', fontSize: '10px', color: '#555', border: '1px solid #111' };

export default FleetManagement;
