import { MenuItem } from 'primeng/api';
import { MenuLinkLabel } from '@shared/enums/menu-link-label.enum';

//TODO: handle active links

export const MenuLinks: MenuItem[] = [
  {
    label: MenuLinkLabel.INBOX,
    routerLink: '/inbox',
    routerLinkActiveOptions: 'active',
  },
  {
    label: MenuLinkLabel.SIGN_OUT,
    routerLink: '/signout',
    routerLinkActiveOptions: 'active',
  },
  {
    label: MenuLinkLabel.SIGN_IN,
    routerLink: '',
    routerLinkActiveOptions: 'active',
  },
  {
    label: MenuLinkLabel.SIGN_UP,
    routerLink: '/signup',
    routerLinkActiveOptions: 'active',
  },
];
