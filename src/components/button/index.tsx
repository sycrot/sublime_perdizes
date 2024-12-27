import { ButtonType } from '../enums/ButtonType';
import { IButtonProps } from './props';
import styles from './styles.module.scss';

function Button(props: IButtonProps) {
  const {
    url,
    type,
    text,
    icon,
    style
  } = props;

  return (
    <div
      className={`${styles.button} ${type === ButtonType.primary ? styles.primary : styles.secondary}`}
      style={style}
    >
      <a
        href={url}
        target='_blank'
      >
        <p>{text}</p>
        {icon &&
          <img src={icon} />
        }
      </a>
    </div>
  )
}

export default Button;