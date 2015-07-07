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
        var body = $('body');

        it('is hidden', function() {
            expect(body).toHaveClass('menu-hidden');
        });

        it('toggles', function() {
            var menuIcon = $('.menu-icon-link');

            menuIcon.click();
            expect( body ).not.toHaveClass('menu-hidden');

            menuIcon.click();
            expect( body ).toHaveClass('menu-hidden');
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
