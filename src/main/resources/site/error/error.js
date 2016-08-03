var thymeleaf = require('/lib/xp/thymeleaf');
var portal    = require('/lib/xp/portal'); // Import the portal functions
var menu      = require('/lib/enonic/menu/menu');
var i18n      = require('/lib/xp/i18n')

// Views
var view404     = resolve('page-not-found.html');
var viewGeneric = resolve('error.html');

exports.handle404 = function (err) {

  var params = pageSetup(i18n.localize({ key: 'error.404.title' }));
  params.messages.error_description = i18n.localize({ key: 'error.404.description' }) ;

  var body = thymeleaf.render(view404, params);
  return {
    contentType: 'text/html',
    body: body
  }
};

exports.handleError = function (err) {
  var debugMode = err.request.params.debug === 'true';
  if (debugMode && err.request.mode === 'preview') {
    return;
  }

  var params = pageSetup(i18n.localize({ key: 'error.general.title' }));
  params.errorCode = err.status
  params.messages.error_description = i18n.localize({ key: 'error.general.description' });

  var body = thymeleaf.render(viewGeneric, params);

  return {
      contentType: 'text/html',
      body: body
  }
};

function pageSetup(pageTitle) {
  var site = portal.getSite();

  var menuItems = menu.getMenuTree(3);

  var siteConfig = site.data.siteConfig;

  // Google Analytics
  var googleUATrackingId = siteConfig.config['googleUATrackingId'] || null;
  var facebookAppId = siteConfig.config['facebookAppId'] || null;

  // Head title
  var pageTitle = pageTitle || "Error";

  var messages = {};

  messages.contact_us           = i18n.localize({ key: 'contact_us' });
  messages.contact_email        = i18n.localize({ key: 'contact_email' });
  messages.navigation           = i18n.localize({ key: 'navigation' });
  messages.give_a_gift          = i18n.localize({ key: 'give_a_gift' });
  messages.contribution_usage   = i18n.localize({ key: 'contribution_usage' });
  messages.account_number       = i18n.localize({ key: 'account_number' });
  messages.change_language      = i18n.localize({ key: 'change_language' });
  messages.change_language_url  = i18n.localize({ key: 'change_language_url' });

  return {
    siteTitle: site['displayName'],
    sitePath: site['_path'],
    siteConfig: siteConfig,
    menuItems: menuItems,
    googleUATrackingId: googleUATrackingId,
    facebookAppId: facebookAppId,
    pageTitle: pageTitle,
    messages: messages,
  };
}