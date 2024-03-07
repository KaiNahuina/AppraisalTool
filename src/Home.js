import React, { useEffect } from 'react'
import './Home.css';
import Notesbox from './Components/Notesbox';
import Rating from './Components/Rating';

function Home() {
  useEffect(() => {
    // Mapping of dropdown values to designated values for the third column
    const designatedValues = {
      dropdown1: {
        value1: 'designatedValue1',
        value2: 'designatedValue2',
        value3: 'designatedValue3',
        value4: 'designatedValue4',
        blank: ''

      },
      dropdown2: {
        value1: 'designatedValue4',
        value2: 'designatedValue5',
        value3: 'designatedValue6',
        value4: 'designatedValue4',
        blank: ''
      },
      dropdown3: {
        value1: 'designatedValue4',
        value2: 'designatedValue5',
        value3: 'designatedValue6',
        value4: 'designatedValue4',
        blank: ''
      },
      dropdown4: {
        value1: 'designatedValue4',
        value2: 'designatedValue5',
        value3: 'designatedValue6',
        value4: 'designatedValue4',
        blank: ''
      },
      dropdown5: {
        value1: 'designatedValue4',
        value2: 'designatedValue5',
        value3: 'designatedValue6',
        value4: 'designatedValue7',
        value5: 'designatedValue8',
        blank: ''
      },
      dropdown6: {
        value1: 'designatedValue4',
        value2: 'designatedValue5',
        value3: 'designatedValue6',
        value4: 'designatedValue4',
        blank: ''
      },
      dropdown7: {
        value1: 'designatedValue4',
        value2: 'designatedValue5',
        value3: 'designatedValue6',
        value4: 'designatedValue4',
        blank: ''
      },
      // Add mappings for other dropdowns as needed
    };
    const handleDropdownChange = (dropdownId, displayId) => {
      return function() {
        const selectedValue = this.value;
        const designatedValue = designatedValues[dropdownId][selectedValue];
        document.getElementById(displayId).textContent = designatedValue;
      };
    };

    // Array of dropdown IDs and corresponding display IDs
    const dropdowns = [
      { dropdownId: 'dropdown1', displayId: 'display1' },
      { dropdownId: 'dropdown2', displayId: 'display2' },
      { dropdownId: 'dropdown3', displayId: 'display3' },
      { dropdownId: 'dropdown4', displayId: 'display4' },
      { dropdownId: 'dropdown5', displayId: 'display5' },
      { dropdownId: 'dropdown6', displayId: 'display6' },
      { dropdownId: 'dropdown7', displayId: 'display7' }
    ];

    // Attach event listeners for each dropdown
    dropdowns.forEach(({ dropdownId, displayId }) => {
      const dropdown = document.getElementById(dropdownId);
      const handler = handleDropdownChange(dropdownId, displayId); // Save the reference to the handler

      dropdown.addEventListener('change', handler);
    

    // Clean up function to remove event listeners when the component unmounts
    return () => {
      dropdown.removeEventListener('change', handler); // Remove the event listener using the same handler

    };
  });
  }, []);


  return (
    <div className="tool-container">
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
                <td className="cell">Team Size</td>
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
                  <td className="cell">Geographic Distribution</td>
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
                    <td className="cell">Organizational Distribution</td>
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
                      <td className="cell">Skill Availability</td>
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
                      <td className="cell">Compliance</td>
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
                      <td className="cell">Solution Complexity</td>
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
                      <td className="cell">Domain Complexity</td>
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
            <button className="button-4 button-5">Breakdown</button>
            <br/>
            <button className="button-4">Calculate</button>
            <br/>
            <button className="button-4">New Price</button>
            <div className="project-notes">
              <Notesbox />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home