var should, wd;

should = require('should');

wd = require('../common/wd-with-cov');

describe("wd", function() {
  return describe("local", function() {
    describe("wd remote tests", function() {
      describe("default", function() {
        return it("browser should be initialized with default parameters", function(done) {
          var browser;
          browser = wd.remote();
          delete browser.username;
          delete browser.accessKey;
          browser.options.host.should.equal('127.0.0.1');
          browser.options.port.should.equal(4444);
          browser.options.path.should.equal('/wd/hub/session');
          browser.basePath.should.equal('/wd/hub');
          should.not.exist(browser.username);
          should.not.exist(browser.accessKey);
          return done();
        });
      });
      return describe("params", function() {
        describe("host, port", function() {
          return it("browser should be initialized with given parameters", function(done) {
            var browser;
            browser = wd.remote('localhost', 8888);
            delete browser.username;
            delete browser.accessKey;
            browser.options.host.should.equal('localhost');
            browser.options.port.should.equal(8888);
            browser.options.path.should.equal('/wd/hub/session');
            browser.basePath.should.equal('/wd/hub');
            should.not.exist(browser.username);
            should.not.exist(browser.accessKey);
            return done(null);
          });
        });
        return describe("host, port, username, accesskey", function() {
          return it("browser should be initialized with given parameters", function(done) {
            var browser;
            browser = wd.remote('localhost', 8888, 'mickey', 'mouse');
            browser.options.host.should.equal('localhost');
            browser.options.port.should.equal(8888);
            browser.options.path.should.equal('/wd/hub/session');
            browser.basePath.should.equal('/wd/hub');
            browser.username.should.equal('mickey');
            browser.accessKey.should.equal('mouse');
            return done(null);
          });
        });
      });
    });
    return describe("options", function() {
      describe("empty options", function() {
        return it("browser should be initialized with default", function(done) {
          var browser;
          browser = wd.remote({});
          delete browser.username;
          delete browser.accessKey;
          browser.options.host.should.equal('127.0.0.1');
          browser.options.port.should.equal(4444);
          browser.options.path.should.equal('/wd/hub/session');
          browser.basePath.should.equal('/wd/hub');
          should.not.exist(browser.username);
          should.not.exist(browser.accessKey);
          return done(null);
        });
      });
      describe("host, port", function() {
        return it("browser should be initialized with given options", function(done) {
          var browser;
          browser = wd.remote({
            host: 'localhost',
            port: 8888
          });
          delete browser.username;
          delete browser.accessKey;
          browser.options.host.should.equal('localhost');
          browser.options.port.should.equal(8888);
          browser.options.path.should.equal('/wd/hub/session');
          browser.basePath.should.equal('/wd/hub');
          should.not.exist(browser.username);
          should.not.exist(browser.accessKey);
          return done(null);
        });
      });
      describe("host, port, username, accesskey", function() {
        return it("browser should be initialized with given options", function(done) {
          var browser;
          browser = wd.remote({
            host: 'localhost',
            port: 8888,
            username: 'mickey',
            accessKey: 'mouse'
          });
          browser.options.host.should.equal('localhost');
          browser.options.port.should.equal(8888);
          browser.options.path.should.equal('/wd/hub/session');
          browser.basePath.should.equal('/wd/hub');
          browser.username.should.equal('mickey');
          browser.accessKey.should.equal('mouse');
          return done(null);
        });
      });
      describe("path", function() {
        return it("browser should be initialized with given options", function(done) {
          var browser;
          browser = wd.remote({
            path: '/taiwan'
          });
          delete browser.username;
          delete browser.accessKey;
          browser.options.host.should.equal('127.0.0.1');
          browser.options.port.should.equal(4444);
          browser.options.path.should.equal('/taiwan/session');
          browser.basePath.should.equal('/taiwan');
          should.not.exist(browser.username);
          should.not.exist(browser.accessKey);
          return done(null);
        });
      });
      describe("host, port, path", function() {
        return it("browser should be initialized with given options", function(done) {
          var browser;
          browser = wd.remote({
            host: 'localhost',
            port: 8888,
            path: '/'
          });
          delete browser.username;
          delete browser.accessKey;
          browser.options.host.should.equal('localhost');
          browser.options.port.should.equal(8888);
          browser.options.path.should.equal('/session');
          browser.basePath.should.equal('/');
          should.not.exist(browser.username);
          should.not.exist(browser.accessKey);
          return done(null);
        });
      });
      return describe("host, port, username, accesskey, path", function() {
        return it("browser should be initialized with given options", function(done) {
          var browser;
          browser = wd.remote({
            host: 'localhost',
            port: 8888,
            username: 'mickey',
            accessKey: 'mouse',
            path: '/asia/taiwan'
          });
          browser.options.host.should.equal('localhost');
          browser.options.port.should.equal(8888);
          browser.options.path.should.equal('/asia/taiwan/session');
          browser.basePath.should.equal('/asia/taiwan');
          browser.username.should.equal('mickey');
          browser.accessKey.should.equal('mouse');
          return done(null);
        });
      });
    });
  });
});
