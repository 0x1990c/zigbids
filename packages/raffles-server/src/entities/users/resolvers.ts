import { ApolloContext, ResourceOptions } from '../../types';
import { WalletType } from '@zignaly-open/raffles-shared/types';
import { subscribeBalanceChanged } from './service';

export const resolvers = {
  Query: {
    me: async (_: any, __: any, { services }: ApolloContext) =>
      services.User.me(),

    balance: async (_: any, __: any, { services }: ApolloContext) =>
      services.User.balance(),

    checkUsername: async (
      _: any,
      { username }: { username: string },
      { services }: ApolloContext,
    ) => services.User.checkUsername(username),

    allUsers: async (
      _: any,
      data: ResourceOptions,
      { services }: ApolloContext,
    ) => services.User.getAll(data),

    _allUsersMeta: async (
      _: any,
      data: ResourceOptions,
      { services }: ApolloContext,
    ) => services.User.count(data),
  },
  Mutation: {
    authenticate: async (
      _: any,
      data: { signature: string; publicAddress: string },
      { services }: ApolloContext,
    ) => services.User.authenticate(data),

    updateProfile: async (
      _: any,
      data: { username: string; discordName: string; email: string },
      { services }: ApolloContext,
    ) => services.User.updateProfile(data),

    getOrCreateUser: async (
      _: any,
      data: { walletType: WalletType; publicAddress: string },
      { services }: ApolloContext,
    ) => services.User.getOrCreateUser(data),
  },
  Subscription: {
    balanceChanged: {
      subscribe: subscribeBalanceChanged,
    },
  },
};
