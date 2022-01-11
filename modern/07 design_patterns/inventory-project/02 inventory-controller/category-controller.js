export const CategoryController = (function(){
    // Item Constructor
    const Item = function(categoryId, categoryName, description){
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.description = description;
    }
    // Public methods
    return {

        logData: function(){
            console.log('Initializing App...');
        }
    }
})();

