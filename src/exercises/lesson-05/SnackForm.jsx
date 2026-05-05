import styles from './SnackForm.module.css';
import { useEffect, useState } from 'react';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  // Add name state using useState("") for the snack name input
  const [name, setName] = useState('');

  // Add rating state using useState("") for the rating input
  const [rating, setRating] = useState('');

  // Add touched state using useState({ name: false, rating: false })
  // to track which fields the user has interacted with (prevents
  // showing errors before user tries to use a field)
  const [touched, setTouched] = useState({
    name: false,
    rating: false,
  });

  const isEditing = Boolean(editingSnack);

  // Create a useEffect that runs when editingSnack changes
  useEffect(() => {
    // if isEditing is true
    if (isEditing) {
      // set the name of the snack
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setName(editingSnack.name);
      // set the rating of the snack
      setRating(editingSnack.rating);
    } else {
      // otherwise set name and rating to empty ('')
      setName('');
      setRating('');
    }
    // once set or not set, reset the snack objects
    setTouched({ name: false, rating: false });
  }, [isEditing, editingSnack]);

  function handleSubmit(e) {
    e.preventDefault();

    // Mark all fields as touched if user tries to submit invalid form
    setTouched({ name: true, rating: true });

    if (!validateName(name) || !validateRating(rating)) {
      // If invalid, return early.
      return;
    }

    if (isEditing) {
      updateSnack(editingSnack.id, name, rating);
      setTouched({ name: true, rating: true });
    } else {
      addSnack(name, rating);
      // e.target.reset();
      setName('');
      setRating('');
      setTouched({ name: false, rating: false });
    }
  }

  // Create validateName() function that returns true if name is not empty after trimming
  function validateName(name) {
    return name && name.trim().length > 0;
  }

  // Create validateRating() function that returns true if rating is selected (not empty)
  function validateRating() {
    return rating && rating >= 1 && rating <= 5;
  }

  // Create getNameError() function that returns error message if name is invalid AND touched
  function getNameError() {
    if (!validateName(name) && touched.name) {
      // Create getNameError() function that returns error message if name is invalid AND touched
      // return console.error('Snack name is required');
      return 'Snack name is required';
    }
  }

  // Create getRatingError() function that returns error message if rating is invalid AND touched
  function getRatingError() {
    if (!validateRating(rating) && touched.rating) {
      return 'Please select a rating';
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles['form-title']}>
        {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>
          Name:
        </label>
        <input
          type="text"
          name="name"
          // replace defaultValue with value prop for both inputs (name, rating)
          value={name}
          // remove the required attribute from the input elements
          // required
          className={styles['field-input']}
          placeholder="Enter snack name"
          // add onChange handlers for both inputs that update the corresponding state variable
          onChange={(e) => setName(e.target.value)}
          onFocus={() =>
            setTouched((prev) => ({
              ...prev,
              name: true,
            }))
          }
        />
        {getNameError() && (
          <div className={styles.error}>
            {getNameError()}
          </div>
        )}
      </div>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>
          Rating:
        </label>
        <input
          type="number"
          name="rating"
          // replace defaultValue with value prop for both inputs (name, rating)
          value={rating}
          // remove the required attribute from the input elements
          // required
          min="1"
          max="5"
          className={styles['field-input']}
          placeholder="Rate 1-5"
          // add onChange handlers for both inputs that update the corresponding state variable
          onChange={(e) => setRating(e.target.value)}
          onFocus={() =>
            setTouched((prev) => ({
              ...prev,
              rating: true,
            }))
          }
        />
        {getRatingError() && (
          <div className={styles.error}>
            {getRatingError()}
          </div>
        )}
      </div>

      <div className={styles['button-container']}>
        <button
          type="submit"
          className={`${styles.button} ${styles['submit-button']}`}
        >
          {isEditing ? 'Save' : 'Add'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles['cancel-button']}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
