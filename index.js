const taskContainer = document.querySelector(".task_container");
const saveChanges = () => {
const taskData = {
    id: `${Date.now()}`,
    imageurl: document.getElementById("ImageURL").value,
    taskTitle: document.getElementById("tasktitle").value,
    taskType: document.getElementById("tasktype").value,
    taskDescrpition: document.getElementById("taskdescription").value,
};
const newCard = `<div class="col-md-6 col-lg-4" id=${taskData.id}>
<div class="card text-center">
    <div class="card-header d-flex justify-content-end gap-2">      
    <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-ruler"></i></button>
    <button type="button" class="btn btn-outline-danger"><i class="fas fa-dumpster-fire"></i></button>
    </div>
    <img src="${taskData.imageurl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${taskData.taskTitle}</h5>
      <p class="card-text">${taskData.taskDescrpition}</p>
      <a href="#" class="btn btn-primary">${taskData.taskType}</a>
    </div>
    <div class="card-footer">
    <button type="button" 
    class="btn btn-outline-primary float-end">Open Task</button>
    </div>`;

    taskContainer.insertAdjacentHTML("beforeend", newCard);

};