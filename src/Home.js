import React, { useCallback, useEffect, useState } from 'react';
import './Home.css';
import Notesbox from './Components/Notesbox';
import Rating from './Components/Rating';
import Chart from './Components/Chart';

function Home({ handleCalculate }) {
  const [selectedValues, setSelectedValues] = useState({
    TeamSize: { label: null, point: null },
    GeographicDistribution: { label: null, point: null },
    OrganizationalDistribution: { label: null, point: null },
    SkillAvailability: { label: null, point: null },
    Compliance: { label: null, point: null },
    SolutionComplexity: { label: null, point: null },
    DomainComplexity: { label: null, point: null }
  });

  const designatedValues = {
    dropdown1: {
      value1: { label: '10', point: 3 },
      value2: { label: '25', point: 5 },
      value3: { label: '100', point: 7 },
      value4: { label: '250+', point: 9 },
      blank: { label: '', point: 0 },
    },
    dropdown2: {
      value1: { label: 'Colocated', point: 9 },
      value2: { label: 'Same Building', point: 7 },
      value3: { label: 'Same Time Zone', point: 5 },
      value4: { label: 'Global', point: 8 },
      blank: { label: '', point: 0 },
    },
    dropdown3: {
      value1: { label: 'Startup', point: 6 },
      value2: { label: 'Single Organization', point: 3 },
      value3: { label: 'Paid Partners', point: 2 },
      value4: { label: 'Coalition Partners', point: 1 },
      blank: { label: '', point: 0 },
    },
    dropdown4: {
      value1: { label: 'Available Now', point: 1 },
      value2: { label: 'Available Soon', point: 3 },
      value3: { label: 'Easy to Acquire', point: 5 },
      value4: { label: 'Difficult to Acquire', point: 9 },
      blank: { label: '', point: 0 },
    },
    dropdown5: {
      value1: { label: 'Informal', point: 1 },
      value2: { label: 'Internal Oversight', point: 3 },
      value3: { label: 'External Standards', point: 5 },
      value4: { label: 'Regulatory Oversight', point: 7 },
      value5: { label: 'Existential', point: 9 },
      blank: { label: '', point: 0 },
    },
    dropdown6: {
      value1: { label: 'New Stand-Alone', point: 5 },
      value2: { label: 'New Integrated', point: 6 },
      value3: { label: 'Legacy', point: 8 },
      value4: { label: 'Multi-Environment Legacy', point: 9 },
      blank: { label: '', point: 0 },
    },
    dropdown7: {
      value1: { label: 'Straightforward', point: 1 },
      value2: { label: 'Complex', point: 3 },
      value3: { label: 'Very Complex', point: 5 },
      value4: { label: 'Rapidly Evolving', point: 7 },
      blank: { label: '', point: 0 },
    },
  };

  const dropdowns = [
    { id: 'dropdown1', displayId: 'display1', title: 'TeamSize' },
    { id: 'dropdown2', displayId: 'display2', title: 'GeographicDistribution' },
    { id: 'dropdown3', displayId: 'display3', title: 'OrganizationalDistribution' },
    { id: 'dropdown4', displayId: 'display4', title: 'SkillAvailability' },
    { id: 'dropdown5', displayId: 'display5', title: 'Compliance' },
    { id: 'dropdown6', displayId: 'display6', title: 'SolutionComplexity' },
    { id: 'dropdown7', displayId: 'display7', title: 'DomainComplexity' }
  ];

  const handleDropdownChange = useCallback((dropdownId, displayId, title) => {
    return function () {
      const selectedValue = this.value;
      const designatedValue = designatedValues[dropdownId][selectedValue];
      document.getElementById(displayId).textContent = designatedValue.point.toString();

      setSelectedValues((prevState) => ({
        ...prevState,
        [title]: {
          label: designatedValue.label,
          point: parseInt(designatedValue.point, 10),
        }
      }));
    };
  }, []);

  useEffect(() => {
    dropdowns.forEach(({ id, displayId, title }) => {
      const dropdown = document.getElementById(id);
      const handler = handleDropdownChange(id, displayId, title);
      if (dropdown) {
        dropdown.addEventListener('change', handler);
      }

      // Return a cleanup function to remove the event listener
      return () => {
        if (dropdown) {
          dropdown.removeEventListener('change', handler);
        }
      };
    });
  }, [handleDropdownChange]);

  const [showGraph, setShowGraph] = useState(false);

  const handleRating = () => {
    const data = Object.values(selectedValues).map(entry => entry.point);
    const totalPoints = data.reduce((acc, curr) => acc + curr, 0);
    return totalPoints;
  }

  const points = handleRating();

  const toggleGraph = () => {
    handleCalculate();
    setShowGraph(!showGraph);
    handleRating();
  };

  return (
    <div>
      <div className="tool-container" style={{ display: 'block' }}>
        <div className="grid-container" style={{ display: 'flex', flexDirection: 'row' }}>
          <div className="grid-column" style={{ margin: '20px' }}>
            <table>
              <thead>
                <tr>
                  <th className="columnTitle">Category Name</th>
                  <th className="columnTitle">Selected Values</th>
                  <th className="columnTitle">Points</th>
                  <th className="columnTitle"></th>
                </tr>
              </thead>
              <tbody>
                {dropdowns.map(({ id, displayId, title }) => (
                  <tr key={id}>
                    <td className="cell inside" id={title}>{title.replace(/([A-Z])/g, ' $1').trim()}</td>
                    <td className="cell">
                      <select id={id} className="dropdown inside">
                        <option value="" hidden></option>
                        {Object.entries(designatedValues[id]).map(([valueKey, { label }]) => (
                          <option key={valueKey} value={valueKey}>{label}</option>
                        ))}
                      </select>
                    </td>
                    <td className="cell inside" id={displayId}></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="vertical-line" style={{ margin: '20px' }}></div>

          <div className="button-column" style={{ margin: '20px' }}>
            <div className="estimate">
              <h2 id="display">Your Estimate:</h2>
              <Rating points={points} />
            </div>
            <div className="button-wrapper">
              <button className="button" >Save</button>
              <br />
              <button className="button" onClick={toggleGraph}>Calculate</button>
              <br />
              <button className="button">New Assessment</button>
              <div className="project-notes">
                <Notesbox className='notesbox'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-container" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <div className="grid-column" style={{ display: 'flex', justifyContent: 'center' }}>
          <div id="radar-chart">
            {showGraph && <Chart selectedValues={selectedValues} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
