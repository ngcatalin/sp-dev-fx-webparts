import { PagesToDisplay, ChildrenLayout } from "@src/utilities";

export default interface IPageHierarchyWebPartProps {
  title: string;
  debugPageId?: number;
  pagesToDisplay: PagesToDisplay;
  childrenLayout?: ChildrenLayout;
}
