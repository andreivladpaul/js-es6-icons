const icons = [
      {
    name: 'cat',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'crow',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dog',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dove',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dragon',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'horse',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'hippo',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'fish',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'carrot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'apple-alt',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'lemon',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'pepper-hot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'user-astronaut',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-graduate',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-ninja',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-secret',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
];

const colors = [
    'blue',
    'orange',
    'purple'
]

const iconsContainer = document.querySelector('.container');

//Function that add a div with icons from the array
/* icons.forEach(element => {
    let {family, prefix, name, family} = element;
    iconsContainer.innerHTML += `
    <div class="icons">
        <i class="${family} ${prefix + name}"></i>
        <div class="icon__name">${name}</div>
    </div>`
}); */

//Function to Clean up iconsContainer and create divs with icons with color for each type
function print(array, container) {
    container.innerHTML = '';

    array.forEach((element) => {
        let {family, prefix, name, color} = element;
        container.innerHTML += `
            <div class="icons">
                <i class="${family} ${prefix + name}" style="color:${color}"></i>
                <div class="icon__name">${name}</div>
            </div>
        `;
    });

};

//Create a new array with just the "type" of the element in the array
function getType(array) {
    const types =[]
    array.forEach((element) => {
        if (!types.includes(element.type)) {
            types.push(element.type)
        }
    })
    return types;
};
//----------------------------------------------------------------------

//Create a function which color the element based on his type
function colorIcons(array, colors) {
    const types = getType(array);

    const coloredArray = array.map((element) => {
        const indexType = types.indexOf(element.type); //it shows the index 
        
        element.color = colors[indexType]
        return element;

    });
    
    return coloredArray;
};
//----------------------------------------------------------------------
const coloredArray = colorIcons(icons, colors);
const types = getType(coloredArray);
const select = document.getElementById('type');

print(coloredArray, iconsContainer); 
printOptions(types, select)
//Function to create all the options in select 
function printOptions(array, select) {
    array.forEach(element => {
        select.innerHTML += `
        <option value="">${element}</option>
        `
    })
}
//----------------------------------------------------------------------
//Function to show just the selected icons
function filterValues(array,type) {
    const filteredIcons = array.filter((element) => {
        if (element.type === type){
            return true
        }
        return false;
    });

    if(type == '' ) {
        return array
    }
    return filteredIcons;
}


select.onchange = function(element) {
    const filtered = filterValues(icons, element.target.value);
    return filtered;

    print(filtered,iconsContainer)
}
//----------------------------------------------------------------------