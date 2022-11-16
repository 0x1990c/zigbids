import { useQuery } from '@apollo/client';
import { useWeb3React } from '@web3-react/core';
import { UserType } from '@zignaly-open/raffles-shared/types';
import { GetCurrentUserResponseModel } from 'queries/auctions';
import { getToken } from 'util/token';
import { GET_CURRENT_USER } from '../queries/users';

export interface CurrentUserModel {
  user?: UserType;
  loading: boolean;
}

export default function useCurrentUser(): CurrentUserModel {
  const { account } = useWeb3React();
  const { loading, data: currentUser }: GetCurrentUserResponseModel = useQuery(
    GET_CURRENT_USER,
    {
      skip: !account || !getToken(),
    },
  );

  return {
    user: currentUser?.me,
    loading,
  };
}
