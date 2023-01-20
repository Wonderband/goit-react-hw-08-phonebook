import css from './LoginForm.module.css';
export const LoginForm = () => {
  const submitHandler = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const credentials = {
      email: email.value,
      password: password.value,
    };
    // console.log(credentials);
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
