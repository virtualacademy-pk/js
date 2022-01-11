export const UIController = (function(){
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

