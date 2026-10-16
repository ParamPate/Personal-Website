import {test, before, after} from 'node:test';
import assert from 'node:assert/strict';
import {existsSync} from 'node:fs';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {createServer} from 'vite';

let server, app, markup;
before(async () => {
  server = await createServer({
    configFile: false,
    server: {middlewareMode: true, ws: false, watch: null},
    appType: 'custom',
  });
  app = await server.ssrLoadModule('/src/App.jsx');
  markup = renderToStaticMarkup(React.createElement(app.default));
});
after(async () => { await server?.close(); });

test('navigation and accessible section labels resolve to unique rendered targets', () => {
  const ids = [...markup.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length);
  for (const [, target] of markup.matchAll(/(?:href="#|aria-labelledby=")([^"]+)"/g)) {
    assert.ok(ids.includes(target), `Missing target: ${target}`);
  }
  for (const id of ['about', 'work', 'projects', 'skills']) assert.ok(ids.includes(id));
  assert.ok(!ids.includes('arcade'), 'Arcade is intentionally deferred');
});
test('project links point to GitHub repositories and rendered sprites exist locally', () => {
  for (const project of app.PORTFOLIO_DATA.projects) {
    assert.ok(project.links.length > 0);
    for (const link of project.links) {
      const url = new URL(link.url);
      assert.equal(url.origin, 'https://github.com');
      assert.match(url.pathname, /^\/ParamPate\/[^/]+$/);
    }
  }
  for (const [, asset] of markup.matchAll(/src="(\/sprites\/[^" ]+)"/g)) {
    assert.ok(existsSync(`public${asset}`), asset);
  }
});
