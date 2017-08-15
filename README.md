[![Build Status](https://travis-ci.org/BaReinhard/AutoComplete-React-Component.png?branch=master)](https://travis-ci.org/BaReinhard/AutoComplete-React-Component)

# AutoComplete-React-Component
A simple react component that displays a list of values, of which you can filter via an input and select by clicking the value or pressing enter to choose the first displayed value.

### Work in Progress, working to shrink the package

## Install
```
npm install autocomplete-react-component@latest
```

## Example Usage


```
import React from 'react';
import Autocomplete from 'autocomplete-react-component';
export default class UsingAutoComplete extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			languagesArray: ['JavaScript', 'Java', 'Python'],
		};
	}

	selectedLanguageHandler = clickedValue => {
		console.log(clickedValue);
		// JavaScript
		// Example Output, if clicked Language: JavaScript
	};
	render() {
		return (
			<AutoComplete
				style={{ color: 'grey' }}
				dropdownStyle={{ backgroundColor: 'grey' }}
				valuesStyle={{ color: 'pink' }}
				values={this.state.languagesArray}
				onClick={this.selectedLanguageHandler}
			/>
		);
	}
}
```

## Example Output
![Gif](https://im3.ezgif.com/tmp/ezgif-3-6e1739121e.gif)

## API
### **values** (Required)
* An array of values that will be displayed

### **onClick** (Required)
* Returns the value of the item clicked, i.e the array Item clicked has a value of "JSON". onClick(value){} value will be equal to "JSON"

### **valuesStyle** (Optional)
* Styles the individual li elements in the dropdown display

### **dropdownStyle** (Optional)
* Styles the dropdown display element

### **style** (Optional)
* Styles the Containing Element of the Rendered AutoComplete Component
        
