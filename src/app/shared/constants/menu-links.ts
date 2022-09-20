import { MenuItem } from 'primeng/api';
import { MenuLinkLabel } from '@shared/enums/menu-link-label.enum';

export const MenuLinks: MenuItem[] = [
  {
    label: MenuLinkLabel.INBOX,
    routerLink: '/inbox',
    routerLinkActiveOptions: 'active',
  },
  {
    label: MenuLinkLabel.SIGN_OUT,
    routerLink: '/',
  },
  {
    label: MenuLinkLabel.SIGN_IN,
    routerLink: '/signin',
    routerLinkActiveOptions: 'active',
  },
  {
    label: MenuLinkLabel.SIGN_UP,
    routerLink: '/signup',
    routerLinkActiveOptions: 'active',
  },
];
