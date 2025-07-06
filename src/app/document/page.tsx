'use client';

import React from 'react';

export default function DocumentPage() {
  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        @page {
          size: A4;
          margin: 2.5cm 2cm 3cm 2cm;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #1a202c;
          background: white;
        }
        
        .document-container {
          max-width: 210mm;
          margin: 0 auto;
          padding: 20px;
          background: white;
          box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        
        .header {
          background: linear-gradient(135deg, #2c5aa0 0%, #1e3a8a 100%);
          color: white;
          padding: 40px;
          margin: -20px -20px 40px -20px;
          text-align: center;
        }
        
        .header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 10px 0;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        .header .subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          margin: 0;
        }
        
        .document-meta {
          background: #f8fafc;
          padding: 20px;
          border-left: 4px solid #2c5aa0;
          margin-bottom: 30px;
        }
        
        .document-meta h2 {
          color: #2c5aa0;
          margin: 0 0 15px 0;
          font-size: 1.3rem;
        }
        
        .meta-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
        }
        
        .meta-item {
          display: flex;
          flex-direction: column;
        }
        
        .meta-label {
          font-weight: 600;
          color: #4a5568;
          font-size: 0.9rem;
          margin-bottom: 5px;
        }
        
        .meta-value {
          color: #1a202c;
          font-weight: 500;
        }
        
        .toc {
          background: #f7fafc;
          padding: 30px;
          border-radius: 8px;
          margin-bottom: 40px;
        }
        
        .toc h2 {
          color: #2c5aa0;
          margin: 0 0 20px 0;
          font-size: 1.5rem;
          text-align: center;
        }
        
        .toc-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 15px;
        }
        
        .toc-item {
          background: white;
          padding: 15px;
          border-radius: 6px;
          border-left: 3px solid #2c5aa0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        
        .toc-number {
          color: #2c5aa0;
          font-weight: 700;
          font-size: 0.9rem;
        }
        
        .toc-title {
          color: #1a202c;
          font-weight: 600;
          margin-top: 5px;
        }
        
        .section {
          margin-bottom: 40px;
          page-break-inside: avoid;
        }
        
        .section h2 {
          color: #1a365d;
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0 0 20px 0;
          padding-bottom: 10px;
          border-bottom: 3px solid #2c5aa0;
        }
        
        .section h3 {
          color: #2c5aa0;
          font-size: 1.3rem;
          font-weight: 600;
          margin: 25px 0 15px 0;
        }
        
        .section p {
          margin-bottom: 15px;
          text-align: justify;
        }
        
        .section ul {
          margin: 15px 0;
          padding-left: 25px;
        }
        
        .section li {
          margin-bottom: 8px;
        }
        
        .highlight-section {
          background: #1a365d;
          color: white;
          padding: 25px;
          border-radius: 8px;
          margin: 25px 0;
          box-shadow: 0 4px 12px rgba(26, 54, 93, 0.3);
        }
        
        .highlight-section h3 {
          color: white;
          margin: 0 0 15px 0;
          font-size: 1.4rem;
        }
        
        .highlight-section p {
          margin-bottom: 15px;
          line-height: 1.7;
        }
        
        .highlight-section ul {
          margin: 15px 0;
        }
        
        .highlight-section li {
          margin-bottom: 10px;
        }
        
        .opportunity-section {
          background: #065f46;
          color: white;
          padding: 25px;
          border-radius: 8px;
          margin: 25px 0;
          box-shadow: 0 4px 12px rgba(6, 95, 70, 0.3);
        }
        
        .opportunity-section h3 {
          color: white;
          margin: 0 0 15px 0;
          font-size: 1.4rem;
        }
        
        .metric-highlight {
          background: #7c3aed;
          color: white;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
          text-align: center;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
        }
        
        .metric-highlight h4 {
          color: white;
          margin: 0 0 10px 0;
          font-size: 1.2rem;
        }
        
        .risk-section {
          background: #dc2626;
          color: white;
          padding: 25px;
          border-radius: 8px;
          margin: 25px 0;
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
        }
        
        .risk-section h3 {
          color: white;
          margin: 0 0 15px 0;
          font-size: 1.4rem;
        }
        
        .infographic {
          text-align: center;
          margin: 30px 0;
          padding: 20px;
          background: #f8fafc;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .infographic img {
          max-width: 100%;
          height: auto;
          border-radius: 6px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        .infographic-caption {
          margin-top: 15px;
          font-style: italic;
          color: #4a5568;
          font-size: 0.95rem;
        }
        
        .cta-section {
          background: linear-gradient(135deg, #2c5aa0 0%, #1e3a8a 100%);
          color: white;
          padding: 30px;
          border-radius: 8px;
          margin: 40px 0;
          text-align: center;
          box-shadow: 0 6px 20px rgba(44, 90, 160, 0.4);
        }
        
        .cta-section h3 {
          color: white;
          margin: 0 0 15px 0;
          font-size: 1.5rem;
        }
        
        .contact-info {
          background: #f8fafc;
          padding: 25px;
          border-radius: 8px;
          margin-top: 40px;
          border: 2px solid #e2e8f0;
        }
        
        .contact-info h3 {
          color: #2c5aa0;
          margin: 0 0 15px 0;
          text-align: center;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          text-align: center;
        }
        
        .contact-item {
          padding: 15px;
          background: white;
          border-radius: 6px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        
        .contact-label {
          font-weight: 600;
          color: #4a5568;
          font-size: 0.9rem;
          margin-bottom: 5px;
        }
        
        .contact-value {
          color: #2c5aa0;
          font-weight: 600;
        }
        
        @media print {
          .document-container {
            box-shadow: none;
            max-width: none;
          }
          
          .section {
            page-break-inside: avoid;
          }
          
          .highlight-section, .opportunity-section, .metric-highlight, .risk-section {
            page-break-inside: avoid;
          }
        }
        
        @media (max-width: 768px) {
          .document-container {
            padding: 15px;
          }
          
          .header {
            padding: 30px 20px;
            margin: -15px -15px 30px -15px;
          }
          
          .header h1 {
            font-size: 2rem;
          }
          
          .toc-grid, .meta-grid, .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="document-container">
        <div className="header">
          <h1>WellWise Problem Card Plus</h1>
          <p className="subtitle">AI-Powered Integrated Wellbeing Ecosystem</p>
        </div>

        <div className="document-meta">
          <h2>Document Information</h2>
          <div className="meta-grid">
            <div className="meta-item">
              <div className="meta-label">Date</div>
              <div className="meta-value">July 3, 2025</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Status</div>
              <div className="meta-value">Market Validation and Concept Development Stage</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Prepared by</div>
              <div className="meta-value">Cihat Kaya, Founder & CEO</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Version</div>
              <div className="meta-value">Enhanced Professional Edition</div>
            </div>
          </div>
        </div>

        <div className="toc">
          <h2>Table of Contents</h2>
          <div className="toc-grid">
            <div className="toc-item">
              <div className="toc-number">01</div>
              <div className="toc-title">Executive Summary</div>
            </div>
            <div className="toc-item">
              <div className="toc-number">02</div>
              <div className="toc-title">Problem & Market Opportunity</div>
            </div>
            <div className="toc-item">
              <div className="toc-number">03</div>
              <div className="toc-title">Solution & Competitive Advantage</div>
            </div>
            <div className="toc-item">
              <div className="toc-number">04</div>
              <div className="toc-title">Market Validation & Current Status</div>
            </div>
            <div className="toc-item">
              <div className="toc-number">05</div>
              <div className="toc-title">Business Model & Revenue Streams</div>
            </div>
            <div className="toc-item">
              <div className="toc-number">06</div>
              <div className="toc-title">Strategic Partnership with Achmea</div>
            </div>
            <div className="toc-item">
              <div className="toc-number">07</div>
              <div className="toc-title">Implementation Roadmap</div>
            </div>
            <div className="toc-item">
              <div className="toc-number">08</div>
              <div className="toc-title">Investment Proposition</div>
            </div>
            <div className="toc-item">
              <div className="toc-number">09</div>
              <div className="toc-title">Risk Assessment & Mitigation</div>
            </div>
            <div className="toc-item">
              <div className="toc-number">10</div>
              <div className="toc-title">Next Steps & Call to Action</div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Executive Summary</h2>
          
          <div className="highlight-section">
            <h3>🎯 The Opportunity</h3>
            <p>WellWise represents a €162 billion market opportunity to solve the fragmentation crisis in employee wellbeing through the world's first AI-powered integrated platform addressing mental health, financial wellness, and sustainability simultaneously.</p>
          </div>

          <p>Modern organizations face an unprecedented crisis: despite investing heavily in employee wellbeing solutions, 76% of professionals report workplace burnout, 68% live paycheck-to-paycheck, and 83% struggle with sustainable living. The root cause isn't lack of solutions—it's fragmentation.</p>

          <p>Current wellbeing ecosystems are broken. Organizations typically use 8-15 separate vendors for mental health, financial wellness, and sustainability initiatives, creating data silos, user confusion, and management overhead that reduces effectiveness by 67%. This fragmentation costs the European market €617 billion annually through turnover, healthcare costs, and productivity loss.</p>

          <div className="opportunity-section">
            <h3>💡 Our Solution</h3>
            <p>WellWise is the first AI-powered platform that integrates all three wellbeing pillars into a single, intelligent ecosystem. Our proprietary AI recognizes cross-pillar connections—understanding that financial stress drives mental health issues, which impact sustainable choices—and provides personalized, proactive interventions that address root causes rather than symptoms.</p>
          </div>

          <div className="metric-highlight">
            <h4>Key Investment Highlights</h4>
            <p>• €162B Total Addressable Market across Northern/Western Europe<br/>
            • First-mover advantage in integrated wellbeing category<br/>
            • Strategic partnership with Achmea (€50B+ AUM impact investor)<br/>
            • Seeking €5-8M Series A for market validation and expansion</p>
          </div>
        </div>

        <div className="section">
          <h2>The Problem & Market Opportunity</h2>
          
          <div className="infographic">
            <div style={{width: '100%', height: '400px', background: 'linear-gradient(135deg, #2c5aa0 0%, #1e3a8a 100%)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.2rem', fontWeight: '600'}}>
              Market Opportunity Infographic: €162B Total Addressable Market
              <br/>
              <span style={{fontSize: '0.9rem', opacity: 0.8}}>Corporate Wellbeing €87B | Personal Finance Tech €45B | Sustainability Tracking €30B</span>
            </div>
            <div className="infographic-caption">Market Opportunity Breakdown: €162B Total Addressable Market</div>
          </div>

          <div className="highlight-section">
            <h3>🎯 The €617 Billion Crisis</h3>
            <p>Modern professionals face an unprecedented crisis across three interconnected domains, creating a massive economic burden that traditional fragmented solutions cannot address:</p>
            <ul>
              <li><strong>Mental Health Crisis:</strong> 76% of professionals report workplace burnout, with rising anxiety and depression rates creating a €45,000 annual cost per affected employee through turnover, healthcare, and productivity loss</li>
              <li><strong>Financial Stress Epidemic:</strong> 68% live paycheck-to-paycheck despite rising incomes, with financial stress directly correlating to mental health deterioration and reduced workplace performance</li>
              <li><strong>Sustainability Disconnect:</strong> 83% want to live sustainably but lack actionable guidance, creating climate anxiety and ESG compliance challenges for organizations</li>
              <li><strong>Fragmentation Problem:</strong> Organizations use 8-15 separate vendors for wellbeing solutions, creating data silos, user confusion, and management overhead that reduces effectiveness by 67%</li>
            </ul>
          </div>

          <div className="infographic">
            <div style={{width: '100%', height: '350px', background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.1rem', fontWeight: '600', textAlign: 'center', padding: '20px'}}>
              The Fragmentation Crisis: €617B Annual Cost
              <br/>
              <span style={{fontSize: '0.9rem', opacity: 0.9, marginTop: '10px', display: 'block'}}>
                76% Burnout Rate | 84% Job Consideration | 67% Use &lt;2 Tools | 40% HR Time on Vendors
              </span>
            </div>
            <div className="infographic-caption">Problem Visualization: The Cost of Fragmented Wellbeing Solutions</div>
          </div>

          <h3>Market Size & Opportunity</h3>
          <p>The integrated wellbeing market represents a convergence of three rapidly growing sectors:</p>
          <ul>
            <li><strong>Corporate Wellbeing Solutions:</strong> €87 billion market growing at 8.1% CAGR</li>
            <li><strong>Personal Finance Technology:</strong> €45 billion market growing at 12.3% CAGR</li>
            <li><strong>Sustainability Tracking & ESG:</strong> €30 billion market growing at 15.7% CAGR</li>
          </ul>

          <div className="opportunity-section">
            <h3>🎯 Our Serviceable Addressable Market</h3>
            <p>Focusing on Northern and Western Europe's 250,000+ organizations with 40+ million professionals, our initial SAM represents €75 billion, with clear expansion opportunities into North America and Asia-Pacific markets.</p>
          </div>
        </div>

        <div className="section">
          <h2>Solution & Competitive Advantage</h2>

          <div className="infographic">
            <div style={{width: '100%', height: '400px', background: 'linear-gradient(135deg, #065f46 0%, #047857 100%)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.1rem', fontWeight: '600', textAlign: 'center', padding: '20px'}}>
              WellWise: AI-Powered Integration Solution
              <br/>
              <span style={{fontSize: '0.9rem', opacity: 0.9, marginTop: '15px', display: 'block'}}>
                Mental Health + Financial Wellness + Sustainability
                <br/>
                Connected by Intelligent AI Analytics
              </span>
            </div>
            <div className="infographic-caption">Solution Architecture: Three-Pillar Integration with AI Intelligence</div>
          </div>

          <h3>The WellWise Integrated Approach</h3>
          <p>WellWise is the world's first platform to recognize that employee wellbeing cannot be addressed in silos. Our AI-powered solution integrates three critical pillars:</p>

          <div className="highlight-section">
            <h3>🧠 Mental Health & Wellbeing</h3>
            <ul>
              <li>Real-time stress and mood monitoring through behavioral analytics</li>
              <li>Personalized mindfulness and mental health interventions</li>
              <li>Early warning systems for burnout prevention</li>
              <li>Integration with existing EAP and mental health services</li>
            </ul>
          </div>

          <div className="opportunity-section">
            <h3>💰 Financial Wellness & Security</h3>
            <ul>
              <li>Comprehensive financial health assessments and planning</li>
              <li>Personalized budgeting and investment guidance</li>
              <li>Emergency fund building and debt management</li>
              <li>Integration with payroll and benefits systems</li>
            </ul>
          </div>

          <div className="highlight-section">
            <h3>🌱 Sustainability & Environmental Impact</h3>
            <ul>
              <li>Personal and organizational carbon footprint tracking</li>
              <li>Sustainable lifestyle recommendations and gamification</li>
              <li>ESG reporting and compliance support</li>
              <li>Green investment and purchasing guidance</li>
            </ul>
          </div>

          <h3>Competitive Advantages</h3>

          <div className="infographic">
            <div style={{width: '100%', height: '350px', background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.1rem', fontWeight: '600', textAlign: 'center', padding: '20px'}}>
              Competitive Landscape: WellWise Unique Integration
              <br/>
              <span style={{fontSize: '0.9rem', opacity: 0.9, marginTop: '15px', display: 'block'}}>
                Only Integrated Solution | AI-Powered Insights | Cross-Pillar Analytics
              </span>
            </div>
            <div className="infographic-caption">Market Positioning: First and Only Integrated Wellbeing Platform</div>
          </div>

          <div className="highlight-section">
            <h3>🎯 Unique Value Proposition</h3>
            <ul>
              <li><strong>Only integrated solution</strong> addressing all three wellbeing pillars simultaneously</li>
              <li><strong>AI-powered insights</strong> that recognize cross-pillar connections and patterns</li>
              <li><strong>Proactive intervention</strong> based on comprehensive data rather than reactive support</li>
              <li><strong>Measurable ROI</strong> through integrated analytics and reporting</li>
            </ul>
          </div>

          <div className="opportunity-section">
            <h3>🛡️ Defensible Market Position</h3>
            <ul>
              <li><strong>First-mover advantage</strong> in integrated wellbeing category</li>
              <li><strong>Network effects</strong> as more data improves AI recommendations for all users</li>
              <li><strong>High switching costs</strong> once organizations integrate comprehensive platform</li>
              <li><strong>Strategic partnerships</strong> with impact investors and industry leaders</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <h2>Market Validation & Current Status</h2>
          
          <p>WellWise is currently in the Market Validation and Concept Development stage, with significant progress across multiple validation streams:</p>

          <h3>Validation Progress</h3>
          <div className="highlight-section">
            <h3>📊 Current Validation Activities</h3>
            <p><em>Note: Specific validation metrics and survey results are currently being gathered and will be integrated into this document as they become available. Our validation approach includes:</em></p>
            <ul>
              <li>Target customer interviews with HR leaders and wellbeing managers</li>
              <li>Employee surveys across multiple organizations</li>
              <li>Pilot program discussions with potential early adopters</li>
              <li>Technical feasibility assessments with AI and integration partners</li>
            </ul>
          </div>

          <h3>Technology Development Status</h3>
          <p>Our technical approach leverages proven technologies in innovative combinations:</p>
          <ul>
            <li><strong>AI/ML Platform:</strong> Advanced analytics engine for cross-pillar pattern recognition</li>
            <li><strong>Integration Architecture:</strong> API-first design for seamless third-party connections</li>
            <li><strong>Data Security:</strong> Enterprise-grade security with GDPR compliance</li>
            <li><strong>User Experience:</strong> Mobile-first design with intuitive dashboard interfaces</li>
          </ul>

          <div className="opportunity-section">
            <h3>🎯 Immediate Next Steps</h3>
            <ul>
              <li>Complete comprehensive market validation study (Q3 2025)</li>
              <li>Develop MVP with core integration capabilities (Q4 2025)</li>
              <li>Launch pilot programs with 3-5 strategic customers (Q1 2026)</li>
              <li>Secure Series A funding for market expansion (Q4 2025)</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <h2>Business Model & Revenue Streams</h2>

          <div className="infographic">
            <div style={{width: '100%', height: '350px', background: 'linear-gradient(135deg, #2c5aa0 0%, #1e3a8a 100%)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.1rem', fontWeight: '600', textAlign: 'center', padding: '20px'}}>
              Business Model: Multiple Revenue Streams
              <br/>
              <span style={{fontSize: '0.9rem', opacity: 0.9, marginTop: '15px', display: 'block'}}>
                B2B SaaS 70% | Implementation 20% | Analytics Services 10%
                <br/>
                LTV/CAC 30:1 | 85% Gross Margin | 3% Churn Rate
              </span>
            </div>
            <div className="infographic-caption">Revenue Model: Diversified Streams with Strong Unit Economics</div>
          </div>

          <h3>Revenue Streams</h3>
          
          <div className="highlight-section">
            <h3>💼 B2B SaaS Subscriptions (70% of revenue)</h3>
            <ul>
              <li><strong>Starter Tier:</strong> €15-20 per employee/month - Basic integration and analytics</li>
              <li><strong>Professional Tier:</strong> €25-30 per employee/month - Advanced AI insights and reporting</li>
              <li><strong>Enterprise Tier:</strong> €35-45 per employee/month - Full customization and dedicated support</li>
            </ul>
          </div>

          <div className="opportunity-section">
            <h3>🔧 Implementation & Consulting Services (20% of revenue)</h3>
            <ul>
              <li><strong>Setup & Integration:</strong> €5,000-25,000 per organization</li>
              <li><strong>Training & Change Management:</strong> €10,000-50,000 per organization</li>
              <li><strong>Custom Development:</strong> €15,000-100,000 per project</li>
            </ul>
          </div>

          <div className="metric-highlight">
            <h4>📈 Data & Analytics Services (10% of revenue)</h4>
            <p>• Advanced reporting and insights: €3,000-15,000/month<br/>
            • Benchmarking and industry analysis: €5,000-50,000/year<br/>
            • Custom research and consulting: €10,000-100,000/project</p>
          </div>

          <h3>Unit Economics & Financial Projections</h3>
          <div className="highlight-section">
            <h3>📊 Key Financial Metrics</h3>
            <ul>
              <li><strong>Customer Lifetime Value (LTV):</strong> €150,000-300,000 per enterprise customer</li>
              <li><strong>Customer Acquisition Cost (CAC):</strong> €5,000-10,000 per enterprise customer</li>
              <li><strong>LTV/CAC Ratio:</strong> 30:1 (industry benchmark: 3:1)</li>
              <li><strong>Gross Margin:</strong> 85% (SaaS industry standard)</li>
              <li><strong>Annual Churn Rate:</strong> 3% (best-in-class for enterprise SaaS)</li>
            </ul>
          </div>

          <div className="opportunity-section">
            <h3>🎯 Funding Requirements</h3>
            <p>Seeking €5-8 million Series A funding to accelerate market validation, product development, and initial market penetration across Northern and Western Europe.</p>
          </div>
        </div>

        <div className="section">
          <h2>Strategic Partnership with Achmea: The Perfect Match</h2>
          
          <p>Our strategic partnership with Achmea represents a unique alignment of mission, market opportunity, and mutual value creation that positions WellWise for accelerated growth and market leadership.</p>

          <h3>Why This Partnership Creates Exceptional Value:</h3>

          <div className="highlight-section">
            <h3>🎯 For Achmea:</h3>
            <ul>
              <li>Early access to potentially category-defining platform</li>
              <li>Strategic partnership with mission-aligned founder</li>
              <li>Opportunity to shape development of integrated wellbeing solutions</li>
              <li>Access to large, growing market with regulatory tailwinds</li>
            </ul>
          </div>

          <div className="opportunity-section">
            <h3>💡 For WellWise:</h3>
            <ul>
              <li>Strategic guidance from experts across health, finance, and ESG</li>
              <li>Market access through Achmea's extensive corporate client network</li>
              <li>Regulatory navigation support for European market expansion</li>
              <li>Credibility and validation from respected impact investor</li>
            </ul>
          </div>

          <div className="metric-highlight">
            <h4>🌍 For the Market:</h4>
            <p>• Acceleration of integrated wellbeing solution development<br/>
            • Thought leadership in emerging category<br/>
            • Innovation in preventive health and employee wellbeing<br/>
            • Advancement of ESG and sustainability goals</p>
          </div>

          <h3>Partnership Implementation</h3>
          <p>The partnership will be structured to maximize strategic value while maintaining WellWise's independence and growth trajectory:</p>
          <ul>
            <li><strong>Investment Structure:</strong> Series A lead investor with board representation</li>
            <li><strong>Strategic Collaboration:</strong> Joint go-to-market initiatives and product development</li>
            <li><strong>Market Access:</strong> Introduction to Achmea's corporate client network</li>
            <li><strong>Knowledge Sharing:</strong> Access to Achmea's expertise in health, finance, and sustainability</li>
          </ul>
        </div>

        <div className="section">
          <h2>Implementation Roadmap</h2>
          
          <h3>Phase 1: Foundation & Validation (Q3-Q4 2025)</h3>
          <div className="highlight-section">
            <h3>🔬 Market Validation & MVP Development</h3>
            <ul>
              <li>Complete comprehensive market validation study with 100+ target customers</li>
              <li>Develop core AI integration platform and basic dashboard</li>
              <li>Establish key technology partnerships and integration capabilities</li>
              <li>Build founding team with expertise in AI, wellbeing, and enterprise sales</li>
            </ul>
          </div>

          <h3>Phase 2: Pilot & Refinement (Q1-Q2 2026)</h3>
          <div className="opportunity-section">
            <h3>🚀 Pilot Programs & Product Iteration</h3>
            <ul>
              <li>Launch pilot programs with 3-5 strategic enterprise customers</li>
              <li>Iterate product based on real-world usage and feedback</li>
              <li>Develop comprehensive onboarding and support processes</li>
              <li>Establish initial revenue and validate unit economics</li>
            </ul>
          </div>

          <h3>Phase 3: Market Entry & Scale (Q3-Q4 2026)</h3>
          <div className="highlight-section">
            <h3>📈 Commercial Launch & Growth</h3>
            <ul>
              <li>Full commercial launch across Northern and Western Europe</li>
              <li>Scale sales and marketing operations</li>
              <li>Expand product capabilities and integration ecosystem</li>
              <li>Achieve €2-5M ARR and prepare for Series B funding</li>
            </ul>
          </div>

          <div className="metric-highlight">
            <h4>🎯 Key Milestones & Success Metrics</h4>
            <p>• 50+ enterprise customers by end of 2026<br/>
            • €5M+ Annual Recurring Revenue<br/>
            • 95%+ customer satisfaction scores<br/>
            • Demonstrated ROI for enterprise customers</p>
          </div>
        </div>

        <div className="section">
          <h2>Investment Proposition</h2>
          
          <div className="cta-section">
            <h3>🚀 Investment Highlights</h3>
            <p>WellWise represents a unique opportunity to lead the creation of a new market category while generating exceptional returns through a defensible, scalable business model.</p>
          </div>

          <h3>Why Invest in WellWise Now?</h3>
          
          <div className="highlight-section">
            <h3>📊 Market Opportunity</h3>
            <ul>
              <li><strong>Large & Growing Market:</strong> €162B TAM with 12%+ CAGR across all segments</li>
              <li><strong>Underserved Need:</strong> No existing integrated solution addressing all three wellbeing pillars</li>
              <li><strong>Regulatory Tailwinds:</strong> Increasing ESG requirements and employee wellbeing mandates</li>
              <li><strong>Post-Pandemic Urgency:</strong> Heightened focus on employee mental health and financial security</li>
            </ul>
          </div>

          <div className="opportunity-section">
            <h3>🎯 Competitive Advantage</h3>
            <ul>
              <li><strong>First-Mover Position:</strong> Creating new category with significant barriers to entry</li>
              <li><strong>AI-Powered Differentiation:</strong> Proprietary technology for cross-pillar insights</li>
              <li><strong>Network Effects:</strong> Platform becomes more valuable with each additional user and organization</li>
              <li><strong>Strategic Partnerships:</strong> Achmea partnership provides credibility and market access</li>
            </ul>
          </div>

          <div className="metric-highlight">
            <h4>💰 Financial Opportunity</h4>
            <p>• Strong Unit Economics: 30:1 LTV/CAC ratio<br/>
            • High Margins: 85% gross margin potential<br/>
            • Recurring Revenue: SaaS model with low churn<br/>
            • Multiple Exit Opportunities: Strategic or financial buyers</p>
          </div>

          <h3>Use of Funds (€5-8M Series A)</h3>
          <ul>
            <li><strong>Product Development (40%):</strong> AI platform enhancement and integration capabilities</li>
            <li><strong>Sales & Marketing (35%):</strong> Team building and market penetration</li>
            <li><strong>Operations & Infrastructure (15%):</strong> Scaling technology and support systems</li>
            <li><strong>Working Capital (10%):</strong> General corporate purposes and contingency</li>
          </ul>
        </div>

        <div className="section">
          <h2>Risk Assessment & Mitigation</h2>
          
          <p>While WellWise represents a significant market opportunity, we have identified and developed mitigation strategies for key risks:</p>

          <div className="risk-section">
            <h3>⚠️ Market & Competition Risks</h3>
            <ul>
              <li><strong>Risk:</strong> Large technology companies entering the integrated wellbeing space</li>
              <li><strong>Mitigation:</strong> First-mover advantage, strategic partnerships, and focus on enterprise-specific needs</li>
            </ul>
          </div>

          <div className="risk-section">
            <h3>⚠️ Technology & Integration Risks</h3>
            <ul>
              <li><strong>Risk:</strong> Complexity of integrating multiple wellbeing domains and third-party systems</li>
              <li><strong>Mitigation:</strong> Phased development approach, proven integration technologies, and experienced technical team</li>
            </ul>
          </div>

          <div className="risk-section">
            <h3>⚠️ Regulatory & Privacy Risks</h3>
            <ul>
              <li><strong>Risk:</strong> Evolving data privacy regulations and employee monitoring concerns</li>
              <li><strong>Mitigation:</strong> Privacy-by-design architecture, legal expertise, and transparent data practices</li>
            </ul>
          </div>

          <div className="risk-section">
            <h3>⚠️ Customer Adoption Risks</h3>
            <ul>
              <li><strong>Risk:</strong> Slow enterprise adoption of new integrated platform</li>
              <li><strong>Mitigation:</strong> Comprehensive pilot programs, proven ROI demonstration, and strategic customer partnerships</li>
            </ul>
          </div>

          <div className="opportunity-section">
            <h3>🛡️ Risk Management Framework</h3>
            <p>Our approach to risk management includes regular assessment, proactive mitigation strategies, and contingency planning across all operational areas. We maintain close relationships with legal, technical, and industry advisors to stay ahead of potential challenges.</p>
          </div>
        </div>

        <div className="section">
          <h2>Next Steps & Call to Action</h2>
          
          <div className="cta-section">
            <h3>🎯 Ready to Transform Employee Wellbeing Together?</h3>
            <p>WellWise is positioned to create a new market category while generating exceptional returns. We invite strategic investors and partners to join us in building the future of integrated employee wellbeing.</p>
          </div>

          <h3>Immediate Opportunities</h3>
          <div className="highlight-section">
            <h3>💼 For Investors</h3>
            <ul>
              <li>Lead or participate in €5-8M Series A funding round</li>
              <li>Join our advisory board and provide strategic guidance</li>
              <li>Access to detailed financial projections and market analysis</li>
              <li>Opportunity to shape the future of employee wellbeing</li>
            </ul>
          </div>

          <div className="opportunity-section">
            <h3>🤝 For Strategic Partners</h3>
            <ul>
              <li>Early access to integrated wellbeing platform</li>
              <li>Joint go-to-market opportunities</li>
              <li>Technology integration and data sharing partnerships</li>
              <li>Thought leadership in emerging market category</li>
            </ul>
          </div>

          <h3>Next Steps</h3>
          <ol>
            <li><strong>Initial Discussion:</strong> 30-minute introductory call to explore mutual interest</li>
            <li><strong>Detailed Presentation:</strong> Comprehensive pitch deck and market analysis</li>
            <li><strong>Due Diligence:</strong> Access to detailed business plan, financial models, and technical specifications</li>
            <li><strong>Partnership Agreement:</strong> Negotiation and execution of investment or partnership terms</li>
          </ol>

          <div className="metric-highlight">
            <h4>⏰ Timeline</h4>
            <p>We are actively engaging with strategic investors and partners through Q4 2025, with the goal of closing Series A funding by early 2026 to accelerate market validation and product development.</p>
          </div>
        </div>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-label">Founder & CEO</div>
              <div className="contact-value">Cihat Kaya</div>
            </div>
            <div className="contact-item">
              <div className="contact-label">Email</div>
              <div className="contact-value">cihatkaya@glodinas.nl</div>
            </div>
            <div className="contact-item">
              <div className="contact-label">Phone</div>
              <div className="contact-value">(6) 81 34 85 51</div>
            </div>
            <div className="contact-item">
              <div className="contact-label">Website</div>
              <div className="contact-value">wellwise.nl</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

