var thymeleaf = require('/lib/xp/thymeleaf');
var contentLib = require('/lib/xp/content'); // Import the content service functions
var portal = require('/lib/xp/portal'); // Import the portal functions
var menu = require('/lib/enonic/menu/menu');
var i18n = require('/lib/xp/i18n')
var view = resolve('default.html');

exports.get = function(req) {

  var site = portal.getSite();
  var content = portal.getContent();

  var menuItems = menu.getMenuTree(3);

  var siteConfig = site.data.siteConfig;

  // Google Analytics
  var googleUATrackingId = siteConfig.config['googleUATrackingId'] || null;
  var facebookAppId = siteConfig.config['facebookAppId'] || null;

  // Contact page URL (for footer)
  var contactPageUrl = siteConfig.config['contactPage'] ? portal.pageUrl({id: siteConfig.config['contactPage']}) : '#';

  // Defines whether page header is layered or not
  var headerType = content.page.config['headerType'] ? content.page.config['headerType'] : 'default';

  // Head title
  var pageTitle = content['displayName'];

  var pageHead = content['displayName'] + ' - ' + site['displayName'];

  // Open Graph Metadata
  var openGraph = {
      'og:title': content['displayName'],
      'og:site_name': site['displayName'],
      // 'og:url': null,
      // 'og:image': portal.assetUrl({ path: 'img/og-enonic-logo.png' })
  };

  var mainRegion   = content.page.regions["main"];
  var footerRegion = content.page.regions["footer"];

  var messages = {};

  messages.contact_us          = i18n.localize({ key: 'contact_us' });
  messages.contact_email       = i18n.localize({ key: 'contact_email' });
  messages.navigation          = i18n.localize({ key: 'navigation' });
  messages.give_a_gift         = i18n.localize({ key: 'give_a_gift' });
  messages.contribution_usage  = i18n.localize({ key: 'contribution_usage' });
  messages.account_number      = i18n.localize({ key: 'account_number' });
  messages.change_language     = i18n.localize({ key: 'change_language' });
  messages.change_language_url = i18n.localize({ key: 'change_language_url' });

  var params = {
    siteTitle: site['displayName'],
    mainRegion: mainRegion,
    footerRegion: footerRegion,
    sitePath: site['_path'],
    siteConfig: siteConfig,
    menuItems: menuItems,
    headerType: headerType,
    googleUATrackingId: googleUATrackingId,
    facebookAppId: facebookAppId,
    pageTitle: pageTitle,
    pageHead: pageHead,
    openGraph: openGraph,
    messages: messages
  };

  return {
    body: thymeleaf.render(view, params)
  }
};