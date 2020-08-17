import { INavLink } from 'office-ui-fabric-react/lib/Nav';
import { DisplayMode } from '@microsoft/sp-core-library';

export interface IPageNavigatorProps {
  title: string;
  displayMode: DisplayMode;
  updateProperty: (value: string) => void;
  anchorLinks: INavLink[];
}
