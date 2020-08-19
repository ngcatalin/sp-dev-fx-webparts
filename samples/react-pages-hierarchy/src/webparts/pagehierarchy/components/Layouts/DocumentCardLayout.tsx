import * as React from "react";
import { IPage } from "@src/models/IPage";
import { ILayoutProps } from "./ILayoutProps";
import * as strings from "PageHierarchyWebPartStrings";
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardPreview,
  DocumentCardDetails,
  DocumentCardTitle,
  IDocumentCardPreviewProps,
  DocumentCardLocation,
  DocumentCardType,
} from "office-ui-fabric-react/lib/DocumentCard";
import { ImageFit } from "office-ui-fabric-react/lib/Image";
import { ISize } from "office-ui-fabric-react/lib/Utilities";
import { GridLayout } from "@pnp/spfx-controls-react/lib/GridLayout";
import * as moment from "moment";

export const DocumentCardLayout: React.FunctionComponent<ILayoutProps> = (
  props
) => {
  const _onRenderGridItem = (
    item: IPage,
    finalSize: ISize,
    isCompact: boolean
  ): JSX.Element => {
    const previewProps: IDocumentCardPreviewProps = {
      previewImages: [
        {
          previewImageSrc: `/_layouts/15/getpreview.ashx?path=${encodeURIComponent(
            item.url
          )}&resolution=0`,
          imageFit: ImageFit.cover,
          height: 130,
        },
      ],
    };

    return (
      <div data-is-focusable={true} role="listitem" aria-label={item.title}>
        <DocumentCard
          type={isCompact ? DocumentCardType.compact : DocumentCardType.normal}
          aria-label={item.title}
          onClickHref={item.url}
        >
          <DocumentCardPreview {...previewProps} />
          {!isCompact && <DocumentCardLocation location={item.title} />}
          <DocumentCardDetails>
            <DocumentCardTitle title={item.title} shouldTruncate={true} />
            <DocumentCardActivity
              activity={moment(item.modified).format('ll')}
              people={[
                {
                  name: item.authorTitle,
                  profileImageSrc: `/_layouts/15/userphoto.aspx?accountname=${item.authorEmail}&size=L`,
                },
              ]}
            />
          </DocumentCardDetails>
        </DocumentCard>
      </div>
    );
  };

  return (
    <>
      {props.pages.length > 0 ? (
        <GridLayout
          ariaLabel="List of content, use right and left arrow keys to navigate, arrow down to access details."
          items={props.pages}
          onRenderGridItem={(
            item: IPage,
            finalSize: ISize,
            isCompact: boolean
          ) => _onRenderGridItem(item, finalSize, isCompact)}
        />
      ) : (
        <span>{strings.Message_NoChildrenFound}</span>
      )}
    </>
  );
};
