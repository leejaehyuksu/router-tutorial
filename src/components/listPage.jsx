import React, { Component } from 'react';
import Pagination from './pagination';

export default class MoviesPage extends Component {
  getMovies = () => {
    const movies = [
      { id: 0, title: "기생충", genre: "블랙 코미디", release: "2019-05-30" },
      { id: 1, title: "라이온 킹", genre: "애니메이션", release: "2019-07-17" },
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
      return <p>There are no movies in the database.</p>

    return (
      <React.Fragment>
        <p>showing {count} movies in the database.</p>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Genre</th>
              <th>Release</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie =>
              <tr key={movie.id}>
                <td>{movie.id}</td>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.release}</td>
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