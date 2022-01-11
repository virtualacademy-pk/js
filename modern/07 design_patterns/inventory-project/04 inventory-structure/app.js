const Category = function(categoryId, categoryName, description){
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.description = description;
}
const CategoryController = (function() {


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
        addCategory: function(category){
            // Create new item
           const newItem = new Category(category.categoryId, category.categoryName, category.description);
            let categories;
            if(localStorage.getItem('categories') === null) {
                categories = [];
            } else {
                categories = JSON.parse(localStorage.getItem('categories'));
            }
            categories.push(newItem);
            localStorage.setItem('categories', JSON.stringify(categories));
        },
        logData: function(){
            return data;
        }
    }
})();



// UI Controller
const UICtrl = (function(){
    const UISelectors = {
        categoryList: '#category-list tbody',
        addBtn: '.add-btn',
        categoryIdInput: '#categoryId',
        categoryNameInput: '#categoryName',
        descriptionInput: '#description'
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
        },
        getCategoryInput: function(){
            return {
                categoryId: document.querySelector(UISelectors.categoryIdInput).value,
                categoryName: document.querySelector(UISelectors.categoryNameInput).value,
                description: document.querySelector(UISelectors.descriptionInput).value
            }
        },
        getSelectors: function(){
            return UISelectors;
        }
    }
})();



// App Controller
const App = (function(CategoryController, UICtrl){
    const loadEventListeners = function() {
        const UISelectors = UICtrl.getSelectors();

        // Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', categoryAddSubmit);
    }
    const categoryAddSubmit = function(e){
        // Get form input from UI Controller
        const input = UICtrl.getCategoryInput();

        CategoryController.addCategory(input);


        // Populate list with items
        UICtrl.populateCateogryList(CategoryController.getCategories());

        e.preventDefault();
    }
    // Public methods
    return {
        init: function(){
            const categories = CategoryController.getCategories();

            // Populate list with items
            UICtrl.populateCateogryList(categories);
            loadEventListeners();
        }
    }

})(CategoryController, UICtrl);

// Initialize App
App.init();