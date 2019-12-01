import React from 'react';
import Score from '../Score/Score';
import './Header.scss';

const Header= (props) => {
  return( 
    <header className="header py-4">
      <div className="container">
        <div className="header__head row mt-4 mx-5 p-3">
          <h1 className="header__title col-8 col-md-10 col-sm-8">
            <span>Rock</span>
            <span>Paper</span>
            <span>scissors</span>
          </h1>
          <Score 
            handleScore={props.handleScore} 
            score={props.score}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;