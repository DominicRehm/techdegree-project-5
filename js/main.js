const $lightbox = $('.lightbox-container a');

$('#search-field').on('keyup', function(event) {

    let $search = $(event.target).val().toUpperCase();
    
    for (i = 0; i < $lightbox.length; i += 1) {
        
        let $imgSearch = $lightbox.eq(i);

        if 
        ($imgSearch.attr('data-title').toUpperCase().indexOf($search) === -1) {
            $imgSearch.hide();
        } 
        else if ($imgSearch.attr('data-title').toUpperCase().indexOf($search) !== -1) {
            $imgSearch.show();
        }
    }
});