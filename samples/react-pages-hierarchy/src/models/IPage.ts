import { DateTimeFieldFormatType } from "@pnp/sp/fields";

export interface IPage {
  id: number;
  title: string;
  etag?: string | null;
  url: string;
  parentPageId?: number;
  modified: Date;
  authorTitle: string;
  authorName: string;
  authorEmail: string;
  bannerImageUrl?: string;
}
