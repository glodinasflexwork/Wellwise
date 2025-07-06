'use client';

import React from 'react';

export default function InvestorsPage() {
  return (
    <>
      <style jsx>{`
        .container {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          background: #fff;
          min-height: 100vh;
        }
        
        .header {
          background: linear-gradient(135deg, #2c5aa0 0%, #1e3a8a 100%);
          color: white;
          padding: 60px 40px;
          border-radius: 16px;
          margin-bottom: 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }
        
        .header-content {
          position: relative;
          z-index: 1;
        }
        
        .header h1 {
          margin: 0 0 15px 0;
          font-size: 3rem;
          font-weight: 700;
          color: white;
        }
        
        .header .subtitle {
          font-size: 1.4rem;
          opacity: 0.9;
          margin-bottom: 25px;
          color: white;
        }
        
        .header .description {
          font-size: 1.1rem;
          opacity: 0.8;
          max-width: 800px;
          margin: 0 auto;
          color: white;
        }
        
        .intro-section {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          padding: 40px;
          border-radius: 12px;
          margin-bottom: 40px;
          border-left: 5px solid #2c5aa0;
        }
        
        .intro-section h2 {
          color: #2c5aa0;
          margin-top: 0;
          font-size: 1.8rem;
        }
        
        .documents-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
          margin: 40px 0;
        }
        
        .document-card {
          background: white;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .document-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }
        
        .document-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #2c5aa0, #059669);
        }
        
        .document-title {
          color: #1e3a8a;
          font-size: 1.4rem;
          font-weight: 600;
          margin: 0 0 15px 0;
        }
        
        .document-description {
          color: #64748b;
          margin-bottom: 20px;
          line-height: 1.6;
        }
        
        .document-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 25px;
        }
        
        .meta-tag {
          background: #e0f2fe;
          color: #0369a1;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
        }
        
        .document-link {
          display: inline-block;
          background: linear-gradient(135deg, #2c5aa0 0%, #1e3a8a 100%);
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        
        .document-link:hover {
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(44, 90, 160, 0.3);
        }
        
        .stats-section {
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          color: white;
          padding: 40px;
          border-radius: 12px;
          margin: 40px 0;
          text-align: center;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #fbbf24;
          display: block;
        }
        
        .stat-label {
          font-size: 1rem;
          opacity: 0.9;
          margin-top: 5px;
        }
        
        .contact-section {
          background: linear-gradient(135deg, #1e3a8a 0%, #2c5aa0 100%);
          color: white;
          padding: 40px;
          border-radius: 12px;
          margin: 40px 0;
          text-align: center;
        }
        
        .contact-section h2 {
          color: white;
          margin-top: 0;
        }
        
        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }
        
        .contact-item {
          background: rgba(255,255,255,0.1);
          padding: 20px;
          border-radius: 8px;
        }
        
        .contact-item h4 {
          color: #fbbf24;
          margin: 0 0 10px 0;
        }
        
        .contact-item a {
          color: white;
          text-decoration: none;
        }
        
        .contact-item a:hover {
          text-decoration: underline;
        }
        
        .footer-note {
          background: #f8fafc;
          padding: 30px;
          border-radius: 12px;
          margin-top: 40px;
          text-align: center;
          color: #64748b;
          font-style: italic;
        }
        
        @media (max-width: 768px) {
          .documents-grid {
            grid-template-columns: 1fr;
          }
          
          .header h1 {
            font-size: 2.2rem;
          }
          
          .header .subtitle {
            font-size: 1.2rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="header">
          <div className="header-content">
            <h1>WellWise Investor Portal</h1>
            <div className="subtitle">Strategic Investment Opportunity</div>
            <div className="description">
              Access comprehensive documentation for WellWise's AI-powered integrated wellbeing ecosystem. 
              All materials are designed for strategic investors and partnership discussions.
            </div>
          </div>
        </div>

        <div className="intro-section">
          <h2>🎯 Investment Opportunity Overview</h2>
          <p>
            WellWise represents a <strong>€75+ billion market opportunity</strong> in integrated wellbeing solutions, 
            addressing the critical fragmentation crisis affecting millions of professionals across Europe. 
            Our systematic approach combines AI-powered insights across mental health, financial wellness, 
            and sustainability - creating the first truly integrated platform in this space.
          </p>
          <p>
            <strong>Current Stage:</strong> Professional concept validation with systematic market research infrastructure, 
            seeking strategic partnership for MVP development and market entry.
          </p>
        </div>

        <div className="stats-section">
          <h2>Market Opportunity at a Glance</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">€75B+</span>
              <div className="stat-label">Serviceable Addressable Market</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">€617B</span>
              <div className="stat-label">Annual Fragmentation Cost</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">250K+</span>
              <div className="stat-label">Target Organizations</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">40M+</span>
              <div className="stat-label">Professionals Affected</div>
            </div>
          </div>
        </div>

        <h2 style={{color: '#2c5aa0', fontSize: '2rem', textAlign: 'center', margin: '50px 0 30px 0'}}>
          📋 Investment Documentation
        </h2>

        <div className="documents-grid">
          <div className="document-card">
            <h3 className="document-title">WellWise Problem Card Plus</h3>
            <div className="document-description">
              Comprehensive market analysis and strategic business case for the integrated wellbeing platform. 
              Includes detailed competitive analysis, market sizing, and strategic partnership framework with Achmea.
            </div>
            <div className="document-meta">
              <span className="meta-tag">Market Analysis</span>
              <span className="meta-tag">Business Strategy</span>
              <span className="meta-tag">Competitive Landscape</span>
            </div>
            <a href="/document" className="document-link">
              📄 View Problem Card →
            </a>
          </div>

          <div className="document-card">
            <h3 className="document-title">Current Status Summary</h3>
            <div className="document-description">
              Honest assessment of WellWise's current capabilities, limitations, and strategic development roadmap. 
              Transparent evaluation designed for strategic partnership discussions with clear investment requirements.
            </div>
            <div className="document-meta">
              <span className="meta-tag">Honest Assessment</span>
              <span className="meta-tag">Development Roadmap</span>
              <span className="meta-tag">Investment Requirements</span>
            </div>
            <a href="/status-summary" className="document-link">
              📊 View Status Summary →
            </a>
          </div>
        </div>

        <div className="intro-section">
          <h2>🤝 Strategic Partnership Focus</h2>
          <p>
            WellWise is specifically designed for strategic partnership with <strong>Achmea Impact Ventures</strong>, 
            leveraging their expertise across health, finance, and ESG sectors. This partnership represents:
          </p>
          <ul>
            <li><strong>Perfect Strategic Alignment:</strong> Mission-driven approach to integrated wellbeing</li>
            <li><strong>Risk Mitigation:</strong> Achmea's sector expertise significantly reduces development risks</li>
            <li><strong>Market Access:</strong> Leverage existing corporate networks for rapid market entry</li>
            <li><strong>Regulatory Guidance:</strong> Navigate European compliance requirements effectively</li>
          </ul>
        </div>

        <div className="contact-section">
          <h2>💬 Strategic Discussion</h2>
          <p>Ready to explore how WellWise can create exceptional value for strategic investors while addressing the critical wellbeing challenges facing millions of professionals?</p>
          
          <div className="contact-info">
            <div className="contact-item">
              <h4>📧 Direct Contact</h4>
              <p>
                <strong>Cihat Kaya</strong><br/>
                Founder & CEO<br/>
                <a href="mailto:cihatkaya@glodinas.nl">cihatkaya@glodinas.nl</a>
              </p>
            </div>
            
            <div className="contact-item">
              <h4>📱 Phone</h4>
              <p>
                <strong>Direct Line</strong><br/>
                <a href="tel:+31681348551">(6) 81 34 85 51</a><br/>
                Available for strategic discussions
              </p>
            </div>
            
            <div className="contact-item">
              <h4>🌐 Platform Access</h4>
              <p>
                <strong>Live Platform</strong><br/>
                <a href="https://www.wellwise.nl" target="_blank">www.wellwise.nl</a><br/>
                <a href="https://www.wellwise.nl/survey" target="_blank">Market Research Portal</a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-note">
          <p>
            <strong>Confidential Investment Materials</strong><br/>
            These documents contain confidential and proprietary information intended solely for qualified investors 
            and strategic partners. Please maintain confidentiality and contact us directly for any questions or 
            clarifications regarding the investment opportunity.
          </p>
          <p style={{marginTop: '20px', fontSize: '0.9rem'}}>
            Last Updated: July 3, 2025 | WellWise Investor Portal v1.0
          </p>
        </div>
      </div>
    </>
  );
}

