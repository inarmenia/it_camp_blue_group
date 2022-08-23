function search() {
    let input = document.getElementById('filter-input');
    input.addEventListener('keyup', function () {
        let filter = input.value.toLowerCase(),
            filterElements = document.querySelectorAll('#app .main');
        
            
        filterElements.forEach(item => {
            if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    }); 
  }
  export default  search();
  