import { SignupCredentials } from '@app/modules/auth/models/signup-credentials.model';
import { SignupKeys } from '@auth/enums/signup-keys.enum';

export type SignupResponse = Omit<
  SignupCredentials,
  SignupKeys.PASSWORD | SignupKeys.PASSWORD_CONFIRMATION
>;
