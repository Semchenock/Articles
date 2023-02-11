import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, ThemeAppLink } from "shared/ui/AppLink/AppLink";
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = (props: NavbarProps) => {
  const {className} = props;
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={'/'} theme={ThemeAppLink.SECONDARY} className={cls.mainLink}>
          Main
        </AppLink>
        <AppLink to={'/about'} theme={ThemeAppLink.SECONDARY}>
          About
        </AppLink>
      </div>
    </div>
  )
}

export { Navbar }