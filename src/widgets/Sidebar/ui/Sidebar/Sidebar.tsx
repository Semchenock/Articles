import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

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

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <button
        data-testid="sidebar_toggle"
        type="button"
        onClick={onToggle}
      >
        {collapsed ? '>' : '<'}
      </button>
      <div className={cls.swithers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.lang} />
      </div>
    </div>
  );
};

export { Sidebar };
