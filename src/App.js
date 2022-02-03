import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'
import Checkbox from './components/Checkbox'
import RadioButtonGroup from './components/RadioButtonGroup'

function App() {
  const [ formState, setFormState ] = useState({
    checkbox1: false,
    checkbox2: true,
    selectedRadio: '',
    disableCheckboxes: false
  })

  const clickCheckbox = (name) => {
    setFormState({
      ...formState,
      [name]: !formState[name]
    })
  }

  const clickRadioButton = (name) => {
    setFormState({
      ...formState,
      selectedRadio: name,
      disableCheckboxes: name === 'disable'
    })
  }

  const showFormState = () => {
    alert(JSON.stringify(formState).replace(/,|{|}/g, '\n'))
  }
  
  const radioButtons = [
    { label: 'Enable checkboxes', name: 'enable' },
    { label: 'Disable checkboxes', name: 'disable' }
  ]

  return (
    <div className="App">
      <Form showFormState={showFormState}>
        <Checkbox
          label={'Checkbox 1'} 
          checked={formState.checkbox1}
          handleClick={() => clickCheckbox('checkbox1')}
          disabled={formState.disableCheckboxes}
        />
        <Checkbox
          label='Checkbox 2'
          handleClick={() => clickCheckbox('checkbox2')}
          disabled={formState.disableCheckboxes}
          checked={formState.checkbox2}
        />
        <RadioButtonGroup 
          handleChange={clickRadioButton} 
          buttons={radioButtons} 
          selectedButton={formState.selectedRadio}
        />
      </Form>
    </div>
  );
}

export default App;
