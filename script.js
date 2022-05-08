//working on the sort functionality still

// const allMovies = [];

$('#enter-movies').on('submit', function(e){
        e.preventDefault();
        
         let movieName = $('#movieName').val();
         let movieRating = $('#movieRating').val();
        //  allMovies.push({movieName, movieRating})
        
         $('#all-movies').append(`<tr>
         <td>${movieName} </td>
         <td>${movieRating}</td>
         <td class="center"><span>&#10006</span></td>
         </tr>`)

        $('#enter-movies').trigger('reset')
    });
    
    $('body').on('click', 'span', function(e){
        $(e.target).parent().parent().remove();
    })
    
   
    //not finished with this yet
    // $('#sort-form').on('submit', function(e){
    //     e.preventDefault();
        
    //     let selection = $('select option:selected').val()
    //     if(selection === 'by movie name A-Z'){
    //         console.log(selection)
    //     } else {
    //         console.log(selection)
    //     }   
    // })
