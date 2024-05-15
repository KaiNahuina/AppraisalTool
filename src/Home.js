import React, { useCallback, useEffect, useState } from 'react'
import './Home.css';
import Notesbox from './Components/Notesbox';
import Rating from './Components/Rating';
import Chart from './Components/Chart';

function Home({handleCalculate}) {
  
    const [selectedValues, setSelectedValues] = useState({
      //ProjectTitle:{name: null},
      TeamSize: { label: null, point: null },
      GeographicDistribution: { label: null, point: null },
      OrganizationalDistribution: { label: null, point: null },
      SkillAvailability: { label: null, point: null },
      Compliance: { label: null, point: null },
      SolutionComplexity: { label: null, point: null },
      DomainComplexity: { label: null, point: null }
    });

    // Mapping of dropdown values to designated values for the third column
    const designatedValues = {
      dropdown1: {
        value1: { label: 'Colocated', point: 3 },
        value2: { label: 'Same Building', point: 5 },
        value3: { label: 'Same Time Zone', point: 7 },
        value4: { label: 'Global', point: 9 },
        blank: { label: '', point: 0 },
      },
      dropdown2: {
        value1: { label: 'Global', point: 9 },
        value2: { label: 'Same Time Zone', point: 7 },
        value3: { label: 'Same Building', point: 5 },
        value4: { label: 'Colocated', point: 8 },
        blank: { label: '', point: 0 },
      },
      dropdown3: {
        value1: { label: '10', point: 6 },
        value2: { label: '25', point: 3 },
        value3: { label: '100', point: 2 },
        value4: { label: '250+', point: 1 },
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

     // Array of dropdown IDs and corresponding display IDs
     const dropdowns = [
      { id: 'dropdown1', displayId: 'display1', title: 'TeamSize' },
      { id: 'dropdown2', displayId: 'display2', title: 'GeographicDistribution' },
      { id: 'dropdown3', displayId: 'display3', title: 'OrganizationalDistribution' },
      { id: 'dropdown4', displayId: 'display4', title: 'SkillAvailability' },
      { id: 'dropdown5', displayId: 'display5', title: 'Compliance' },
      { id: 'dropdown6', displayId: 'display6', title: 'SolutionComplexity' },
      { id: 'dropdown7', displayId: 'display7', title: 'DomainComplexity' }
    ];
    
    const handleDropdownChange = useCallback((id, displayId) => {
      return function() {
        const selectedValue = this.value;
        const designatedValue = designatedValues[id][selectedValue];
        document.getElementById(displayId).textContent = designatedValue.point.toString();

        setSelectedValues((prevState) => ({
          ...prevState,
          [id]: {
            label: designatedValue.label, 
            point: parseInt(designatedValue.point, 10),
          } 
        }));

      };
    }, []);

    
    useEffect(() => {
  
    
    dropdowns.forEach(({ id, displayId }) => {
      const dropdown = document.getElementById(id);
      const handler = handleDropdownChange(id, displayId); // Save the reference to the handler
      dropdown.addEventListener('change', handler);

      // Clean up function to remove event listeners when the component unmounts
    return () => {
      dropdown.removeEventListener('change', handler); // Remove the event listener using the same handler

    };
    });

    

  }, []);

  const [showGraph, setShowGraph] = useState(false);


  const toggleGraph = () => {
    handleCalculate();
    setShowGraph(!showGraph);
  };

  

  const saveProject = () => {
    //Pop-up window asking name to save
  }

  return (
    <div>
    <div className="tool-container" style={{display: 'block'}}>
      <div className="grid-container" style={{ display: 'flex', flexDirection: 'row' }}>
        <div className="grid-column" style={{ margin: '20px'}}>
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
              <tr>
                <td className="cell" id="TeamSize">Team Size</td>
                <td className="cell">
                  <select id="dropdown1" className="dropdown">
                    <option value="" hidden></option>
                    <option value="value1">10</option>
                    <option value="value2">25</option>
                    <option value="value3">100</option>
                    <option value="value4">250+</option>
                  </select>
                </td>
                <td className="cell" id="display1"></td>
              </tr>

              <tr>
                  <td className="cell" id="GeographicDistribution">Geographic Distribution</td>
                  <td className="cell">
                  <select id="dropdown2" className="dropdown">
                    <option value="" hidden></option>
                    <option value="value1">Colocated</option>
                    <option value="value2">Same Building</option>
                    <option value="value3">Same Time Zone</option>
                    <option value="value4">Global</option>
                  </select>
                </td>
                <td className="cell" id="display2"></td>

                </tr>

                <tr>
                    <td className="cell" id="OrganizationalDistribution">Organizational Distribution</td>
                    <td className="cell">
                    <select id="dropdown3" className="dropdown">
                      <option value="" hidden></option>
                      <option value="value1">Startup</option>
                      <option value="value2">Single Organization</option>
                      <option value="value3">Paid Partners</option>
                      <option value="value4">Coalition Partners</option>
                    </select>
                  </td>
                  <td className="cell" id="display3"></td>
                  </tr>

                  <tr>
                      <td className="cell" id="SkillAvailability">Skill Availability</td>
                      <td className="cell">
                      <select id="dropdown4" className="dropdown">
                        <option value="" hidden></option>
                        <option value="value1">Available Now</option>
                        <option value="value2">Available Soon</option>
                        <option value="value3">Easy to Acquire</option>
                        <option value="value4">Difficult to Acquire</option>
                      </select>
                    </td>
                    <td className="cell" id="display4"></td>
                    </tr>

                    <tr>
                      <td className="cell" id="Compliance">Compliance</td>
                      <td className="cell">
                      <select id="dropdown5" className="dropdown">
                        <option value="" hidden></option>
                        <option value="value1">Informal</option>
                        <option value="value2">Internal Oversight</option>
                        <option value="value3">External Standards</option>
                        <option value="value4">Regulatory Oversight</option>
                        <option value="value5">Existential</option>
                      </select>
                    </td>
                    <td className="cell" id="display5"></td>
                    </tr>

                    <tr>
                      <td className="cell" id="SolutionComplexity">Solution Complexity</td>
                      <td className="cell">
                      <select id="dropdown6" className="dropdown">
                        <option value="" hidden></option>
                        <option value="value1">New Stand-Alone</option>
                        <option value="value2">New Integrated</option>
                        <option value="value3">Legacy</option>
                        <option value="value4">Multi-Environment Legacy</option>
                      </select>
                    </td>
                    <td className="cell" id="display6"></td>

                    </tr>

                    <tr>
                      <td className="cell" id="DomainComplexity">Domain Complexity</td>
                      <td className="cell">
                      <select id="dropdown7" className="dropdown">
                        <option value="" hidden></option>
                        <option value="value1">Straightforward</option>
                        <option value="value2">Complex</option>
                        <option value="value3">Very Complex</option>
                        <option value="value4">Rapidly Evolving</option>
                      </select>
                    </td>
                    <td className="cell" id="display7"></td>
                    </tr>

            </tbody>
          </table>
        </div>

        <div className="vertical-line" style={{ margin: '20px'}}></div>

        <div className="button-column" style={{ margin: '20px' }}>
          <div className="estimate">
            <h2 id="display">Your Estimate:</h2>
            <br/>
            <Rating />
          </div>
          <div className="button-wrapper">
            <button className="button-4 " style={{backgroundColor: 'rgb(46, 194, 38)'}}>Save</button>
            <br/>
            <button className="button-4" onClick={toggleGraph}>Calculate</button>
            <br/>
            <button className="button-4">New Price</button>
            <div className="project-notes">
              <Notesbox />
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
  )
}


export default Home