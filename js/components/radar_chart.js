/**
 * RadarChart Component - Zero-dependency SVG Radar Chart
 * Career Compass
 */

class RadarChart {
  /**
   * Render an SVG radar chart inside a target container
   * @param {HTMLElement|string} container - DOM element or selector
   * @param {Array<{label: string, value: number, targetValue?: number}>} data
   * @param {Object} options
   */
  static render(container, data, options = {}) {
    const el = typeof container === "string" ? document.querySelector(container) : container;
    if (!el || !data || data.length < 3) return;

    const width = options.width || 360;
    const height = options.height || 360;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 45;
    const levels = options.levels || 5;
    const totalAxes = data.length;
    const angleSlice = (Math.PI * 2) / totalAxes;

    // Web / Grid circles
    let gridSvg = "";
    for (let l = 1; l <= levels; l++) {
      const levelFactor = radius * (l / levels);
      let points = "";
      for (let i = 0; i < totalAxes; i++) {
        const x = centerX + levelFactor * Math.cos(angleSlice * i - Math.PI / 2);
        const y = centerY + levelFactor * Math.sin(angleSlice * i - Math.PI / 2);
        points += `${x},${y} `;
      }
      gridSvg += `<polygon points="${points.trim()}" fill="none" stroke="currentColor" stroke-opacity="0.12" stroke-width="1" />`;
    }

    // Axes lines & Labels
    let axesSvg = "";
    let labelsSvg = "";
    for (let i = 0; i < totalAxes; i++) {
      const xEnd = centerX + radius * Math.cos(angleSlice * i - Math.PI / 2);
      const yEnd = centerY + radius * Math.sin(angleSlice * i - Math.PI / 2);
      axesSvg += `<line x1="${centerX}" y1="${centerY}" x2="${xEnd}" y2="${yEnd}" stroke="currentColor" stroke-opacity="0.15" stroke-width="1" />`;

      // Label positioning
      const labelFactor = radius + 22;
      const xLabel = centerX + labelFactor * Math.cos(angleSlice * i - Math.PI / 2);
      const yLabel = centerY + labelFactor * Math.sin(angleSlice * i - Math.PI / 2);

      let textAnchor = "middle";
      if (Math.abs(Math.cos(angleSlice * i - Math.PI / 2)) > 0.3) {
        textAnchor = Math.cos(angleSlice * i - Math.PI / 2) > 0 ? "start" : "end";
      }

      labelsSvg += `
        <text x="${xLabel}" y="${yLabel + 4}" text-anchor="${textAnchor}" 
              font-size="11" font-weight="600" fill="currentColor" fill-opacity="0.85" 
              font-family="var(--font-heading)">
          ${data[i].label}
        </text>`;
    }

    // Student Data Polygon
    let studentPoints = "";
    let studentDots = "";
    for (let i = 0; i < totalAxes; i++) {
      const val = Math.min(100, Math.max(0, data[i].value));
      const r = (val / 100) * radius;
      const x = centerX + r * Math.cos(angleSlice * i - Math.PI / 2);
      const y = centerY + r * Math.sin(angleSlice * i - Math.PI / 2);
      studentPoints += `${x},${y} `;
      studentDots += `<circle cx="${x}" cy="${y}" r="4" fill="var(--primary)" stroke="#fff" stroke-width="1.5">
        <title>${data[i].label}: ${val}%</title>
      </circle>`;
    }

    // Optional Benchmark Polygon
    let targetSvg = "";
    const hasTarget = data.some(d => d.targetValue !== undefined);
    if (hasTarget) {
      let targetPoints = "";
      for (let i = 0; i < totalAxes; i++) {
        const val = Math.min(100, Math.max(0, data[i].targetValue || 80));
        const r = (val / 100) * radius;
        const x = centerX + r * Math.cos(angleSlice * i - Math.PI / 2);
        const y = centerY + r * Math.sin(angleSlice * i - Math.PI / 2);
        targetPoints += `${x},${y} `;
      }
      targetSvg = `
        <polygon points="${targetPoints.trim()}" 
                 fill="rgba(6, 182, 212, 0.12)" 
                 stroke="var(--secondary)" 
                 stroke-width="1.8" 
                 stroke-dasharray="4 3" />
      `;
    }

    const svg = `
      <svg viewBox="0 0 ${width} ${height}" class="radar-svg" style="width: 100%; max-width: ${width}px; height: auto; overflow: visible;">
        <defs>
          <linearGradient id="radarFillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="var(--primary)" stop-opacity="0.45" />
            <stop offset="100%" stop-color="var(--secondary)" stop-opacity="0.25" />
          </linearGradient>
        </defs>
        <g class="radar-grid">${gridSvg}</g>
        <g class="radar-axes">${axesSvg}</g>
        ${targetSvg}
        <polygon points="${studentPoints.trim()}" 
                 fill="url(#radarFillGrad)" 
                 stroke="var(--primary)" 
                 stroke-width="2.5" />
        <g class="radar-dots">${studentDots}</g>
        <g class="radar-labels">${labelsSvg}</g>
      </svg>
    `;

    el.innerHTML = svg;
  }
}

if (typeof window !== "undefined") {
  window.RadarChart = RadarChart;
}
