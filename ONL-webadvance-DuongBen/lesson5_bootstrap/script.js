{/* <div class="card" style="width:400px">
<img class="card-img-top" src="img_avatar1.png" alt="Card image" style="width:100%">
<div class="card-body">
  <h4 class="card-title">John Doe</h4>
  <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
  <a href="#" class="btn btn-primary stretched-link">See Profile</a>
</div>
</div> */}

let dom = document.getElementById("card")
for(let i = 0; i <50; i++){
    let html = `
    <div class="card" style="width:400px">
            <img class="card-img-top" src="img_avatar1.png" alt="Card image" style="width:100%">
            <div class="card-body">
              <h4 class="card-title">John Doe</h4>
              <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
              <a href="#" class="btn btn-primary stretched-link">See Profile</a>
            </div>
          </div>`
    
       dom.innerHTML += html 

}