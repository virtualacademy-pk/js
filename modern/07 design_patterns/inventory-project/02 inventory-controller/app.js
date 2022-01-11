// Storage Controller


// Item Controller
const CategoryController = (function(){
    // Item Constructor
    const Item = function(categoryId, categoryName, description){
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.description = description;
    }

    // Data Structure / State
    const data = {
        categories: [
            {categoryId: 1, categoryName: 'Computers', description: 'Computers'},
            {categoryId: 2, categoryName: 'Smart Phones', description: 'Smart Phones'},
            {categoryId: 3, categoryName: 'Kids', description: 'Kids'},
        ],
        currentCategory: null
    }

    // Public methods
    return {

        logData: function(){
            console.log('Initializing App...');
        }
    }
})();



// UI Controller
const UICtrl = (function(){
    // Public methods
    return {

    }
})();



// App Controller
const App = (function(CategoryController, UICtrl){

    // Public methods
    return {
        init: function(){
            console.log('Initializing App...');
        }
    }

})(CategoryController, UICtrl);

// Initialize App
App.init();