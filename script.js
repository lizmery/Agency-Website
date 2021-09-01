$(document).ready(function() {
    // Navigation
    $('#menu-btn').click(function() {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('active');
    });

    // Portfolio Filter
    $('.filter').click(function() {
        const filter = $(this).attr('data-filter');

        $(this).addClass('active').siblings().removeClass('active');

        if(filter == 'All') {
            $('.project-box').show('900');
        } else {
            $('.project-box').not('.' + filter).hide('900');
            $('.project-box').filter('.' + filter).show('900');
        }
    });

    // Modal Popup
    $('.project-btn').click(function() {
        let modal = $(this).attr('id');
        let projectTitle = $('h1.' + modal).text();
        let projectImg = $('img.' + modal).attr('src');
       
        // add project title and project image
        $('h3.modal-title').text(projectTitle);
        $('#current-img').attr('src', projectImg);

        // show modal
        $('.modal').css({'visibility': 'visible', 'opacity': '1'});
    });

    $('.modal-close').click(function() {
        // close modal
        $('.modal').css({'visibility': 'hidden', 'opacity': '0'});
    });

    // Chatbot
    $('.chat-icon').click(function() {
        // open chat box
        $('.chat-box').addClass('active');
    });
    $('.close-chat').click(function() {
        // close chat box
        $('.chat-box').removeClass('active');
    })
    $('#chat').convform({selectInputStyle: 'disable'});
});