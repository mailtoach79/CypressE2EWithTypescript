Feature: User login and search, add to cart an item.

    Scenario: Add to Cart Flow
        Given login to the application
        When user search and add the item to the cart
        Then addtocart item should contain the search item