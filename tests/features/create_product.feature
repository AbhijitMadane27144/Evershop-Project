Feature: Admin Product Management

  Scenario: Admin logs in and creates a new product
    Given the admin is logged into the system
    When the admin opens the new product form
    And fills in the product details
    And uploads a product image
    And selects product attributes
    And saves the product
    Then the product should be created successfully