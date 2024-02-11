let students = [{'No':"1", 'name':"Christian Marco", 'age':"28"}, 
                {'No':"2", 'name':"Teddy Dumagat", 'age':"28"},
                {'No':"3", 'name':"Jhoven Mercado",'age':"23"}]
let table = document.getElementById('myTable');

showStudents(students)

function showStudents(data){
    
    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].No}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].age}</td>    
                  </tr>`
                  table.innerHTML+= row;
    } 
}