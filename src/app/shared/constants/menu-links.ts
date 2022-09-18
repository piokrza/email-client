import { MenuItem } from 'primeng/api';
import { MenuLinkLabel } from '@shared/enums/menu-link-label.enum';

export const MenuLinks: MenuItem[] = [
  {
    label: MenuLinkLabel.INBOX,
    routerLink: '/inbox',
  },
  {
    label: MenuLinkLabel.SIGN_OUT,
    routerLink: '/signout',
  },
  {
    label: MenuLinkLabel.SIGN_IN,
    routerLink: '',
  },
  {
    label: MenuLinkLabel.SIGN_UP,
    routerLink: '/signup',
  },
];
