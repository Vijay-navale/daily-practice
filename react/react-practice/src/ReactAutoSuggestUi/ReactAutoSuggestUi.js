import React from 'react';
import AutoSuggest from 'react-autosuggest-ui';

const data = [
  {
    name: 'react.JS',
    value: 'React.JS',
  },
  {
    name: 'Vuue.JS',
    value: 'Vue.JS',
  },
  {
    name: 'Angular.JS',
    value: 'Angular.JS',
  },
  {
    name: 'JavaScript',
    value: 'JavaScript',
  },
];

const ReactAutoSuggestUi = () => {
  const handleOnChange = (selected) => {
    console.log('selected', selected);
  };

  const handleOnInputChange = (e) => {
    console.log(e.target.value);
  };
  const handleOnKeyDown = (e) => {
    // console.log("e.key:-", e.key);
    // console.log(e.target.value);
  };

  return (
    <>
      <AutoSuggest
        data={data}
        onChange={handleOnChange}
        placeholder='I am placeholder'
      />
      {/* <ReactAutoSuggestUi /> */}
      {/* <input
        type="text"
        // onChange={handleOnInputChange}
        onKeyDown={handleOnKeyDown}
      /> */}
    </>
  );
};

export default ReactAutoSuggestUi;
