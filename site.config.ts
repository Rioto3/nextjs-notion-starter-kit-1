import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  // TODO: Notionの実際のページIDに置き換える
  rootNotionPageId: 'c4a8095dad1240c281ecbba9dce6b914',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Rioto3 Portfolio',
  domain: 'rioto3.vercel.app',
  author: 'Rioto3',

  // open graph metadata (optional)
  description: 'Rioto3のポートフォリオサイト - 技術記事、プロジェクト、ノート',

  // social usernames (optional)
  twitter: 'rioto3_',
  github: 'Rioto3',
  // linkedin: '',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  pageUrlOverrides: {
    '/about': 'c4a8095dad1240c281ecbba9dce6b914',
    // '/posts': '', // ブログページ用にIDを追加
    // '/projects': '', // プロジェクトページ用にIDを追加
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'ブログ',
      pageId: 'c4a8095dad1240c281ecbba9dce6b914' // TODO: 実際のページIDに置き換える
    },
    {
      title: 'プロジェクト',
      pageId: 'c4a8095dad1240c281ecbba9dce6b914' // TODO: 実際のページIDに置き換える
    },
    {
      title: 'About',
      pageId: 'c4a8095dad1240c281ecbba9dce6b914' // TODO: 実際のページIDに置き換える
    }
  ]
})
