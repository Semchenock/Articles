import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher = (props: LanguageSwitcherProps) => {
  const {className} = props;
  const {t, i18n} = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  }
  return (
    <Button 
      className={classNames(cls.LanguageSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggleLanguage}
    >
      {t('Language')}
    </Button>
  )
}

export { LanguageSwitcher }