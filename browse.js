const personsListSelector = 'div[name$=\'profiles\']';
const apiUrl = 'https://private-anon-3cd350211a-wad20postit.apiary-mock.com'
""
loadPersons(); // loadPeople?

function loadPersons() {
    $.get(apiUrl + '/profiles', persons => {
        $(personsListSelector).empty();

        id = 0 // API should have supported that!
        for (const person of persons) {
            buttonid = `follow-button-${id}`
            element = `<div class="personsprofile">
                <div><img src="${person.avatar}" alt="Avatar"></div>
                <div>${person.firstname} ${person.lastname}</div>
                <div><button id="${buttonid}">Follow</button></div>
            </div>
            `

            $(personsListSelector).append(element)
            $(`#${buttonid}`).click(function() {
                if ($(this).text() === "Follow") {
                    $(this).text("Followed")
                    $(this).css('background-color', 'white')
                    $(this).css('color', 'darkmagenta')
                } else {
                    $(this).text("Follow")
                    $(this).css('background-color', 'darkmagenta')
                    $(this).css('color', 'white')
                }
            })
            id++
        }
    });
}

function subscribeButtonClicked() {

}
