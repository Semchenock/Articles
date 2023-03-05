import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, ThemeAppLink } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/home.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar = (props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  const { t } = useTranslation();

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid="sidebar_toggle"
        onClick={onToggle}
        className={cls.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        <AppLink
          to={RoutePath.main}
          theme={ThemeAppLink.SECONDARY}
          className={cls.item}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}>{t('Main')}</span>

        </AppLink>
        <AppLink
          to={RoutePath.about}
          theme={ThemeAppLink.SECONDARY}
          className={cls.item}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t('About us')}</span>
        </AppLink>
      </div>
      <div className={cls.swithers}>
        <ThemeSwitcher />
        <LanguageSwitcher
          className={cls.lang}
          short={collapsed}
        />
      </div>
    </div>
  );
};

export { Sidebar };
