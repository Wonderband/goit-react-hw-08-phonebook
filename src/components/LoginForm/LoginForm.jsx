import { useDispatch } from 'react-redux';
import { logIn } from 'redux/user/operations';
import css from './LoginForm.module.css';
export const LoginForm = () => {
  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const credentials = {
      email: email.value,
      password: password.value,
    };
    // console.log(credentials);
    dispatch(logIn(credentials));
  };
  return (
    <form className={css.form} onSubmit={submitHandler}>
      <label className={css.label}>
        <input type="email" name="email" placeholder="Input email" />
      </label>
      <label className={css.label}>
        <input type="password" name="password" placeholder="Input password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};
