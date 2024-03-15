//create function filldatainto select element

const fillDataIntoSelect = (feildId, message, dataList, propertyName, selectedValue) => {

    feildId.innerHTML = '';

    if (message != '') {
        const optionMsgD = document.createElement('option');
        optionMsgD.innerText = message;
        optionMsgD.selected = 'selected';
        optionMsgD.disabled = 'disabled';
        feildId.appendChild(optionMsgD);

    }

    dataList.forEach(element => {
        const option = document.createElement('option');

        //normal string object convert to json string format--->advantage of Json is we can found real objects
        option.value = JSON.stringify(element);
        option.innerText = element[propertyName];

        if (selectedValue == element[propertyName]) {
            option.selected = true;
        }
        feildId.appendChild(option);
    });

}