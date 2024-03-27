
import React, {Component} from 'react'
import ChartJS from 'chart.js/auto'

class Chart extends Component {
  constructor(props) {
    super(props);
    // Create a ref for the canvas element
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.createChart();
  }

  createChart() {
    const { selectedValues } = this.props;

    const desiredCategories = [
      'TeamSize',
      'GeographicDistribution',
      'OrganizationalDistribution',
      'SkillAvailability',
      'Compliance',
      'SolutionComplexity',
      'DomainComplexity'
    ];

   
    const labels = Object.keys(selectedValues)
    // Filter out category names that are not in the desired list
    .filter(category => desiredCategories.includes(category))
    // Optionally, you can map the category names to more readable labels if needed
    .map(category => {
      switch (category) {
        case 'TeamSize':
          return 'Team Size';
        case 'GeographicDistribution':
          return 'Geographic Distribution';
        case 'OrganizationalDistribution':
          return 'Organizational Distribution';
        case 'SkillAvailability':
          return 'Skill Availability';
        case 'Compliance':
          return 'Compliance';
        case 'SolutionComplexity':
          return 'Solution Complexity';
        case 'DomainComplexity':
          return 'Domain Complexity';
        default:
          return category;
      }
    });

    const data = Object.values(selectedValues);

    const chartConfig = {
      type: 'radar',
      data: {
        labels: labels,
        datasets: [
          {
            labels: 'SelectedValues',
            data: data,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }
        ]
      }
    };

    // Check if chartRef has been properly initialized
    if (this.chartRef.current) {
      // Get the context of the canvas element
      const ctx = this.chartRef.current.getContext('2d');

      // Check if a chart instance already exists
      if (this.chartInstance) {
        // Destroy the existing chart instance
        this.chartInstance.destroy();
      }

      // Create a new chart instance
      this.chartInstance = new ChartJS(ctx, chartConfig);
    }
  }

  render() {
    return (
      <div>
        {/* Attach the ref to the canvas element */}
        <canvas id="radar-chart" ref={this.chartRef}></canvas>
      </div>
    );
  }
}


export default Chart




