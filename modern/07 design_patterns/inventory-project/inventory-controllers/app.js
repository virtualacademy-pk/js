// Storage Controller


// Item Controller
const CategoryCtrl = (function(){
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
        getCategories: function(){
            return data.categories;
        },
        logData: function(){
            return data;
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
const App = (function(CategoryCtrl, UICtrl){

    // Public methods
    return {
        init: function(){
            const categories = CategoryCtrl.getCategories();

            // Populate list with items
            UICtrl.populateCateogryList(categories);
        }
    }

})(CategoryCtrl, UICtrl);

// Initialize App
App.init();