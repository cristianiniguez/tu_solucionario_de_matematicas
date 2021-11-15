import clsx from 'clsx';

import styles from '../styles/components/Button.module.scss';

const Button = ({ children, className, color, textColor = 'white', off = false }) => {
  return (
    <>
      <button className={clsx('btn', styles.btn, className, { [styles['btn--off']]: off })}>
        {children}
      </button>

      <style jsx>{`
        .btn {
          background-color: ${color};
          color: ${textColor};
        }
      `}</style>
    </>
  );
};

export default Button;
