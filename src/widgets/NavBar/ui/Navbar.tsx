import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, ThemeAppLink } from "shared/ui/AppLink/AppLink";
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = (props: NavbarProps) => {
  const {className} = props;
  const {t} = useTranslation()
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={'/'} theme={ThemeAppLink.SECONDARY} className={cls.mainLink}>
          {t('Main')}
        </AppLink>
        <AppLink to={'/about'} theme={ThemeAppLink.SECONDARY}>
          {t('About us')}
        </AppLink>
      </div>
    </div>
  )
}

export { Navbar }