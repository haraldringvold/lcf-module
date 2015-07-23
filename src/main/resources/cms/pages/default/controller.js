var menu = require('/cms/lib/menu.js');
var stk = require('/cms/lib/stk/stk.js');

exports.get = function(req) {

  var site = execute('portal.getSite');
  var content = execute('portal.getContent');

  var menuItems = menu.getSiteMenu(3);

  var moduleConfig = site.data.moduleConfig;;

  // Google Analytics
  var googleUATrackingId = moduleConfig.config['googleUATrackingId'] || null;

  // Contact page URL (for footer)
  var contactPageUrl = moduleConfig.config['contactPage'] ? execute('portal.pageUrl', {id: moduleConfig.config['contactPage']}) : '#';

  // Defines whether page header is layered or not
  var headerType = content.page.config['headerType'] ? content.page.config['headerType'] : 'default';

  // Head title
  var pageTitle = content['displayName'];

  var pageHead = content['displayName'] + ' - ' + site['displayName'];

  // Open Graph Metadata
  var openGraph = {
      'og:title': content['displayName'],
      'og:site_name': site['displayName'],
      'og:url': null,
      'og:image': execute('portal.assetUrl', { path: 'img/og-enonic-logo.png' })
  };

  var params = {
      siteTitle: site['displayName'],
      mainRegion: content.page.regions['main'],
      sitePath: site['_path'],
      moduleConfig: moduleConfig,
      menuItems: menuItems,
      headerType: headerType,
      googleUATrackingId: googleUATrackingId,
      pageTitle: pageTitle,
      pageHead: pageHead,
      openGraph: openGraph

  };

  var view = resolve('default.html');

  return stk.view.render(view, params);
};