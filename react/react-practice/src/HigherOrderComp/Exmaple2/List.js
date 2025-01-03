//List.js
import React from 'react';
const List = (props) => {
  console.log('props', props);
  const { repos } = props;
  //   if (!repos) return null;
  //   if (!repos.length) return <p>No repos, sorry</p>;
  return (
    <ul>
      {repos.map((repo) => {
        return <li key={repo.id}>{repo.full_name}</li>;
      })}
    </ul>
  );
};
export default List;
