import { Injectable } from '@angular/core';
import { ContentfulClientApi, createClient, Entry } from 'contentful';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class ContentfulService {

  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() {
    // this.client.sync({initial: true})
    //  .then((res) => {
    //  console.log(res.entries);
    //  console.log(res.assets);
    // })
   }

getAll() {
  return this.client.sync(Object.assign({
    initial: true
  }))
    .then((res) => {
      const responseObj = JSON.parse(res.stringifySafe());
      const entries = responseObj.entries;
      window.localStorage.setItem('contentfulEntries', JSON.stringify(entries))
      console.log(entries);
      window.localStorage.setItem('contentfulSyncToken', res.nextSyncToken)
    })
}

getPage() {
  return this.client.sync(Object.assign({
    nextSyncToken: window.localStorage.getItem('contentfulSyncToken')
  }))
  .then((res) => {
    console.log(res.entries)
    console.log(res.assets)
    console.log(res.deletedEntries)
    console.log(res.deletedAssets)
    window.localStorage.setItem('contentfulSyncToken', res.nextSyncToken)
  })
}
  // getHomePage(homeId): Promise<Entry<any>> {
  //   return this.client.getEntries(Object.assign({
  //     content_type: 'generalPage'
  //   }, { 'sys.id': homeId }))
  //     .then(res => res.items[0]);
  // }
  // getLocationPage(locationId): Promise<Entry<any>> {
  //   return this.client.getEntries(Object.assign({
  //     content_type: 'generalPage'
  //   }, { 'sys.id': locationId }))
  //     .then(res => res.items[0]);
  // }
  // getStoryPage(storyId): Promise<Entry<any>> {
  //   return this.client.getEntries(Object.assign({
  //     content_type: 'generalPage'
  //   }, { 'sys.id': storyId }))
  //     .then(res => res.items[0]);
  // }
  // getOutdoorsPage(outdoorsId, include): Promise<Entry<any>> {
  //   return this.client.getEntries(Object.assign({
  //     content_type: 'generalPage'
  //   }, { 'sys.id': outdoorsId, include }))
  //     .then(res => res.items[0]);
  // }
  // getVisitPage(visitId): Promise<Entry<any>> {
  //   return this.client.getEntries(Object.assign({
  //     content_type: 'generalPage'
  //   }, { 'sys.id': visitId }))
  //     .then(res => res.items[0]);
  // }
  // getThanksPage(thanksId): Promise<Entry<any>> {
  //   return this.client.getEntries(Object.assign({
  //     content_type: 'generalPage'
  //   }, { 'sys.id': thanksId }))
  //     .then(res => res.items[0]);
  // }
  // getThankYouPage(thankYouId): Promise<Entry<any>> {
  //   return this.client.getEntries(Object.assign({
  //     content_type: 'generalPage'
  //   }, { 'sys.id': thankYouId }))
  //     .then(res => res.items[0]);
  // }
  // getThankYouContactPage(thankYouContactId): Promise<Entry<any>> {
  //   return this.client.getEntries(Object.assign({
  //     content_type: 'generalPage'
  //   }, { 'sys.id': thankYouContactId }))
  //     .then(res => res.items[0]);
  // }
  // getErrorPage(errorId): Promise<Entry<any>> {
  //   return this.client.getEntries(Object.assign({
  //     content_type: 'generalPage'
  //   }, { 'sys.id': errorId }))
  //     .then(res => res.items[0]);
  // }
  // getPolicyPage(privacyId): Promise<Entry<any>> {
  //   return this.client.getEntries(Object.assign({
  //     content_type: 'generalPage'
  //   }, { 'sys.id': privacyId }))
  //     .then(res => res.items[0]);
  // }
  // getEhoPage(ehoId): Promise<Entry<any>> {
  //   return this.client.getEntries(Object.assign({
  //     content_type: 'generalPage'
  //   }, { 'sys.id': ehoId }))
  //     .then(res => res.items[0]);
  // }
  // getInfo(query?: object): Promise<Entry<any>> {
  //   return this.client.getEntries(Object.assign({
  //     content_type: 'companyInfo'
  //   }, query))
  //     .then(res => res.items[0]);
  // }
  // getLivePage(query?: object): Promise<Entry<any>> {
  //   return this.client.getEntries(Object.assign({
  //     content_type: 'realEstatePage'
  //   }, query))
  //     .then(res => res.items[0]);
  // }
  // getHomes(query?: object): Promise<Entry<any>[]> {
  //   return this.client.getEntries(Object.assign({
  //     content_type: 'home'
  //   }, query))
  //     .then(res => res.items);
  // }
  // getHome(slug: string): Promise<Entry<any>> {
  //   return this.getHomes({ 'fields.slug': slug })
  //     .then(items => items[0])
  // }
  // getHomeSites(query?: object): Promise<Entry<any>[]> {
  //   return this.client.getEntries(Object.assign({
  //     content_type: 'homesite'
  //   }, query))
  //     .then(res => res.items);
  // }
  // getAmenities(query?: object): Promise<Entry<any>[]> {
  //   return this.client.getEntries(Object.assign({
  //     content_type: 'amenities'
  //   }, query))
  //     .then(res => res.items);
  // }
  // getHomeSite(slug: string): Promise<Entry<any>> {
  //   return this.getHomeSites({ 'fields.slug': slug })
  //     .then(items => items[0])
  // }
  //
  // getBlogPage(query?: object): Promise<Entry<any>> {
  //   return this.client.getEntries(Object.assign({
  //     content_type: 'blogPage'
  //   }, query))
  //     .then(res => res.items[0]);
  // }
  // getBlogPosts(query?: object): Promise<Entry<any>[]> {
  //   return this.client.getEntries(Object.assign({
  //     content_type: 'blogPost'
  //   }, query))
  //     .then(res => res.items);
  // }
  //
  // getBlogPost(slug: string): Promise<Entry<any>> {
  //   return this.getBlogPosts({ 'fields.slug': slug })
  //     .then(items => items[0])
  // }
  //
  // getRelatedBlogPost(cat: string): Promise<Entry<any>[]> {
  //   return this.getBlogPosts({ 'fields.category[0].fields.name': cat })
  //     .then(items => items)
  // }
  //
  // getTaggedBlogPosts(slug: string): Promise<Entry<any>[]> {
  //   return this.getBlogPosts({ 'fields.categories.fields.slug': slug })
  //     .then(items => items)
  // }
  // getBlogCategories(): Promise<Entry<any>[]> {
  //   return this.client.getEntries({
  //     content_type: 'blogCategory'
  //   })
  //     .then(res => res.items);
  // }
  // getBlogCategoryPage(query?: object): Promise<Entry<any>[]> {
  //   return this.client.getEntries(Object.assign({
  //     content_type: 'blogCategory'
  //   }, query))
  //     .then(res => res.items);
  // }
  // getBlogCategory(slug: string): Promise<Entry<any>> {
  //   return this.getBlogCategoryPage({ 'fields.slug': slug })
  //     .then(items => items[0])
  // }
}
