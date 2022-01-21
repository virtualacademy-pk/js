  let routes = [
    {
        path: 'category-list',
        url: 'src/category/category.html',
        initScript: ['src/category/category.js',
            'src/category/category-controller.js',
            'src/category/category-ui-controller.js',
            'src/category/category-app.js'],
        init: 'CategoryApp'
    },
    {
        path: 'product-list',
        url: 'src/product/product.html',
        initScript: ['src/product/product.js',
            'src/product/product-controller.js',
            'src/product/product-ui-controller.js',
            'src/product/product-app.js'],
        init: 'ProductApp'
    }
]