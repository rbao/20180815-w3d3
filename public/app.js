$(function() {
  // $('button').on('click', function() {
  //   $.get('/article.html').done(function(article) {
  //     $('body').append(article)
  //   })
  // })

  function getProductHtml(product) {
    return `<li>${product.name} - ${product.price}</li>`
  }

  $.get('/products').done(function(products) {
    // 1. Iterate through the products
    for (productId in products) {
      let product = products[productId]

      // 2. Append li element to the ul
      $('ul#product-list').append(getProductHtml(product))
    }
  })

  $('form#new-product').on('submit', function(e) {
    // 1. Prevent the default behaviour
    e.preventDefault()

    // 2. Get the data from the form
    let data = $(this).serialize()

    // 3. Send the request
    $.post('/products', data).done(function(product) {
      // 4. Append li element to the ul
      $('ul#product-list').append(getProductHtml(product))

      // 5. Clear the input field
      $('form#new-product input').val('')
    })
  })
})