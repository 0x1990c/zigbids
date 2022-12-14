import React from 'react';
import ComingSoon from '../../components/Stub/ComingSoon';
import { useTranslation } from 'react-i18next';
import { useTitle } from 'react-use';

const Staking: React.FC = () => {
  const { t } = useTranslation('pages');
  useTitle(t('staking'));
  return (
    <>
      <ComingSoon />
    </>
  );
};

export default Staking;
