import { gql, useQuery } from '@apollo/client';
import './App.css';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      author
    }
  }
`;


function DisplayBooks() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error: {error.message}</p>;

  return data.books.map(({id, title, author}) => (
    <div key={id}>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  ));
}

// function Books({ onBookSelected }) {
//   const { loading, error, data } = useQuery(GET_BOOKS);

//   if (loading) return 'Loading...';
//   if (error) return `Error! ${error.message}`;

//   return (
//     <select name='books' onChange={onBookSelected}>
//       {data.books.map((book) => (
//         <option key={book.id} value={book.title}>
//           {book.title}
//         </option>
//       ))}
//     </select>
//   );
// }

function App() {
  return (
    <div>
      <h2>Books List</h2>
      <hr />
      <DisplayBooks />
      {/* <Books /> */}
    </div>
  );
}

export default App;
