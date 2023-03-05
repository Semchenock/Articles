import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

const LanguageSwitcher = (props: LanguageSwitcherProps) => {
  const { className, short } = props;
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };
  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggleLanguage}
    >
      {short ? t('ShortLanguage') : t('Language')}
    </Button>
  );
};

export { LanguageSwitcher };
