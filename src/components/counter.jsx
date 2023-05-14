import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Counter(props) {
  const [count, setCount] = useState(props.initialCount);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(props.initialCount);
  };

  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={handleIncrement}>Tambah</button>
      <button onClick={handleDecrement} disabled={count <= 0}>Kurang</button><br></br>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

Counter.propTypes = {
  initialCount: PropTypes.number
};

Counter.defaultProps = {
  initialCount: 0
};

export default Counter;
