import css from './RegisterForm.module.css';
export const RegisterForm = () => {
  const submitHandler = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const credentials = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    console.log(credentials);
  };
  return (
    <form className={css.form} onSubmit={submitHandler}>
      <input type="text" name="name" placeholder="Input name" />
      <input type="email" name="email" placeholder="Input email" />
      <input type="password" name="password" placeholder="Input password" />
      <button type="submit">Submit</button>
    </form>
  );
};
