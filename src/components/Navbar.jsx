import React from 'react';

const Navbar = (props) => {
  return (
    <nav class="navbar navbar-dark bg-primary mb-3">
      <div class="container">
        <a class="navbar-brand" href="/">
          {props.title}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
