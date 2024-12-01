 
import PropTypes from 'prop-types';
const ListComponent = ({ queries }) => {
  ListComponent.propTypes = {
    queries: PropTypes.array
};
  return (
    <> 
      <h2>문의 목록</h2>
      <ul>
        {queries.map((query) => (
          <li key={query.id}>{query.content}</li>
        ))}
      </ul>
    </>
  );
};

export default ListComponent;
