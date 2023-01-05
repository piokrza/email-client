import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuLinks } from '@shared/constants/menu-links';
import { MenuLinkLabel } from '@shared/enums/menu-link-label.enum';
import { AuthService } from '@auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  setLinks(signedIn: boolean): MenuItem[] {
    return MenuLinks.filter((link) => link.state!['authenticated'] === signedIn);
  }
}
