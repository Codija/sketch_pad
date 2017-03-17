var start = function(option){
    $('#grid_container').html("");
    var input = prompt('Type an number between 1 and 128');
        if (input >= 1 && input <= 130){
            var square_size = $('#grid_container').width()/input - 1;

            for(var i = 1; i <= input; i++){
                for(var j = 1; j <= input; j++){
                    $('#grid_container').append('<div class="grid_square"></div>');
                }
                $('#grid_container').append('<div class="new_row"></div>');
            }
            $('.grid_square').css('width',square_size);
            $('.grid_square').css('height',square_size);
            $('.grid_square').mouseenter(function(){
                switch(option){
                    case 1:
                        $(this).addClass('grid_color');
                    break;
                    case 2:
                        var back = ['#ff0000','blue','gray','#7CB9E8', '#72A0C1', ' #C46210', '#A4C639', '#9966CC', '#008000', '#D0FF14', '#E0218A'];
                        var rand = back[Math.floor(Math.random() * back.length)];
                        $(this).css('background',rand);
                    break;
                    case 3:
                        var currentOpacity = $(this).css('opacity');
                        if(currentOpacity > 0){
                            $(this).css('opacity', currentOpacity - 0.1);
                        }
                    break;
                }
            });
        } else{
            alert('Please enter number');
        }
    }

    $('#start1').click(function () {
      $(this).effect("bounce", { times:5 }, 300);
  });
    $('#start2').click(function () {
      $(this).effect("bounce", {  times:5 }, 300);
  });
    $('#start3').click(function () {
      $(this).effect("bounce", {  times:5 }, 300);
  });
