$(document).ready(() => {
    console.log("DOM Loaded!");
    let productsAll = $('.products-list__item');
    let productsContainer = $('#products-list');
    $('#filter-products').on('change', (evt) => {

        if ($(evt.target).val() == 'mais-vendido') {
            productsAll.sort((a, b) => {
                return $(b).data('ranking') - $(a).data('ranking');
            });
            productsContainer.html(productsAll);
        }
        if ($(evt.target).val() == 'menor-preco') {
            productsAll.sort((a, b) => {
                return parseFloat($(a).data('price')) - parseFloat($(b).data('price'));
            });

            productsContainer.html(productsAll);
        }
    })

});