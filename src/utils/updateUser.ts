import { User } from '../__mocks__/mockData/users';

const updateUser = (
  user: User,
  property: string,
  newValue: string | number | boolean | null,
) => ({ ...user, [property]: newValue });

export default updateUser;
