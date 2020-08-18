import * as React from 'react';
import { useState } from 'react';
import styles from './Layouts.module.scss';
import { IPage } from '@src/models/IPage';
import { Icon, ActionButton, ISize } from 'office-ui-fabric-react';
import { ILayoutProps } from './ILayoutProps';
import ReactResizeDetector from 'react-resize-detector';
import * as strings from 'PageHierarchyWebPartStrings';
import { GridLayout } from "@pnp/spfx-controls-react/lib/GridLayout";

export const BoxesLayout: React.FunctionComponent<ILayoutProps> = props => {
  const _onRenderGridItem = (
    item: IPage,
    finalSize: ISize,
    isCompact: boolean
  ): JSX.Element => {
    if (item) {
      return (
        <div
          className={styles.listLayoutItemContainer}
          style={{
            backgroundColor:
              props.themeVariant.semanticColors.primaryButtonBackground,
          }}
        >
          <ActionButton
            style={{
              color: props.themeVariant.semanticColors.primaryButtonText,
            }}
            className={styles.listLayoutItemButton}
            href={item.url}
            target="_self"
          >
            {item.title}
          </ActionButton>
        </div>
      );
    }
  };

  return (
    <div className={styles.layouts}>
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
    </div>
  );
};
