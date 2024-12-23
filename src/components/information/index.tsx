import Button from '../button';
import { IInformationProps } from './props';
import styles from './styles.module.scss';
import ArrowRight from '../../assets/icons/unicons-arrow-r.png'
import { ButtonType } from '../enums/ButtonType';

function Information(props: IInformationProps) {
  const {
    spanText,
    title,
    contentText,
    buttonText,
    linkButton
  } = props;

  return (
    <div className={styles.information}>
      <div className={styles.content}>
        <span>{spanText}</span>
        <h2>{title}</h2>
        <p>{contentText}</p>
      </div>
      <Button
        text={buttonText}
        icon={ArrowRight}
        type={ButtonType.primary}
        url={linkButton}
      />
    </div>
  )
}

export default Information;