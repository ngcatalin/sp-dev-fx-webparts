import * as React from 'react';
import { IPage } from '@src/models/IPage';
import { ILayoutProps } from './ILayoutProps';
import { Breadcrumb, IBreadcrumbItem } from 'office-ui-fabric-react/lib/Breadcrumb';
import * as strings from 'PageHierarchyWebPartStrings';

export const BreadcrumbLayout: React.FunctionComponent<ILayoutProps> = props => {
  let breadcrumbItems: IBreadcrumbItem[] = [];
  if (props.pages != null && props.pages.length > 0) {
    breadcrumbItems = props.pages.map((page) => {
      return ( { text: page.title, key: page.id.toString(), href: page.url } );
    });
    //last item shouldn't be rendered as link
    breadcrumbItems[breadcrumbItems.length-1].href=null;
  }

   return (
     breadcrumbItems.length>0 ?
     <Breadcrumb
       items={breadcrumbItems}
       ariaLabel={strings.BreadcrumbLayout_AriaLabel}
       overflowAriaLabel={strings.BreadcrumbLayout_OverflowItems}
     />
     :
       <span>{strings.Message_NoAncestorsFound}</span>   
  );
};
