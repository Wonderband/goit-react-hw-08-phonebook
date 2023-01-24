import { useDispatch } from 'react-redux';
import { register } from 'redux/user/operations';

import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const credentials = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    console.log(credentials);
    dispatch(register(credentials));
    // e.target.reset();
  };
  return (
    <form className={css.form} onSubmit={submitHandler}>
      <label className={css.label}>
        Name:
        <input type="text" name="name" placeholder="Input name" />
      </label>
      <label className={css.label}>
        Email:
        <input type="email" name="email" placeholder="Input email" />
      </label>
      <label className={css.label}>
        Password:
        <input
          type="password"
          name="password"
          minLength={7}
          placeholder="Input password"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
