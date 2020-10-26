import React, { Component } from 'react';
import Pagination from './pagination';
import './About.css';

export default class MoviesPage extends Component {
  getMovies = () => {
    const movies = [
      { id: 0, name: "홍길동", email: "test1@naver.com", age: "15" },
      { id: 1, name: "김길동", email: "test2@gmail.com", age: "20" },
      { id: 2, name: "김길동", email: "test2@gmail.com", age: "20" },
      { id: 3, name: "김길동", email: "test2@gmail.com", age: "20" },
      { id: 4, name: "김길동", email: "test2@gmail.com", age: "20" },
      { id: 5, name: "김길동", email: "test2@gmail.com", age: "20" },
      { id: 6, name: "김길동", email: "test2@gmail.com", age: "20" },

    ]
    return movies;
  }

  state = {
    movies: this.getMovies(),
    pageSize: 3 // 한 페이지에 보여줄 아이템(영화목록) 개수
  }

  render() {
    const { length: count } = this.state.movies;

    if (count === 0)
      return <p>0명이 조회되었습니다.</p>

    return (
      <React.Fragment>
        <div className="countTable"> {count} 명이 조회되었습니다.</div>

        <table className="table">
          <thead className="listTable">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie =>
              <tr key={movie.id}>
                <td>{movie.id}</td>
                <td>{movie.name}</td>
                <td>{movie.email}</td>
                <td>{movie.age}</td>
              </tr>
            )}
          </tbody>
        </table>

        <Pagination
          itemsCount={count}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}