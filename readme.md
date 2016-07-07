## Theory of operation

The extension operates by redirecting key network requests to files in the
extension itself, so we can supply alternate source files for the application.
This is done in control.js, issuing requests to chrome-extension://<id> via the
`getURL()` API method.

The files in the extension have additional dependencies, also in the extension.
We could, in theory, serve those to the app the same way, creating a redirect 
to a chrome-extension URL. However this doesn't work for font files, for reasons
that are not understood: font files will, uniquely, generate a CORS error on
redirects to chrome-extension URLs.

Consequently, we instead alter the xena webpack root to point to
chrome-extension://<id>.  This requires that we know the chrome application id
at build time. We must have a deterministic application id, even during
development. This is accomplished by setting the 'key' field in the
manifest.json file. See chrome extension manifest docs for details. The value
of the key field comes from the manifest of the plugin, after installation via
the chrome store.

## Build

This is probably incomplete.

 * Install compass
   * Install rbenv
   * Install a ruby, and set the ruby version for dcc-portal/dcc-porta-ui directory
   * Install compass
 * In dcc-porta/dcc-portal-ui directory
   * `npm link ucsc-integrations`
   * `npm install`
 * Run `./build` in top directory
