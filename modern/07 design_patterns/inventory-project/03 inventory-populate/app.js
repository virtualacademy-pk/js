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
/*    const data = {

        categories: [],
        currentCategory: null
    }*/

    // Public methods
    return {
        getCategories: function(){
            let categories;
            if(localStorage.getItem('categories') === null) {
                categories = [];
            } else {
                categories = JSON.parse(localStorage.getItem('categories'));
            }
            return categories;
        },
        logData: function(){
            return [];
        }
    }
})();



// UI Controller
const UICtrl = (function(){
    const UISelectors = {
        categoryList: '#category-list tbody'
    }
    // Public methods
    return {
        populateCateogryList: function(items){
            let html = '';

            items.forEach(function(item){
                html += `<tr>
            <td>${item.categoryId}</td>
            <td>${item.categoryName}</td>
            <td>${item.description}</td>
            <td>
              <a href="#" class="secondary-content">
                <i class="fa fa-pencil"></i>
              </a>
            </td>
          </tr>`;
            });

            // Insert list items
            document.querySelector(UISelectors.categoryList).innerHTML = html;
        }
    }
})();



// App Controller
const App = (function(CategoryController, UICtrl){

    // Public methods
    return {
        init: function(){
            const categories = CategoryController.getCategories();

            // Populate list with items
            UICtrl.populateCateogryList(categories);
        }
    }

})(CategoryController, UICtrl);

// Initialize App
App.init();