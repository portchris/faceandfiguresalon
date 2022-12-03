// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Contact documents */
interface ContactDocumentData {
    /**
     * Page Title field in *Contact*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Title of the site header
     * - **API ID Path**: contact.page_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    page_title: prismicT.TitleField;
    /**
     * Logo field in *Contact*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.logo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
    /**
     * Heading Title field in *Contact*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Content heading title
     * - **API ID Path**: contact.heading_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    heading_title: prismicT.TitleField;
    /**
     * Meta Title field in *Contact*
     *
     * - **Field Type**: Text
     * - **Placeholder**: The title that appears in Google
     * - **API ID Path**: contact.meta_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_title: prismicT.KeyTextField;
    /**
     * Meta Description field in *Contact*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Site description in Google
     * - **API ID Path**: contact.meta_description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_description: prismicT.KeyTextField;
    /**
     * Content field in *Contact*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Main content of page
     * - **API ID Path**: contact.content
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
    /**
     * Contact Details field in *Contact*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Phone number, email address
     * - **API ID Path**: contact.contact_details
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    contact_details: prismicT.RichTextField;
    /**
     * Contact Success Message field in *Contact*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Message when customer submits form
     * - **API ID Path**: contact.contact_success_msg
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    contact_success_msg: prismicT.RichTextField;
    /**
     * Contact Address field in *Contact*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: The address of the salon.
     * - **API ID Path**: contact.address
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    address: prismicT.RichTextField;
    /**
     * Google Maps Embed URI field in *Contact*
     *
     * - **Field Type**: GeoPoint
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.map_location
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/geopoint
     *
     */
    map_location: prismicT.GeoPointField;
    /**
     * Slice Zone field in *Contact*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<ContactDocumentDataSlicesSlice>;
}
/**
 * Slice for *Contact → Slice Zone*
 *
 */
type ContactDocumentDataSlicesSlice = FooterSlice;
/**
 * Contact document from Prismic
 *
 * - **API ID**: `contact`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<ContactDocumentData>, "contact", Lang>;
/** Content for Page documents */
interface PageDocumentData {
    /**
     * Page Title field in *Page*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Title of the site header
     * - **API ID Path**: page.page_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    page_title: prismicT.TitleField;
    /**
     * Logo field in *Page*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: page.logo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
    /**
     * Heading Title field in *Page*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Content heading title
     * - **API ID Path**: page.heading_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    heading_title: prismicT.TitleField;
    /**
     * Meta Title field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: The title that appears in Google
     * - **API ID Path**: page.meta_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_title: prismicT.KeyTextField;
    /**
     * Meta Description field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Site description in Google
     * - **API ID Path**: page.meta_description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_description: prismicT.KeyTextField;
    /**
     * Content field in *Page*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Main content of page
     * - **API ID Path**: page.content
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = SellingPointsSlice | ContactPointSlice | TreatmentsSlice | FooterSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<PageDocumentData>, "page", Lang>;
export type AllDocumentTypes = ContactDocument | PageDocument;
/**
 * Primary content in ContactPoint → Primary
 *
 */
interface ContactPointSliceDefaultPrimary {
    /**
     * Title field in *ContactPoint → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: contact_point.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Image field in *ContactPoint → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: contact_point.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Link field in *ContactPoint → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: Link to contact point
     * - **API ID Path**: contact_point.primary.link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Default variation for ContactPoint Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ContactPoint`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactPointSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ContactPointSliceDefaultPrimary>, never>;
/**
 * Slice variation for *ContactPoint*
 *
 */
type ContactPointSliceVariation = ContactPointSliceDefault;
/**
 * ContactPoint Shared Slice
 *
 * - **API ID**: `contact_point`
 * - **Description**: `ContactPoint`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactPointSlice = prismicT.SharedSlice<"contact_point", ContactPointSliceVariation>;
/**
 * Primary content in Footer → Primary
 *
 */
interface FooterSliceDefaultPrimary {
    /**
     * Footer Site Date field in *Footer → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: The date the site was created
     * - **API ID Path**: footer.primary.footer_site_date
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    footer_site_date: prismicT.RichTextField;
    /**
     * Footer Address field in *Footer → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: The address of the salon.
     * - **API ID Path**: footer.primary.footer_address
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    footer_address: prismicT.RichTextField;
    /**
     * Footer Links field in *Footer → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Links to useful resources
     * - **API ID Path**: footer.primary.footer_links
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    footer_links: prismicT.RichTextField;
    /**
     * Footer Author field in *Footer → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Author of the site.
     * - **API ID Path**: footer.primary.footer_author
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    footer_author: prismicT.RichTextField;
}
/**
 * Default variation for Footer Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Footer`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FooterSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<FooterSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Footer*
 *
 */
type FooterSliceVariation = FooterSliceDefault;
/**
 * Footer Shared Slice
 *
 * - **API ID**: `footer`
 * - **Description**: `Footer`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FooterSlice = prismicT.SharedSlice<"footer", FooterSliceVariation>;
/**
 * Primary content in SellingPoints → Primary
 *
 */
interface SellingPointsSliceDefaultPrimary {
    /**
     * Title field in *SellingPoints → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: selling_points.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Image field in *SellingPoints → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: selling_points.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Description field in *SellingPoints → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: selling_points.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for SellingPoints Slice
 *
 * - **API ID**: `default`
 * - **Description**: `SellingPoints`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SellingPointsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<SellingPointsSliceDefaultPrimary>, never>;
/**
 * Primary content in SellingPoints → Primary
 *
 */
interface SellingPointsSliceContactPointPrimary {
    /**
     * Title field in *SellingPoints → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: selling_points.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Image field in *SellingPoints → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: selling_points.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Description field in *SellingPoints → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: selling_points.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Contact Point variation for SellingPoints Slice
 *
 * - **API ID**: `contactPoint`
 * - **Description**: `SellingPoints`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SellingPointsSliceContactPoint = prismicT.SharedSliceVariation<"contactPoint", Simplify<SellingPointsSliceContactPointPrimary>, never>;
/**
 * Slice variation for *SellingPoints*
 *
 */
type SellingPointsSliceVariation = SellingPointsSliceDefault | SellingPointsSliceContactPoint;
/**
 * SellingPoints Shared Slice
 *
 * - **API ID**: `selling_points`
 * - **Description**: `SellingPoints`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SellingPointsSlice = prismicT.SharedSlice<"selling_points", SellingPointsSliceVariation>;
/**
 * Primary content in Treatments → Primary
 *
 */
interface TreatmentsSliceDefaultPrimary {
    /**
     * Title field in *Treatments → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: treatments.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Image field in *Treatments → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: treatments.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Description field in *Treatments → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: treatments.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Link field in *Treatments → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: The URL to your treatment
     * - **API ID Path**: treatments.primary.link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Item in Treatments → Items
 *
 */
export interface TreatmentsSliceDefaultItem {
    /**
     * Product Title field in *Treatments → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Title of treatment product
     * - **API ID Path**: treatments.items[].product_title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    product_title: prismicT.RichTextField;
    /**
     * Product Description field in *Treatments → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Description of treatment product
     * - **API ID Path**: treatments.items[].product_description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    product_description: prismicT.RichTextField;
    /**
     * Call To Action field in *Treatments → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Button + Link
     * - **API ID Path**: treatments.items[].cta
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    cta: prismicT.RichTextField;
}
/**
 * Default variation for Treatments Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Treatments`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TreatmentsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TreatmentsSliceDefaultPrimary>, Simplify<TreatmentsSliceDefaultItem>>;
/**
 * Slice variation for *Treatments*
 *
 */
type TreatmentsSliceVariation = TreatmentsSliceDefault;
/**
 * Treatments Shared Slice
 *
 * - **API ID**: `treatments`
 * - **Description**: `Treatments`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TreatmentsSlice = prismicT.SharedSlice<"treatments", TreatmentsSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { ContactDocumentData, ContactDocumentDataSlicesSlice, ContactDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, AllDocumentTypes, ContactPointSliceDefaultPrimary, ContactPointSliceDefault, ContactPointSliceVariation, ContactPointSlice, FooterSliceDefaultPrimary, FooterSliceDefault, FooterSliceVariation, FooterSlice, SellingPointsSliceDefaultPrimary, SellingPointsSliceDefault, SellingPointsSliceContactPointPrimary, SellingPointsSliceContactPoint, SellingPointsSliceVariation, SellingPointsSlice, TreatmentsSliceDefaultPrimary, TreatmentsSliceDefaultItem, TreatmentsSliceDefault, TreatmentsSliceVariation, TreatmentsSlice };
    }
}
