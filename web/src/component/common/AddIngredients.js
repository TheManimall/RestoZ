import React, { useState, useEffect } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';

const AddIngredients = ({ change }) => {
  const [tag, setTag] = useState('');
  const [tagsArr, changeArr] = useState([]);

  const handleInput = e => setTag(e.target.value);

  const handleReset = () => setTag('');

  useEffect(() => {
    change(tagsArr);
  }, [tagsArr]);

  const handleAddTag = e =>
    e.key === 'Enter' &&
    changeArr(
      tagsArr.concat(tag),
      handleReset()
      // e.preventDefault()
    );

  const handleDelete = i =>
    changeArr(tagsArr.filter((el, index) => i !== index && el));

  return (
    <div className="AddIngredients">
      <TextField
        label="Додати інгредієнт"
        type="text"
        value={tag}
        onKeyDown={handleAddTag}
        onChange={handleInput}
      />
      <Fab
        color="primary"
        aria-label="Add"
        onClick={e =>
          changeArr(tagsArr.concat(tag), handleReset(), e.preventDefault())
        }
      >
        <AddIcon />
      </Fab>
      <div className="ingredients-field">
        {tagsArr.map((el, i) => (
          <Chip
            label={el}
            onDelete={() => handleDelete(i)}
            className="chips"
            color="secondary"
          />
        ))}
      </div>
    </div>
  );
};

export default AddIngredients;
