$(document).ready(function() {
    $('#multiselect').multiselect();

    $('#availableTablesSelected').click(function() {
        $('#selectTables').hide()
        $('#viewTables').show()
    })

    $('#selectTablesBtn').click(function() {
        $('#viewTables').hide()
        $('#selectTables').show()
    })
})

function filter() {
    var keyword = document.getElementById("search").value;
    var select = document.getElementById("multiselect");
    for (var i = 0; i < select.length; i++) {
        var txt = select.options[i].text;
        if (!txt.match(keyword)) {
            $(select.options[i]).attr('disabled', 'disabled').hide();
        } else {
            $(select.options[i]).removeAttr('disabled').show();
        }

    }
}

function filterTo() {
    var keyword = document.getElementById("search_to").value;
    var select = document.getElementById("multiselect_to");
    for (var i = 0; i < select.length; i++) {
        var txt = select.options[i].text;
        if (!txt.match(keyword)) {
            $(select.options[i]).attr('disabled', 'disabled').hide();
        } else {
            $(select.options[i]).removeAttr('disabled').show();
        }

    }
}


// Workflow Page JS Starts