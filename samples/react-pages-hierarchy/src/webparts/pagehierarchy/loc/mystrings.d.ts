declare interface IPageHierarchyWebPartStrings {
  Configuration_Placeholder_IconText: string;
  Configuration_Placeholder_Description: string;
  Configuration_Placeholder_ButtonLabel: string;
  Message_NoAncestorsFound: string;
  Message_NoChildrenFound: string;
  ParentPageMissing_Placeholder_IconText: string;
  ParentPageMissing_Placeholder_Description: string;
  ParentPageMissing_Placeholder_Description_NoPermissions: string;
  ParentPageMissing_Placeholder_ButtonLabel: string;
  PropertyPane_Description: string;
  PropertyPane_GroupName_About: string;
  PropertyPane_GroupName_PagesToDisplay: string;
  PropertyPane_Label_PagesToDisplay: string;
  PropertyPane_PagesToDisplay_OptionText_Ancestors: string;
  PropertyPane_PagesToDisplay_OptionText_Children: string;
  PropertyPane_GroupName_Debug: string;
  PropertyPane_Label_DebugPageId: string;
  PropertyPane_Label_VersionInfo: string;
  PropertyPane_Description_DebugPageId: string;
  PropertyPane_GroupName_ChildrenLayout: string;
  PropertyPane_Label_Children_Layout: string;
  PropertyPane_PagesToDisplay_OptionText_Children_Box: string;
  PropertyPane_PagesToDisplay_OptionText_Children_DocumentCard: string;
  PropertyPane_PagesToDisplay_OptionText_Children_DocumentCard_Compact: string;
  PropertyPane_PagesToDisplay_OptionText_Children_DocumentCard_Links: string;
}

declare module "PageHierarchyWebPartStrings" {
  const strings: IPageHierarchyWebPartStrings;
  export = strings;
}
