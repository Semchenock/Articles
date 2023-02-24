import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

// Testing component
const BugButton = () => {
  const { t } = useTranslation();
  const [hasError, setHasError] = useState(false);

  const throwError = () => {
    setHasError(true);
  };

  useEffect(() => {
    if (hasError) throw new Error();
  }, [hasError]);

  return (
    <Button onClick={throwError}>
      {t('throw new Error')}
    </Button>
  );
};

export { BugButton };
