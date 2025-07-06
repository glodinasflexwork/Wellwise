'use client';

import React from 'react';

export default function StatusSummaryPage() {
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
        }
        
        .header {
          background: linear-gradient(135deg, #2c5aa0 0%, #1e3a8a 100%);
          color: white;
          padding: 40px;
          border-radius: 12px;
          margin-bottom: 30px;
          text-align: center;
        }
        
        .header h1 {
          margin: 0 0 10px 0;
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
        }
        
        .header .subtitle {
          font-size: 1.3rem;
          opacity: 0.9;
          margin-bottom: 20px;
          color: white;
        }
        
        .header .meta {
          background: rgba(255,255,255,0.1);
          padding: 15px;
          border-radius: 8px;
          font-size: 0.95rem;
          color: white;
        }
        
        h2 {
          color: #2c5aa0;
          font-size: 1.8rem;
          margin: 40px 0 20px 0;
          padding-bottom: 10px;
          border-bottom: 3px solid #2c5aa0;
        }
        
        h3 {
          color: #1e3a8a;
          font-size: 1.4rem;
          margin: 30px 0 15px 0;
        }
        
        h4 {
          color: #065f46;
          font-size: 1.2rem;
          margin: 25px 0 10px 0;
        }
        
        .highlight-section {
          background: linear-gradient(135deg, #1a365d 0%, #2c5aa0 100%);
          color: white;
          padding: 25px;
          border-radius: 10px;
          margin: 25px 0;
        }
        
        .highlight-section h3 {
          color: white !important;
          margin-top: 0;
          border-bottom: 2px solid rgba(255,255,255,0.3);
          padding-bottom: 10px;
        }
        
        .highlight-section h4 {
          color: white !important;
          margin-top: 15px;
        }
        
        .highlight-section ul, .highlight-section li {
          color: white;
        }
        
        .highlight-section strong {
          color: #fbbf24;
        }
        
        .opportunity-section {
          background: linear-gradient(135deg, #065f46 0%, #047857 100%);
          color: white;
          padding: 25px;
          border-radius: 10px;
          margin: 25px 0;
        }
        
        .opportunity-section h3 {
          color: white !important;
          margin-top: 0;
          border-bottom: 2px solid rgba(255,255,255,0.3);
          padding-bottom: 10px;
        }
        
        .opportunity-section h4 {
          color: white !important;
          margin-top: 15px;
        }
        
        .opportunity-section ul, .opportunity-section li {
          color: white;
        }
        
        .opportunity-section strong {
          color: #fbbf24;
        }
        
        .warning-section {
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
          color: white;
          padding: 25px;
          border-radius: 10px;
          margin: 25px 0;
        }
        
        .warning-section h3 {
          color: white !important;
          margin-top: 0;
          border-bottom: 2px solid rgba(255,255,255,0.3);
          padding-bottom: 10px;
        }
        
        .warning-section h4 {
          color: white !important;
          margin-top: 15px;
        }
        
        .warning-section ul, .warning-section li {
          color: white;
        }
        
        .warning-section strong {
          color: #fbbf24;
        }
        
        .infographic {
          text-align: center;
          margin: 30px 0;
          padding: 20px;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }
        
        .infographic img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        
        .infographic-caption {
          margin-top: 15px;
          font-style: italic;
          color: #64748b;
          font-size: 0.9rem;
        }
        
        ul, ol {
          padding-left: 25px;
        }
        
        li {
          margin: 8px 0;
        }
        
        strong {
          color: #1e3a8a;
        }
        
        .contact-info {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          padding: 25px;
          border-radius: 10px;
          margin: 30px 0;
          border-left: 5px solid #2c5aa0;
        }
        
        .contact-info h3 {
          color: #2c5aa0;
          margin-top: 0;
        }
        
        a {
          color: #2c5aa0;
          text-decoration: none;
        }
        
        a:hover {
          text-decoration: underline;
        }
        
        .section {
          margin: 40px 0;
        }
        
        .two-column {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin: 25px 0;
        }
        
        @media (max-width: 768px) {
          .two-column {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        <div className="header">
          <h1>WellWise Current Status Summary</h1>
          <div className="subtitle">Honest Assessment & Strategic Opportunity</div>
          <div className="meta">
            <strong>Date:</strong> July 3, 2025 | 
            <strong>Status:</strong> Market Validation and Concept Development Stage<br/>
            <strong>Prepared by:</strong> Cihat Kaya, Founder & CEO, WellWise<br/>
            <strong>Phone:</strong> (6) 81 34 85 51 | 
            <strong>Email:</strong> cihatkaya@glodinas.nl
          </div>
        </div>

        <div className="section">
          <h2>Executive Summary</h2>
          
          <p>WellWise represents a <strong>strategic opportunity at the optimal investment stage</strong> - a professionally validated concept with clear market demand, systematic validation infrastructure, and perfect alignment with current market trends. While we are transparent about being in the concept validation phase, our professional execution and strategic approach position us for rapid development with the right strategic partner.</p>
          
          <div className="highlight-section">
            <h3>🎯 Key Investment Highlights</h3>
            <ul>
              <li><strong>€75+ Billion Market Opportunity</strong> - Validated through systematic market research</li>
              <li><strong>First-Mover Advantage</strong> - No competitors offering true three-pillar integration</li>
              <li><strong>Perfect Strategic Fit</strong> - Ideal alignment with Achmea's expertise and mission</li>
              <li><strong>Professional Validation</strong> - Systematic market research infrastructure in place</li>
              <li><strong>Optimal Timing</strong> - Regulatory tailwinds and cultural shifts creating demand</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <h2>Current Assets & Capabilities</h2>
          
          <div className="infographic">
            <img src="/infographics/WellWise-Current-Status-Overview.png" alt="WellWise Current Status Overview" />
            <div className="infographic-caption">Current Status: Professional Infrastructure with Clear Development Path</div>
          </div>
          
          <h3>🌐 Professional Market Presence</h3>
          
          <h4>Digital Infrastructure</h4>
          <ul>
            <li><strong>Primary Website:</strong> <a href="https://www.wellwise.nl">www.wellwise.nl</a>
              <ul>
                <li>Professional landing page with clear value proposition</li>
                <li>SEO-optimized content for professional sharing</li>
                <li>Email signup system for early access interest</li>
                <li>Contact forms for investor and partnership inquiries</li>
              </ul>
            </li>
            <li><strong>Market Research Platform:</strong> <a href="https://www.wellwise.nl/survey">www.wellwise.nl/survey</a>
              <ul>
                <li>5-step comprehensive market validation survey</li>
                <li>Professional design with progress tracking</li>
                <li>Real-time data collection from target demographics</li>
                <li>Structured validation of core business assumptions</li>
              </ul>
            </li>
            <li><strong>Administrative Capabilities:</strong>
              <ul>
                <li>Admin dashboard for response monitoring</li>
                <li>Data export and analysis capabilities</li>
                <li>Mobile-responsive design across all platforms</li>
                <li>Contact and lead management systems</li>
              </ul>
            </li>
          </ul>
          
          <h4>📊 Market Validation Infrastructure</h4>
          
          <div className="opportunity-section">
            <h3>Systematic Validation Approach</h3>
            <ul>
              <li><strong>Evidence-based methodology</strong> rather than assumption-driven planning</li>
              <li><strong>Professional survey design</strong> targeting key demographics</li>
              <li><strong>Real-time data collection</strong> and analysis capabilities</li>
              <li><strong>Structured approach</strong> to testing market assumptions</li>
            </ul>
          </div>
          
          <div className="highlight-section">
            <h3>Demonstrated Execution Capability</h3>
            <ul>
              <li><strong>Professional digital presence</strong> development</li>
              <li><strong>Technical competence</strong> in web development and data systems</li>
              <li><strong>User experience design</strong> and implementation</li>
              <li><strong>Systematic business development</strong> approach</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <h2>Strategic Value Proposition</h2>
          
          <h3>For Strategic Investors (Achmea Impact Ventures)</h3>
          
          <h4>🎯 Reduced Risk Profile</h4>
          
          <div className="opportunity-section">
            <h3>Market Research Foundation</h3>
            <ul>
              <li><strong>Systematic validation approach</strong> significantly reduces market risk</li>
              <li><strong>Professional execution</strong> demonstrates capability to deliver on objectives</li>
              <li><strong>Transparent assessment</strong> provides clear understanding of current stage</li>
              <li><strong>Evidence-based approach</strong> to business development</li>
            </ul>
          </div>
          
          <div className="highlight-section">
            <h3>Strategic Alignment Benefits</h3>
            <ul>
              <li><strong>Perfect fit</strong> with Achmea's mission across health, finance, and ESG</li>
              <li><strong>Natural synergies</strong> with existing portfolio and expertise</li>
              <li><strong>Regulatory compliance expertise</strong> readily available</li>
              <li><strong>Market access</strong> through established corporate networks</li>
            </ul>
          </div>
          
          <h4>🚀 Strategic Opportunity</h4>
          
          <div className="opportunity-section">
            <h3>Market Leadership Potential</h3>
            <ul>
              <li><strong>First-mover advantage</strong> in integrated wellbeing solutions</li>
              <li><strong>€75+ billion addressable market</strong> with strong growth trajectory</li>
              <li><strong>Regulatory tailwinds</strong> creating increasing demand</li>
              <li><strong>Cultural shifts</strong> supporting holistic wellbeing approaches</li>
            </ul>
          </div>
          
          <div className="infographic">
            <img src="/infographics/WellWise-Strategic-Partnership-Value.png" alt="Strategic Partnership Value" />
            <div className="infographic-caption">Partnership Synergies: Mutual Value Creation for Market Leadership</div>
          </div>
        </div>

        <div className="section">
          <h2>Honest Assessment: Current Limitations</h2>
          
          <h3>Product Development Status</h3>
          
          <div className="warning-section">
            <h3>❌ What We Don't Have Yet</h3>
            <h4>Platform Development:</h4>
            <ul>
              <li>AI-powered integration platform still in concept stage</li>
              <li>Functional wellbeing tools not yet built (mental health, financial, sustainability)</li>
              <li>Individual user dashboard and experience not yet developed</li>
              <li>Enterprise API integrations and HR system connections not yet built</li>
            </ul>
            
            <h4>Market Traction:</h4>
            <ul>
              <li>No paying customers or revenue generation yet</li>
              <li>No pilot programs launched with organizations</li>
              <li>No established user base beyond survey respondents</li>
              <li>Product-market fit still being validated through research</li>
            </ul>
          </div>
          
          <div className="warning-section">
            <h3>⚠️ Development Challenges Ahead</h3>
            <h4>Technical Complexity:</h4>
            <ul>
              <li>AI integration across three domains requires sophisticated development</li>
              <li>Data privacy and security compliance across multiple sectors</li>
              <li>Integration with existing enterprise systems and workflows</li>
              <li>Scalable architecture for multi-tenant enterprise deployment</li>
            </ul>
            
            <h4>Market Execution:</h4>
            <ul>
              <li>Customer acquisition in competitive enterprise software market</li>
              <li>Building trust and credibility with large organizations</li>
              <li>Demonstrating ROI and measurable impact across three pillars</li>
              <li>Scaling operations and customer success capabilities</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <h2>Development Roadmap & Investment Requirements</h2>
          
          <div className="infographic">
            <img src="/infographics/WellWise-Development-Roadmap.png" alt="WellWise Development Roadmap" />
            <div className="infographic-caption">Strategic Development Phases with Clear Milestones and Investment Requirements</div>
          </div>
          
          <h3>Phase 1: Market Validation Completion (3-6 months)</h3>
          
          <div className="opportunity-section">
            <h3>🔍 Validation Activities</h3>
            <ul>
              <li>Complete comprehensive survey data collection and analysis</li>
              <li>Validate core assumptions about integrated approach demand</li>
              <li>Confirm pricing models and feature priorities through market research</li>
              <li>Document comprehensive market research findings and insights</li>
            </ul>
          </div>
          
          <div className="highlight-section">
            <h3>📋 MVP Strategy Development</h3>
            <ul>
              <li>Define minimum viable product based on validated market research</li>
              <li>Create detailed technical development roadmap and architecture</li>
              <li>Identify key partnerships and integration requirements</li>
              <li>Plan structured pilot program approach and success metrics</li>
            </ul>
          </div>
          
          <p><strong>Investment Required:</strong> €500K - €750K for validation completion and MVP planning</p>
          
          <h3>Phase 2: Platform Development & Pilot Programs (6-18 months)</h3>
          
          <div className="opportunity-section">
            <h3>🛠️ Core Platform Development</h3>
            <ul>
              <li>Build foundational platform infrastructure and architecture</li>
              <li>Develop basic integration across three wellbeing pillars</li>
              <li>Create user dashboard and basic analytics capabilities</li>
              <li>Implement comprehensive security and data protection features</li>
            </ul>
          </div>
          
          <div className="highlight-section">
            <h3>🧪 Market Testing & Validation</h3>
            <ul>
              <li>Launch pilot programs with 3-5 organizations for real-world testing</li>
              <li>Gather comprehensive user feedback and iterate on features</li>
              <li>Validate business model, pricing, and value proposition</li>
              <li>Develop detailed case studies and success metrics</li>
            </ul>
          </div>
          
          <p><strong>Investment Required:</strong> €2M - €3M for MVP development and pilot programs</p>
          
          <h3>Phase 3: Market Expansion & Scaling (18+ months)</h3>
          
          <div className="opportunity-section">
            <h3>📈 Platform Scaling</h3>
            <ul>
              <li>Scale platform based on pilot program learnings and feedback</li>
              <li>Expand feature set and integration capabilities</li>
              <li>Grow customer base across target markets and segments</li>
              <li>Develop strategic partnerships and distribution channels</li>
            </ul>
          </div>
          
          <p><strong>Investment Required:</strong> €5M - €8M Series A for scaling and market expansion</p>
        </div>

        <div className="section">
          <h2>Investment Proposition Summary</h2>
          
          <div className="two-column">
            <div>
              <h3>What Achmea Impact Ventures Receives</h3>
              
              <div className="opportunity-section">
                <h4>🎯 Strategic Opportunity</h4>
                <ul>
                  <li>Early access to potentially category-defining platform</li>
                  <li>Strategic partnership with mission-aligned founder</li>
                  <li>Opportunity to shape integrated wellbeing solutions</li>
                  <li>Access to €75+ billion market with regulatory tailwinds</li>
                </ul>
              </div>
              
              <div className="highlight-section">
                <h4>🛡️ Risk Mitigation</h4>
                <ul>
                  <li>Achmea's expertise reduces development and market risks</li>
                  <li>Systematic validation provides evidence-based foundation</li>
                  <li>Strategic alignment ensures long-term partnership potential</li>
                  <li>Professional execution capability demonstrated</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3>What WellWise Requires</h3>
              
              <div className="opportunity-section">
                <h4>💰 Strategic Investment</h4>
                <ul>
                  <li>€2-3 million for MVP development and testing</li>
                  <li>€5-8 million Series A for scaling and expansion</li>
                  <li>Access to strategic expertise and market knowledge</li>
                </ul>
              </div>
              
              <div className="highlight-section">
                <h4>🤝 Strategic Partnership Value</h4>
                <ul>
                  <li>Health sector expertise for wellness features</li>
                  <li>Financial services knowledge for integration</li>
                  <li>ESG expertise for sustainability capabilities</li>
                  <li>Regulatory guidance for European expansion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Conclusion & Next Steps</h2>
          
          <p>WellWise represents a <strong>strategic opportunity at the optimal investment stage</strong> - a professionally validated concept with systematic market validation infrastructure, clear strategic alignment with Achmea Impact Ventures, and perfect timing for market entry.</p>
          
          <div className="highlight-section">
            <h3>Why This Partnership Makes Strategic Sense</h3>
            <ul>
              <li><strong>For Achmea:</strong> Early access to a potentially category-defining platform with significantly reduced risk through strategic expertise and market access.</li>
              <li><strong>For WellWise:</strong> Strategic partnership providing not just capital, but the specific expertise, market access, and regulatory knowledge needed for rapid development and scaling.</li>
              <li><strong>For the Market:</strong> Development of the first truly integrated wellbeing platform addressing the €617 billion fragmentation crisis affecting millions of professionals.</li>
            </ul>
          </div>
          
          <div className="opportunity-section">
            <h3>Immediate Next Steps</h3>
            <ol>
              <li><strong>Strategic Partnership Discussion</strong> - Explore partnership structure and strategic alignment</li>
              <li><strong>Market Research Review</strong> - Present comprehensive validation findings and insights</li>
              <li><strong>Development Planning</strong> - Collaborate on MVP strategy and technical roadmap</li>
              <li><strong>Pilot Program Design</strong> - Leverage Achmea's network for initial market testing</li>
            </ol>
          </div>
          
          <p><em>We're seeking a strategic partner who understands the interconnected nature of modern wellbeing challenges and can help us build the integrated solution that millions of professionals need.</em></p>
        </div>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Cihat Kaya</strong><br/>
          Founder & CEO, WellWise<br/>
          📧 Email: <a href="mailto:cihatkaya@glodinas.nl">cihatkaya@glodinas.nl</a><br/>
          📱 Phone: (6) 81 34 85 51<br/>
          🌐 Website: <a href="http://www.wellwise.nl">www.wellwise.nl</a></p>
          
          <p><strong>Current Progress:</strong><br/>
          • Website: <a href="https://www.wellwise.nl">https://www.wellwise.nl</a><br/>
          • Market Research: <a href="https://www.wellwise.nl/survey">https://www.wellwise.nl/survey</a><br/>
          • Status: Professional concept validation with systematic market research infrastructure</p>
          
          <p><em>This assessment provides a transparent evaluation of WellWise's current status as a professionally validated concept positioned for strategic partnership with Achmea Impact Ventures.</em></p>
        </div>
      </div>
    </>
  );
}

