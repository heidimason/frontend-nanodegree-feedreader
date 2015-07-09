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

    // New test suite
    describe('RSS Feeds', function() {

        // Tests that the allFeeds variable has been defined and that it is not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty
        it('have URLs', function() {
            for (var key in allFeeds) {
                expect(allFeeds[key].url).toBeDefined;
                expect(allFeeds[key].url).not.toBe('');
            }
        });

        // Loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty
        it('have names', function() {
            for (var key in allFeeds) {
                expect(allFeeds[key].name).toBeDefined();
                expect(allFeeds[key].name).not.toBe('');
            }
        });
    });


    // New test suite
    describe('The menu', function() {
        var $body = $('body');

        // Tests that the menu element is hidden by default
        it('is hidden by default', function() {
            expect($body).toHaveClass('menu-hidden');
        });

        // Tests that the menu changes visibility when the menu icon is clicked
        it('toggles', function() {
            var $menuIcon = $('.menu-icon-link');

            $menuIcon.click();
            expect($body).not.toHaveClass('menu-hidden');

            $menuIcon.click();
            expect($body).toHaveClass('menu-hidden');
        });
    });


    // New test suite
    describe('Initial Entries', function() {
        beforeEach(function(done) { // Using "beforeEach()" because loadFeed() is asynchronous
            loadFeed(0, done);
        });

        // Tests that when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container
        it('Feed container contains at least one entry', function(done) {
            var $feedContainer = $('.feed');

            expect( $feedContainer.has('.entry').length ).not.toBe(0);
            done();
        });
    });


    // New test suite
    describe('New Feed Selection', function() {
        beforeEach(function(done) { // Using "beforeEach()" because loadFeed() is asynchronous
            loadFeed(0, done);
        });

        // Tests that when a new feed is loaded by the loadFeed function, the content actually changes
        it('content changes', function(done) {
            var feed0 = $('feed').html();

            loadFeed(1); // loadFeed(2) and loadFeed(3) also pass test
            expect($('.feed').html()).not.toEqual(feed0);
            done();
        });
    });
}());
