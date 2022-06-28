import styles from './layout.module.css';
import cx from 'classnames'

export default function Layout({ children }) {
  return <div 
            className={cx(styles.container, 
                        'bg-black-gradient-radial w-[327px] md:w-[412px] rounded-2xl px-6 py-6 md:px-8 md:py-8',
                        'flex flex-col items-center justify-center'
                        )}
                    >
            {children}
        </div>;
}
