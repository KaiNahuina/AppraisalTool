import React from 'react'

function Home() {
  return (
    <div>
      <div class="grid-container">
        <div class="first-column">
        <div class="grid-item">Category 1</div>
        <div class="grid-item">Category 2</div>
        <div class="grid-item">Category 3</div>
        <div class="grid-item">Category 4</div>
        <div class="grid-item">Category 5</div>
        <div class="grid-item">Category 6</div>
        <div class="grid-item">Category 7</div>
      </div>
      <div class="grid-container">
        <div class="grid-item">
          <select id="dropdown1">
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
          </select>
        </div>
        <div class="grid-item">
          <select id="dropdown2">
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
          </select>
        </div>
        <div class="grid-item">
          <select id="dropdown3">
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
          </select>
        </div>
        <div class="grid-item">
          <select id="dropdown4">
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
          </select>
        </div>
        <div class="grid-item">
          <select id="dropdown5">
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
          </select>
        </div>
        <div class="grid-item">
          <select id="dropdown6">
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
          </select>
        </div>
        <div class="grid-item">
          <select id="dropdown7">
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
          </select>
        </div>
      </div>
      
      <div class="grid-container">
        <div class="grid-item" id="display1"></div>
        <div class="grid-item" id="display2"></div>
        <div class="grid-item" id="display3"></div>
        <div class="grid-item" id="display4"></div>
        <div class="grid-item" id="display5"></div>
        <div class="grid-item" id="display6"></div>
        <div class="grid-item" id="display7"></div>
      </div>

    </div>
    </div>
  )
}

export default Home