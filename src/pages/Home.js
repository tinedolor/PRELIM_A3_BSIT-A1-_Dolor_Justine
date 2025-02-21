import React from 'react';

function Home() {
  return (
    <div className="container mt-5">
      <div className="jumbotron bg-light p-5 rounded-lg shadow">
        <h1 className="display-4">Welcome to LYCEUM OF ALABANG</h1>
        <p className="lead">Your journey to excellence starts here.</p>
        <hr className="my-4" />
        <p>Explore our programs, meet our faculty, and discover why LYCEUM is the right choice for you.</p>
        <a className="btn btn-primary btn-lg" href="/about" role="button">Learn More</a>
      </div>
    </div>
  );
}

export default Home;