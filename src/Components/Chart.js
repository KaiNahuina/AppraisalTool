import React from 'react';

const RadarChart = ({ selectedValues }) => {
  const width = 800;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const maxRadius = Math.min(width, height) / 2 * 0.8;

  const data = [
    { axis: 'TeamSize', points: [3, 5, 7, 9] },
    { axis: 'GeographicDistribution', points: [9, 7, 5, 8] },
    { axis: 'OrganizationalDistribution', points: [6, 3, 2, 7] },
    { axis: 'SkillAvailability', points: [1, 3, 5, 9] },
    { axis: 'Compliance', points: [1, 3, 5, 7, 9] },
    { axis: 'SolutionComplexity', points: [5, 6, 8, 9] },
    { axis: 'DomainComplexity', points: [1, 3, 5, 7] },
  ];

  const axisCount = data.length;
  const angleSlice = (Math.PI * 2) / axisCount;

  const getPointCoordinates = (angle, value, maxValue) => {
    const radius = (value / maxValue) * maxRadius;
    return {
      x: centerX + radius * Math.cos(angle - Math.PI / 2),
      y: centerY + radius * Math.sin(angle - Math.PI / 2),
    };
  };

  return (
    <svg width={width} height={height}>
      {/* Draw background */}
      <rect x={0} y={0} width={width} height={height} fill="white" />

      {/* Draw levels */}
      {data.map((axisData, axisIndex) => (
        <g key={`level-${axisIndex}`}>
          {axisData.points.map((point, pointIndex) => {
            const angle = axisIndex * angleSlice;
            const { x, y } = getPointCoordinates(angle, pointIndex + 1, axisData.points.length);
            return (
              <circle key={`level-circle-${axisIndex}-${pointIndex}`} cx={x} cy={y} r={6} fill="black" />
            );
          })}
        </g>
      ))}

      {/* Draw axes */}
      {data.map((axisData, i) => {
        const angle = i * angleSlice;
        const { x, y } = getPointCoordinates(angle, axisData.points.length, axisData.points.length);
        return (
          <g key={`axis-group-${i}`}>
            <line
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke="black"
            />
            <text
              x={x}
              y={y}
              dx={x > centerX ? 10 : -10}
              dy={y > centerY ? 10 : -10}
              textAnchor={x > centerX ? 'start' : 'end'}
              alignmentBaseline="middle"
              fontSize="12"
              fill="black"
            >
              {axisData.axis.replace(/([A-Z])/g, ' $1').trim()}
            </text>
          </g>
        );
      })}

      {/* Draw selected data points and lines */}
      <polygon
        points={data.map((axisData, i) => {
          const angle = i * angleSlice;
          const selectedValue = selectedValues[axisData.axis]?.point;
          if (selectedValue === null || selectedValue === undefined) {
            console.error(`Selected value for ${axisData.axis} is not defined or null`);
            return `${centerX},${centerY}`; // Default to center if no valid point
          }

          const pointIndex = axisData.points.indexOf(selectedValue) + 1;
          if (pointIndex === 0) {
            console.error(`Selected value ${selectedValue} for ${axisData.axis} not found in points array`);
            return `${centerX},${centerY}`; // Default to center if point is not found
          }

          const { x, y } = getPointCoordinates(angle, pointIndex, axisData.points.length);
          return `${x},${y}`;
        }).join(' ')}
        fill="rgba(0, 128, 255, 0.3)"
        stroke="blue"
        strokeWidth="2"
      />

      {data.map((axisData, i) => {
        const angle = i * angleSlice;
        const selectedValue = selectedValues[axisData.axis]?.point;
        if (selectedValue === null || selectedValue === undefined) {
          return null; // Skip if no valid point
        }

        const pointIndex = axisData.points.indexOf(selectedValue) + 1;
        if (pointIndex === 0) {
          return null; // Skip if point is not found
        }

        const { x, y } = getPointCoordinates(angle, pointIndex, axisData.points.length);
        return (
          <circle key={`data-point-${i}`} cx={x} cy={y} r={6} fill="green" />
        );
      })}
    </svg>
  );
};

export default RadarChart;
