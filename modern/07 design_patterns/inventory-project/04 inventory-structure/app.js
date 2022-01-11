import {UIController} from "./ui-controller.js";
import {CategoryController} from "./category-controller.js";


  // App Controller
const App = (function(CategoryController, UIController){
    const loadEventListeners = function() {
        const UISelectors = UIController.getSelectors();

        // Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', categoryAddSubmit);
    }
    const categoryAddSubmit = function(e){
        // Get form input from UI Controller
        const input = UIController.getCategoryInput();

        CategoryController.addCategory(input);


        // Populate list with items
        UIController.populateCateogryList(CategoryController.getCategories());

        e.preventDefault();
    }
    // Public methods
    return {
        init: function(){
            const categories = CategoryController.getCategories();

            // Populate list with items
            UIController.populateCateogryList(categories);
            loadEventListeners();
        }
    }

})(CategoryController, UIController);

// Initialize App
App.init();