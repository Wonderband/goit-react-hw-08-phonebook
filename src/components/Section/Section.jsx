import css from './Section.module.css';
export const Section = ({ children }) => {
  return (
    <section className={css.section}>
      <p>Hello, Im section!</p>
      {children}
    </section>
  );
};
