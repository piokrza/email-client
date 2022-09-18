import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuLinks } from '@shared/constants/menu-links';
import { MenuLinkLabel } from '@shared/enums/menu-link-label.enum';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  setLinks(sigendIn: boolean): MenuItem[] {
    let links: MenuItem[];

    if (sigendIn) {
      links = MenuLinks.filter(
        (link: MenuItem) =>
          link.label === MenuLinkLabel.INBOX || link.label === MenuLinkLabel.SIGN_OUT
      );
    } else {
      links = MenuLinks.filter(
        (link: MenuItem) =>
          !(
            link.label === MenuLinkLabel.INBOX ||
            link.label === MenuLinkLabel.SIGN_OUT
          )
      );
    }

    return links;
  }
}
