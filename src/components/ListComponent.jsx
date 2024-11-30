 
const ListComponent = ({ queries }) => {
  return (
    <ul>
      {queries.map((query) => (
        <li key={query.id}>{query.content}</li>
      ))}
    </ul>
  );
};

export default ListComponent;
