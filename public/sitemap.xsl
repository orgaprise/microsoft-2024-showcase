<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>XML Sitemap - PriseKeys</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: #e2e8f0;
            min-height: 100vh;
            padding: 2rem;
          }
          
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
          
          header {
            text-align: center;
            margin-bottom: 2rem;
            padding: 2rem;
            background: rgba(30, 41, 59, 0.8);
            border-radius: 16px;
            border: 1px solid rgba(148, 163, 184, 0.1);
          }
          
          h1 {
            font-size: 2rem;
            font-weight: 700;
            color: #f8fafc;
            margin-bottom: 0.5rem;
          }
          
          .subtitle {
            color: #94a3b8;
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }
          
          .stats {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
          }
          
          .stat-card {
            background: rgba(59, 130, 246, 0.1);
            border: 1px solid rgba(59, 130, 246, 0.3);
            border-radius: 12px;
            padding: 1rem 2rem;
            text-align: center;
          }
          
          .stat-number {
            font-size: 2rem;
            font-weight: 700;
            color: #3b82f6;
          }
          
          .stat-label {
            font-size: 0.875rem;
            color: #94a3b8;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          
          .table-container {
            background: rgba(30, 41, 59, 0.8);
            border-radius: 16px;
            border: 1px solid rgba(148, 163, 184, 0.1);
            overflow: hidden;
          }
          
          table {
            width: 100%;
            border-collapse: collapse;
          }
          
          thead {
            background: rgba(15, 23, 42, 0.8);
          }
          
          th {
            padding: 1rem;
            text-align: left;
            font-weight: 600;
            color: #f8fafc;
            font-size: 0.875rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border-bottom: 1px solid rgba(148, 163, 184, 0.1);
          }
          
          td {
            padding: 0.875rem 1rem;
            border-bottom: 1px solid rgba(148, 163, 184, 0.05);
            font-size: 0.875rem;
          }
          
          tr:hover {
            background: rgba(59, 130, 246, 0.05);
          }
          
          .url-link {
            color: #60a5fa;
            text-decoration: none;
            word-break: break-all;
          }
          
          .url-link:hover {
            text-decoration: underline;
          }
          
          .priority-high {
            color: #22c55e;
            font-weight: 600;
          }
          
          .priority-medium {
            color: #eab308;
            font-weight: 600;
          }
          
          .priority-low {
            color: #94a3b8;
          }
          
          .badge {
            display: inline-block;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 500;
          }
          
          .badge-daily {
            background: rgba(34, 197, 94, 0.1);
            color: #22c55e;
            border: 1px solid rgba(34, 197, 94, 0.3);
          }
          
          .badge-weekly {
            background: rgba(59, 130, 246, 0.1);
            color: #60a5fa;
            border: 1px solid rgba(59, 130, 246, 0.3);
          }
          
          .badge-monthly {
            background: rgba(234, 179, 8, 0.1);
            color: #eab308;
            border: 1px solid rgba(234, 179, 8, 0.3);
          }
          
          .alternates {
            color: #94a3b8;
            font-size: 0.75rem;
          }
          
          footer {
            text-align: center;
            margin-top: 2rem;
            padding: 1rem;
            color: #64748b;
            font-size: 0.875rem;
          }
          
          @media (max-width: 768px) {
            body {
              padding: 1rem;
            }
            
            .stats {
              gap: 1rem;
            }
            
            .stat-card {
              padding: 0.75rem 1.25rem;
            }
            
            th, td {
              padding: 0.75rem 0.5rem;
              font-size: 0.75rem;
            }
            
            .url-link {
              font-size: 0.7rem;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <h1>XML Sitemap - PriseKeys</h1>
            <p class="subtitle">This is an XML Sitemap designed for search engines like Google, Bing, and others.</p>
            <p class="subtitle">It helps search engines discover and index your content efficiently.</p>
            
            <div class="stats">
              <div class="stat-card">
                <div class="stat-number">
                  <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
                </div>
                <div class="stat-label">Total URLs</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">
                  <xsl:value-of select="count(sitemap:urlset/sitemap:url[sitemap:priority >= 0.9])"/>
                </div>
                <div class="stat-label">High Priority</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">2</div>
                <div class="stat-label">Languages</div>
              </div>
            </div>
          </header>
          
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>URL</th>
                  <th>Priority</th>
                  <th>Change Freq</th>
                  <th>Alternates</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <a class="url-link" href="{sitemap:loc}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:choose>
                        <xsl:when test="sitemap:priority >= 0.9">
                          <span class="priority-high"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:when>
                        <xsl:when test="sitemap:priority >= 0.7">
                          <span class="priority-medium"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:when>
                        <xsl:otherwise>
                          <span class="priority-low"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td>
                      <xsl:choose>
                        <xsl:when test="sitemap:changefreq = 'daily'">
                          <span class="badge badge-daily">daily</span>
                        </xsl:when>
                        <xsl:when test="sitemap:changefreq = 'weekly'">
                          <span class="badge badge-weekly">weekly</span>
                        </xsl:when>
                        <xsl:otherwise>
                          <span class="badge badge-monthly"><xsl:value-of select="sitemap:changefreq"/></span>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td>
                      <xsl:variable name="altCount" select="count(xhtml:link[@rel='alternate'])"/>
                      <xsl:if test="$altCount > 0">
                        <span class="alternates"><xsl:value-of select="$altCount"/> langs</span>
                      </xsl:if>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
          
          <footer>
            <p>Generated by PriseKeys Sitemap Generator</p>
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
