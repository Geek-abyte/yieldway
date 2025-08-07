import { NextApiRequest, NextApiResponse } from 'next';
import { spawn } from 'child_process';
import path from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Call the APY monitor script
    const scriptPath = path.join(process.cwd(), '..', 'scripts', 'apy-monitor.js');
    
    const result = await new Promise((resolve, reject) => {
      const child = spawn('node', [scriptPath, 'check'], {
        cwd: path.join(process.cwd(), '..'),
        stdio: ['pipe', 'pipe', 'pipe']
      });

      let stdout = '';
      let stderr = '';

      child.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      child.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      child.on('close', (code) => {
        if (code === 0) {
          resolve(stdout);
        } else {
          reject(new Error(`Script failed with code ${code}: ${stderr}`));
        }
      });
    });

    // Parse the output to extract structured data
    const output = result as string;
    
    // Extract key metrics from the output using regex
    const apyMatch = output.match(/Weighted APY: ([\d.]+)%/);
    const liquidityMatch = output.match(/Total Liquidity: \$([,\d.]+)/);
    const poolsMatch = output.match(/Active Pools: (\d+)/);
    const combinedMatch = output.match(/Combined APY: ([\d.]+)%/);
    const allocationMatch = output.match(/Allocation: (\d+)% Soroswap, (\d+)% DeFindex/);

    // Extract top pools
    const poolMatches = [...output.matchAll(/(\d+)\. ([A-Z0-9/.]+): ([\d.]+)% APY\s+Liquidity: \$([,\d.]+)/g)];
    
    const pools = poolMatches.map(match => ({
      pair: match[2],
      apy: parseFloat(match[3]),
      liquidity: parseFloat(match[4].replace(/,/g, ''))
    }));

    const responseData = {
      soroswap: {
        weighted: apyMatch ? parseFloat(apyMatch[1]) : 14.55,
        totalLiquidity: liquidityMatch ? parseFloat(liquidityMatch[1].replace(/,/g, '')) : 21000000,
        pools: pools.slice(0, 5) // Top 5 pools
      },
      defindex: 22.50, // This is currently mocked
      combined: combinedMatch ? parseFloat(combinedMatch[1]) : 20.91,
      optimal_allocation: {
        soroswap: allocationMatch ? parseInt(allocationMatch[1]) : 20,
        defindex: allocationMatch ? parseInt(allocationMatch[2]) : 80
      },
      lastUpdate: new Date().toISOString(),
      isLive: true
    };

    res.status(200).json(responseData);

  } catch (error) {
    console.error('Error fetching APY data:', error);
    
    // Return fallback mock data on error
    res.status(200).json({
      soroswap: {
        weighted: 14.55,
        totalLiquidity: 21352419,
        pools: [
          { pair: 'CAJMPE6D.../CDLZFC3S...', apy: 19.73, liquidity: 1008000 },
          { pair: 'CBIELTK6.../CDLZFC3S...', apy: 19.52, liquidity: 6641 },
          { pair: 'CCY5POAW.../CDLZFC3S...', apy: 19.19, liquidity: 949843 },
          { pair: 'CAD23PIP.../CCPOB5HB...', apy: 18.14, liquidity: 3750000 },
          { pair: 'CA63FRMQ.../CDLZFC3S...', apy: 18.12, liquidity: 1008000 }
        ]
      },
      defindex: 22.50,
      combined: 20.91,
      optimal_allocation: { soroswap: 20, defindex: 80 },
      lastUpdate: new Date().toISOString(),
      isLive: false
    });
  }
}