 
import PropTypes from 'prop-types';
const ListComponent = ({ queries }) => {
  ListComponent.propTypes = {
    queries: PropTypes.array
};
  return (
    <ul>
      {queries.map((query) => (
        <li key={query.id}>{query.content}</li>
      ))}
    </ul>
  );
};

export default ListComponent;
