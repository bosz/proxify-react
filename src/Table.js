import React, { useState, useEffect } from 'react';

const USERS_URL = 'https://example.com/api/users';

export default function Table() {
  const [users, setUsers] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    readData();
  }, [])

  useEffect(() => {
    readData();
  }, [page])


  const onFirst = () => setPage(1);
  const onNext = () => setPage(prev => prev + 1);
  const onPrev = () => setPage(prev => prev - 1);
  const onLast = () => setPage(lastPage);


  const readData = () => {
    setFetching(true);
    fetch(`${USERS_URL}/page=${page}`)
      .then(res => res.json())
      .then(responseJson => {
        setUsers(responseJson.results);
        setLastPage(Math.ceil(responseJson.count / responseJson.results.length));
      })
      .catch(err => alert('Error reading data ' + err.message))
      .finally(fin => setFetching(false))
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <section className="pagination">
        <button onClick={onFirst} disabled={fetching || page === 0} className="first-page-btn">first</button>
        <button onClick={onPrev} disabled={fetching || page === 0} className="previous-page-btn">previous</button>
        <button onClick={onNext} disabled={fetching || page === lastPage} className="next-page-btn">next</button>
        <button onClick={onLast} disabled={fetching || page === lastPage} className="last-page-btn">last</button>
      </section>
    </div>
  );
};
