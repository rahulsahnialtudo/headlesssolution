import { SitecorePageProps } from 'lib/page-props';
import config from 'temp/config';

import { getContentStylesheetLink } from '@sitecore-jss/sitecore-jss-nextjs';

import { Plugin } from '..';

class ContentStylesPlugin implements Plugin {
  order = 2;

  async exec(props: SitecorePageProps) {
    // Get content stylessheet link, empty if styles are not used on the page
    const contentStyles = getContentStylesheetLink(
      props.layoutData,
      config.sitecoreEdgeContextId,
      config.sitecoreEdgeUrl
    );

    contentStyles && props.headLinks.push(contentStyles);

    return props;
  }
}

export const contentStylesPlugin = new ContentStylesPlugin();
