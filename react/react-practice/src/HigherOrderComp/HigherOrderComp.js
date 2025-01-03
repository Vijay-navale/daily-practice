import { useState, useEffect } from 'react';
import UpdatedClickIncrease from './Exmaple1/ClickIncrease';
import UpdatedHoverIncrease from './Exmaple1/HoverIncrease';
import List from './Exmaple2/List';
import WithLoading from './Exmaple2/WithLoading';
const ListWithLoading = WithLoading(List);
const HigherOrderComp = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/hacktivist123/repos`)
      .then((json) => json.json())
      .then((repos) => {
        setIsLoading(false);
        setRepos(repos);
      });
  }, []);

  return (
    <>
      {/* this ClickIncrease is nothing but a NewComponent in this case */}
      {/* <UpdatedClickIncrease /> */}
      ==================== ====================
      {/* <UpdatedHoverIncrease /> */}
      <ListWithLoading isLoading={isLoading} repos={repos} />
    </>
  );
};

export default HigherOrderComp;
