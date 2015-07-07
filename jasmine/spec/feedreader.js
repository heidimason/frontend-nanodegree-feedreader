/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('have URLs', function() {
            for (var key in allFeeds) {
                expect(allFeeds[key].url).toBeDefined;
                expect(allFeeds[key].url).not.toBe('');
            }
        });

        it('have names', function() {
            for (var key in allFeeds) {
                expect(allFeeds[key].name).toBeDefined();
                expect(allFeeds[key].name).not.toBe('');
            }
        });
    });

    describe('The menu', function() {
        var $body = $('body');

        it('is hidden', function() {
            expect($body).toHaveClass('menu-hidden');
        });

        it('toggles', function() {
            var $menuIcon = $('.menu-icon-link');

            $menuIcon.click();
            expect($body).not.toHaveClass('menu-hidden');

            $menuIcon.click();
            expect($body).toHaveClass('menu-hidden');
        });
    });

    describe('Initial Entries', function() {
        var $entry = $('article.entry');
        var $feedContainer = $('.feed');

        beforeEach(function(done) { // Using "beforeEach()" because loadFeed() is asynchronous
            loadFeed(0, done);
         });

        it('are in feed container', function(done) {
            expect( ($entry, $feedContainer).length ).not.toBe(0);
            done();
        });
    });

    // describe('New Feed Selection', function() {
    //     /* TODO: Write a test that ensures when a new feed is loaded
    //      * by the loadFeed function that the content actually changes.
    //      * Remember, loadFeed() is asynchronous.
    //      */
    //     beforeEach(function(done) { // Using "beforeEach()" because loadFeed() is asynchronous
    //         loadFeed(function() {
    //             done();
    //         });
    //      });

    //     it('content changes', function(done) {
    //         // expect($container).;
    //         done();
    //     });
    // });
}());
