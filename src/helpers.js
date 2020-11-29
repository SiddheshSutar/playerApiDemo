const formatDate = (date_) => {
    //convert local to UTC
    let tempDate = date_;
    let arr_ = tempDate.split(' ');
    let new_ = tempDate.replace(arr_[2], 'UTC');
    return new Date(new_).toString();

}

const sortAscending = (Arr, sortParam) => {

    let newArr= Arr.sort((a, b) => (parseInt(a[sortParam]) < parseInt(b[sortParam])) ? 1: (
        (parseInt(b[sortParam]) < parseInt(a[sortParam]) ? -1 : 0)
    ));
    return newArr;
}
export {
    formatDate,
    sortAscending
}